import { isNonEmptyString, isString } from '@sniptt/guards';

import { type IframeMediaPermission } from '../../types/IframeMediaPermission';
import { isDefined } from '../validation';
import { normalizeIframeMediaPermissionOrigin } from './normalizeIframeMediaPermissionOrigin';

const MEDIA_DIRECTIVE_PATTERN = /^(?:microphone|camera)(?:\s|$)/i;

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
      isNonEmptyString(directive) && !MEDIA_DIRECTIVE_PATTERN.test(directive),
  );
  const permissionOrigin = permission?.origin;
  const origin = isString(permissionOrigin)
    ? normalizeIframeMediaPermissionOrigin(permissionOrigin)
    : undefined;
  const microphoneOrigin =
    isDefined(origin) && permission?.microphone === true ? origin : "'none'";
  const cameraOrigin =
    isDefined(origin) && permission?.camera === true ? origin : "'none'";

  return [
    ...otherDirectives,
    `microphone ${microphoneOrigin}`,
    `camera ${cameraOrigin}`,
  ].join('; ');
};
