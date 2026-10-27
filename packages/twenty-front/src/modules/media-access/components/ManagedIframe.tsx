import { ManagedIframeSession } from '@/media-access/components/ManagedIframeSession';
import { type ManagedIframeProps } from '@/media-access/types/ManagedIframeProps';
import { getManagedIframeMediaPermission } from '@/media-access/utils/getManagedIframeMediaPermission';
import { restrictIframeMediaPermission } from '@/media-access/utils/restrictIframeMediaPermission';

export const ManagedIframe = ({
  src,
  srcDoc,
  title,
  id,
  name,
  className,
  style,
  width,
  height,
  hidden,
  loading,
  referrerPolicy,
  tabIndex,
  onLoad,
  onError,
  onClick,
  onFocus,
  onBlur,
  sandbox,
  allow,
  allowFullScreen,
  renderIframe,
  iframeElement,
  iframeId,
  owner,
  requestedMediaCapabilities,
  iframeMediaPermissions,
}: ManagedIframeProps) => {
  const permission = getManagedIframeMediaPermission({
    src,
    srcDoc,
    requestedMediaCapabilities,
    iframeMediaPermissions,
    hostOrigin: window.location.origin,
  });
  const sessionKey = JSON.stringify({
    iframeId,
    ownerId: owner.id,
    ownerType: owner.type,
  });

  return (
    <ManagedIframeSession
      key={sessionKey}
      src={src}
      srcDoc={srcDoc}
      title={title}
      id={id}
      name={name}
      className={className}
      style={style}
      width={width}
      height={height}
      hidden={hidden}
      loading={loading}
      referrerPolicy={referrerPolicy}
      tabIndex={tabIndex}
      onLoad={onLoad}
      onError={onError}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      sandbox={sandbox}
      allow={allow}
      allowFullScreen={allowFullScreen}
      renderIframe={renderIframe}
      iframeElement={iframeElement}
      ownerId={`${owner.type}:${owner.id}`}
      ownerName={owner.name}
      permission={permission}
      grantedPermission={
        owner.type === 'application'
          ? restrictIframeMediaPermission({
              permission,
              capabilities: owner.grantedCapabilities,
            })
          : permission
      }
      requestCapabilityApproval={
        owner.type === 'application'
          ? owner.requestCapabilityApproval
          : undefined
      }
    />
  );
};
