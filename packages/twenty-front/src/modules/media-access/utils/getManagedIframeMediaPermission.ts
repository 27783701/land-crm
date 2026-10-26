import { type ManagedIframeProps } from '@/media-access/types/ManagedIframeProps';
import { isNonEmptyString } from '@sniptt/guards';
import {
  isDefined,
  normalizeIframeMediaPermissionOrigin,
} from 'twenty-shared/utils';

export const getManagedIframeMediaPermission = ({
  src,
  srcDoc,
  owner,
  requestedMediaCapabilities = [],
  iframeMediaPermissions,
  hostOrigin,
}: Pick<
  ManagedIframeProps,
  | 'src'
  | 'srcDoc'
  | 'owner'
  | 'requestedMediaCapabilities'
  | 'iframeMediaPermissions'
> & { hostOrigin: string }) => {
  if (!isNonEmptyString(src) || isDefined(srcDoc)) {
    return null;
  }

  let sourceUrl: URL;

  try {
    sourceUrl = new URL(src);
  } catch {
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

  const grantedCapabilities = requestedMediaCapabilities.filter(
    (capability) =>
      permission[capability] &&
      (owner.type === 'workspace-widget' ||
        owner.grantedCapabilities.includes(capability)),
  );

  return {
    origin,
    microphone: grantedCapabilities.includes('microphone'),
    camera: grantedCapabilities.includes('camera'),
  };
};
