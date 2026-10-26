export type McpServerToolAnnotations = {
  title?: string;
  readOnlyHint?: boolean;
  destructiveHint?: boolean;
  idempotentHint?: boolean;
  openWorldHint?: boolean;
};

export type McpServerTool = {
  name: string;
  description: string | null;
  inputSchema: Record<string, unknown>;
  annotations: McpServerToolAnnotations | null;
};
