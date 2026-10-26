import { isNonEmptyString } from '@sniptt/guards';
import { isDefined, isPlainObject } from 'twenty-shared/utils';

import {
  type McpServerTool,
  type McpServerToolAnnotations,
} from 'src/engine/metadata-modules/mcp-server/types/mcp-server-tool.type';

// Model providers reject tool names outside this set, and remote descriptions
// end up in the system prompt, so both are constrained before being cached.
const TOOL_NAME_PATTERN = /^[a-zA-Z0-9_-]{1,64}$/;
const DESCRIPTION_MAX_LENGTH = 1024;
const CONTROL_CHARACTERS_PATTERN =
  /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;

const ANNOTATION_KEYS = [
  'title',
  'readOnlyHint',
  'destructiveHint',
  'idempotentHint',
  'openWorldHint',
] as const;

const sanitizeDescription = (description: unknown): string | null => {
  if (!isNonEmptyString(description)) {
    return null;
  }

  const cleaned = description
    .replace(CONTROL_CHARACTERS_PATTERN, '')
    .trim()
    .slice(0, DESCRIPTION_MAX_LENGTH);

  return isNonEmptyString(cleaned) ? cleaned : null;
};

const sanitizeAnnotations = (
  annotations: unknown,
): McpServerToolAnnotations | null => {
  if (!isPlainObject(annotations)) {
    return null;
  }

  const sanitized: McpServerToolAnnotations = {};

  for (const key of ANNOTATION_KEYS) {
    const value = annotations[key];

    if (key === 'title' && isNonEmptyString(value)) {
      sanitized.title = sanitizeDescription(value) ?? undefined;
    } else if (key !== 'title' && typeof value === 'boolean') {
      sanitized[key] = value;
    }
  }

  return Object.keys(sanitized).length > 0 ? sanitized : null;
};

export const sanitizeMcpServerTool = (
  remoteTool: unknown,
): McpServerTool | null => {
  if (!isPlainObject(remoteTool)) {
    return null;
  }

  const { name, description, inputSchema, annotations } = remoteTool;

  if (!isNonEmptyString(name) || !TOOL_NAME_PATTERN.test(name)) {
    return null;
  }

  return {
    name,
    description: sanitizeDescription(description),
    inputSchema: isPlainObject(inputSchema) ? inputSchema : { type: 'object' },
    annotations: isDefined(annotations)
      ? sanitizeAnnotations(annotations)
      : null,
  };
};
