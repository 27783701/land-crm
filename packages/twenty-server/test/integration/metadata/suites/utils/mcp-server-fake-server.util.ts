import http from 'http';
import { Readable } from 'stream';

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { WebStandardStreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js';
import { z } from 'zod';

export type FakeMcpServer = {
  url: string;
  receivedAuthorizationHeaders: (string | undefined)[];
  close: () => Promise<void>;
};

const createMcpServer = (): McpServer => {
  const mcpServer = new McpServer({ name: 'fake', version: '1.0.0' });

  mcpServer.registerTool(
    'search_docs',
    {
      description: 'Search the documentation',
      inputSchema: { query: z.string() },
      annotations: { readOnlyHint: true },
    },
    async ({ query }) => ({
      content: [{ type: 'text', text: `results for ${query}` }],
    }),
  );
  mcpServer.registerTool(
    'docs.search',
    { description: 'Dropped by the sanitizer' },
    async () => ({ content: [] }),
  );

  return mcpServer;
};

const readBody = (req: http.IncomingMessage): Promise<string> =>
  new Promise((resolve) => {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
    });
    req.on('end', () => resolve(body));
  });

// Stateless MCP transports are single-use, so every request gets its own.
const handleMcpRequest = async (
  req: http.IncomingMessage,
  res: http.ServerResponse,
): Promise<void> => {
  const transport = new WebStandardStreamableHTTPServerTransport({
    sessionIdGenerator: undefined,
  });

  await createMcpServer().connect(transport);

  const body = await readBody(req);
  const response = await transport.handleRequest(
    new Request(`http://${req.headers.host}${req.url}`, {
      method: req.method,
      headers: req.headers as Record<string, string>,
      body: body.length > 0 ? body : undefined,
    }),
  );

  res.writeHead(response.status, Object.fromEntries(response.headers));

  if (response.body === null) {
    res.end();

    return;
  }

  Readable.fromWeb(response.body as never).pipe(res);
};

export const startFakeMcpServer = (port: number): Promise<FakeMcpServer> =>
  new Promise((resolve) => {
    const receivedAuthorizationHeaders: (string | undefined)[] = [];

    const server = http.createServer((req, res) => {
      receivedAuthorizationHeaders.push(req.headers.authorization);
      void handleMcpRequest(req, res).catch(() => {
        res.writeHead(500).end();
      });
    });

    server.listen(port, '127.0.0.1', () => {
      resolve({
        url: `http://127.0.0.1:${port}/mcp`,
        receivedAuthorizationHeaders,
        close: () =>
          new Promise((resolveClose) => {
            server.closeAllConnections();
            server.close(() => resolveClose());
          }),
      });
    });
  });
