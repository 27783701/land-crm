import { type IframeMediaPermission } from 'twenty-shared/types';

export const upsertIframeMediaPermission = ({
  permissions,
  permission,
}: {
  permissions: IframeMediaPermission[];
  permission: IframeMediaPermission;
}): IframeMediaPermission[] => {
  const hasCapability = permission.microphone || permission.camera;
  const isConfiguredOrigin = permissions.some(
    (existingPermission) => existingPermission.origin === permission.origin,
  );

  if (!isConfiguredOrigin) {
    return hasCapability ? [...permissions, permission] : permissions;
  }

  if (!hasCapability) {
    return permissions.filter(
      (existingPermission) => existingPermission.origin !== permission.origin,
    );
  }

  return permissions.map((existingPermission) =>
    existingPermission.origin === permission.origin
      ? permission
      : existingPermission,
  );
};
