import { sanitizeMcpServerTool } from 'src/engine/metadata-modules/mcp-server/utils/sanitize-mcp-server-tool.util';

describe('sanitizeMcpServerTool', () => {
  it('keeps a well-formed tool and only the known annotations', () => {
    expect(
      sanitizeMcpServerTool({
        name: 'search_docs',
        description: '  Search the docs  ',
        inputSchema: { type: 'object', properties: { query: {} } },
        annotations: { readOnlyHint: true, custom: 'dropped', title: 'Search' },
      }),
    ).toEqual({
      name: 'search_docs',
      description: 'Search the docs',
      inputSchema: { type: 'object', properties: { query: {} } },
      annotations: { readOnlyHint: true, title: 'Search' },
    });
  });

  it.each([
    ['empty', ''],
    ['spaces', 'search docs'],
    ['too long', 'a'.repeat(65)],
  ])('drops a tool whose name is %s', (_label, name) => {
    expect(sanitizeMcpServerTool({ name, inputSchema: {} })).toBeNull();
  });

  it('strips control characters and caps the description length', () => {
    const tool = sanitizeMcpServerTool({
      name: 'x',
      description: `a\u0000b\u001B[31m${'c'.repeat(2000)}`,
      inputSchema: {},
    });

    expect(tool?.description).not.toMatch(/[\u0000-\u001F]/);
    expect(tool?.description).toHaveLength(1024);
  });

  it('defaults a missing input schema to an empty object schema', () => {
    expect(sanitizeMcpServerTool({ name: 'x' })?.inputSchema).toEqual({
      type: 'object',
    });
  });
});
