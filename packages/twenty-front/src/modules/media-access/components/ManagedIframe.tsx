import { ManagedIframeSession } from '@/media-access/components/ManagedIframeSession';
import { type ManagedIframeProps } from '@/media-access/types/ManagedIframeProps';
import { getManagedIframeMediaPermission } from '@/media-access/utils/getManagedIframeMediaPermission';

export const ManagedIframe = (props: ManagedIframeProps) => {
  const permission = getManagedIframeMediaPermission({
    src: props.src,
    srcDoc: props.srcDoc,
    owner: props.owner,
    requestedMediaCapabilities: props.requestedMediaCapabilities,
    iframeMediaPermissions: props.iframeMediaPermissions,
    hostOrigin: window.location.origin,
  });
  const sessionKey = JSON.stringify({
    src: props.src,
    srcDoc: props.srcDoc,
    iframeId: props.iframeId,
    ownerId: props.owner.id,
    ownerType: props.owner.type,
    permission,
  });

  return (
    <ManagedIframeSession
      key={sessionKey}
      iframeProps={props}
      permission={permission}
    />
  );
};
