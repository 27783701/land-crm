import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { buildAxiosFetch } from '@lifeomic/axios-fetch';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';
import { type CallToolResult } from '@modelcontextprotocol/sdk/types.js';
import { isDefined } from 'twenty-shared/utils';
import { Repository } from 'typeorm';

import { SecureHttpClientService } from 'src/engine/core-modules/secure-http-client/secure-http-client.service';
import { ConnectedAccountEntity } from 'src/engine/metadata-modules/connected-account/entities/connected-account.entity';
import { ConnectedAccountTokenEncryptionService } from 'src/engine/metadata-modules/connected-account/services/connected-account-token-encryption.service';
import { type FlatMcpServer } from 'src/engine/metadata-modules/flat-mcp-server/types/flat-mcp-server.type';
import {
  McpServerException,
  McpServerExceptionCode,
} from 'src/engine/metadata-modules/mcp-server/mcp-server.exception';
import { ConnectedAccountRefreshTokensService } from 'src/modules/connected-account/refresh-tokens-manager/services/connected-account-refresh-tokens.service';

const MCP_CLIENT_INFO = { name: 'twenty', version: '1.0.0' };
const LIST_TOOLS_TIMEOUT_MS = 10_000;
const CALL_TOOL_TIMEOUT_MS = 30_000;

type McpServerTarget = Pick<FlatMcpServer, 'url' | 'connectedAccountId'> & {
  workspaceId: string;
};

@Injectable()
export class McpServerClientService {
  constructor(
    private readonly secureHttpClientService: SecureHttpClientService,
    private readonly connectedAccountRefreshTokensService: ConnectedAccountRefreshTokensService,
    private readonly connectedAccountTokenEncryptionService: ConnectedAccountTokenEncryptionService,
    @InjectRepository(ConnectedAccountEntity)
    private readonly connectedAccountRepository: Repository<ConnectedAccountEntity>,
  ) {}

  async listTools(target: McpServerTarget): Promise<unknown[]> {
    return this.withClient(target, async (client) => {
      const tools: unknown[] = [];
      let cursor: string | undefined;

      do {
        const page = await client.listTools(
          { cursor },
          { timeout: LIST_TOOLS_TIMEOUT_MS },
        );

        tools.push(...page.tools);
        cursor = page.nextCursor;
      } while (isDefined(cursor));

      return tools;
    });
  }

  async callTool({
    toolName,
    toolArguments,
    ...target
  }: McpServerTarget & {
    toolName: string;
    toolArguments: Record<string, unknown>;
  }): Promise<CallToolResult> {
    return this.withClient(
      target,
      async (client) =>
        (await client.callTool(
          { name: toolName, arguments: toolArguments },
          undefined,
          { timeout: CALL_TOOL_TIMEOUT_MS },
        )) as CallToolResult,
    );
  }

  private async withClient<TResult>(
    target: McpServerTarget,
    run: (client: Client) => Promise<TResult>,
  ): Promise<TResult> {
    const accessToken = await this.resolveAccessToken(target);
    const client = new Client(MCP_CLIENT_INFO);
    const transport = new StreamableHTTPClientTransport(new URL(target.url), {
      fetch: this.buildFetch(target.workspaceId),
      requestInit: isDefined(accessToken)
        ? { headers: { Authorization: `Bearer ${accessToken}` } }
        : undefined,
    });

    try {
      await client.connect(transport, { timeout: LIST_TOOLS_TIMEOUT_MS });

      return await run(client);
    } finally {
      await client.close().catch(() => undefined);
    }
  }

  // The axios client enforces the SSRF allowlist and timeouts whatever the
  // global fetch is; the SDK only needs a WHATWG-shaped response from it.
  private buildFetch(workspaceId: string): typeof fetch {
    return buildAxiosFetch(
      this.secureHttpClientService.getHttpClient(
        { timeout: CALL_TOOL_TIMEOUT_MS },
        { workspaceId, source: 'mcp-server' },
      ),
    ) as unknown as typeof fetch;
  }

  private async resolveAccessToken({
    connectedAccountId,
    workspaceId,
  }: McpServerTarget): Promise<string | null> {
    if (!isDefined(connectedAccountId)) {
      return null;
    }

    const connectedAccount = await this.connectedAccountRepository.findOne({
      where: { id: connectedAccountId, workspaceId },
    });

    if (!isDefined(connectedAccount)) {
      throw new McpServerException(
        `Connected account ${connectedAccountId} not found in workspace ${workspaceId}`,
        McpServerExceptionCode.CONNECTED_ACCOUNT_NOT_FOUND,
      );
    }

    const { accessToken } =
      await this.connectedAccountRefreshTokensService.resolveTokens(
        connectedAccount,
        workspaceId,
      );

    return this.connectedAccountTokenEncryptionService.decrypt({
      ciphertext: accessToken,
      workspaceId,
    });
  }
}
