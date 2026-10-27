import { type IframeMediaPermission } from 'twenty-shared/types';
import { isDefined } from 'twenty-shared/utils';

export const intersectIframeMediaPermissions = ({
  permissions,
  documentPermissions,
}: {
  permissions: readonly IframeMediaPermission[];
  documentPermissions: readonly IframeMediaPermission[];
}): IframeMediaPermission[] =>
  permissions.flatMap((permission) => {
    const documentPermission = documentPermissions.find(
      (candidate) => candidate.origin === permission.origin,
    );

    if (!isDefined(documentPermission)) {
      return [];
    }

    const microphone = permission.microphone && documentPermission.microphone;
    const camera = permission.camera && documentPermission.camera;

    return microphone || camera
      ? [{ origin: permission.origin, microphone, camera }]
      : [];
  });
