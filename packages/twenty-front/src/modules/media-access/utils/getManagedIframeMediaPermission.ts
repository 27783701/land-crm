import { type ManagedIframeProps } from '@/media-access/types/ManagedIframeProps';
import { isNonEmptyString } from '@sniptt/guards';
import { type IframeMediaPermission } from 'twenty-shared/types';
import {
  getUrlSafely,
  isDefined,
  normalizeIframeMediaPermissionOrigin,
} from 'twenty-shared/utils';

export const getManagedIframeMediaPermission = ({
  src,
  srcDoc,
  requestedMediaCapabilities = [],
  iframeMediaPermissions,
  hostOrigin,
}: Pick<
  ManagedIframeProps,
  'src' | 'srcDoc' | 'requestedMediaCapabilities' | 'iframeMediaPermissions'
> & { hostOrigin: string }): IframeMediaPermission | null => {
  if (!isNonEmptyString(src) || isDefined(srcDoc)) {
    return null;
  }

  const sourceUrl = getUrlSafely(src);

  if (!isDefined(sourceUrl)) {
    return null;
  }

  const origin = normalizeIframeMediaPermissionOrigin(sourceUrl.origin);

  if (
    sourceUrl.protocol !== 'https:' ||
    !isDefined(origin) ||
    origin === hostOrigin ||
    isNonEmptyString(sourceUrl.username) ||
    isNonEmptyString(sourceUrl.password)
  ) {
    return null;
  }

  const permission = iframeMediaPermissions.find(
    (candidate) => candidate.origin === origin,
  );

  if (!isDefined(permission)) {
    return null;
  }

  const microphone =
    permission.microphone && requestedMediaCapabilities.includes('microphone');
  const camera =
    permission.camera && requestedMediaCapabilities.includes('camera');

  if (!microphone && !camera) {
    return null;
  }

  return { origin, microphone, camera };
};
