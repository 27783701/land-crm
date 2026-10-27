import { getDocumentIframeMediaPermissions } from '@/media-access/utils/getDocumentIframeMediaPermissions';
import { intersectIframeMediaPermissions } from '@/media-access/utils/intersectIframeMediaPermissions';
import { useQuery } from '@apollo/client/react';
import { isDefined } from 'twenty-shared/utils';
import { GetWorkspaceIframeMediaPermissionsDocument } from '~/generated-metadata/graphql';

export const useWorkspaceIframeMediaPermissions = () => {
  const { data, error } = useQuery(GetWorkspaceIframeMediaPermissionsDocument, {
    fetchPolicy: 'cache-and-network',
  });

  if (isDefined(error)) {
    return [];
  }

  const permissions = data?.currentWorkspace.iframeMediaPermissions ?? [];
  const documentPermissions = getDocumentIframeMediaPermissions();

  return isDefined(documentPermissions)
    ? intersectIframeMediaPermissions({ permissions, documentPermissions })
    : permissions;
};
