import { isNonEmptyString, isString } from '@sniptt/guards';

import { type IframeMediaPermission } from '../../types/IframeMediaPermission';
import { isDefined } from '../validation';
import { normalizeIframeMediaPermissionOrigin } from './normalizeIframeMediaPermissionOrigin';

const MEDIA_DIRECTIVE_PREFIX_PATTERN = /^(?:microphone|camera)/i;

export const getIframeMediaAllow = ({
  allow,
  permission,
}: {
  allow: unknown;
  permission?: IframeMediaPermission | null;
}): string => {
  const directives = isString(allow)
    ? allow.split(';').map((directive) => directive.trim())
    : [];
  const otherDirectives = directives.filter(
    (directive) =>
      isNonEmptyString(directive) &&
      !MEDIA_DIRECTIVE_PREFIX_PATTERN.test(directive),
  );
  const permissionOrigin = permission?.origin;
  const origin = isString(permissionOrigin)
    ? normalizeIframeMediaPermissionOrigin(permissionOrigin)
    : undefined;
  const microphoneOrigin =
    isDefined(origin) && permission?.microphone ? origin : "'none'";
  const cameraOrigin =
    isDefined(origin) && permission?.camera ? origin : "'none'";

  return [
    `microphone ${microphoneOrigin}`,
    `camera ${cameraOrigin}`,
    ...otherDirectives,
  ].join('; ');
};
