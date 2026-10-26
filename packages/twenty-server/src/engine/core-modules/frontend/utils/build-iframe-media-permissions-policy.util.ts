import { type IframeMediaPermission } from 'twenty-shared/types';
import {
  isDefined,
  normalizeIframeMediaPermissionOrigin,
} from 'twenty-shared/utils';

const MEDIA_CAPABILITIES = ['microphone', 'camera'] as const;

export const buildIframeMediaPermissionsPolicy = (
  permissions: IframeMediaPermission[],
): string =>
  MEDIA_CAPABILITIES.map((capability) => {
    const origins = permissions
      .filter((permission) => permission[capability] === true)
      .map((permission) =>
        normalizeIframeMediaPermissionOrigin(permission.origin),
      )
      .filter(isDefined);
    const allowedOrigins = [...new Set(origins)].map((origin) => `"${origin}"`);

    return `${capability}=(${['self', ...allowedOrigins].join(' ')})`;
  }).join(', ');
