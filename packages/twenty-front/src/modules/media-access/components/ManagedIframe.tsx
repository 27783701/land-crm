import { ManagedIframeSession } from '@/media-access/components/ManagedIframeSession';
import { type ManagedIframeProps } from '@/media-access/types/ManagedIframeProps';
import { getManagedIframeMediaPermission } from '@/media-access/utils/getManagedIframeMediaPermission';

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
  iframeRef,
  renderIframe,
  iframeId,
  owner,
  requestedMediaCapabilities,
  iframeMediaPermissions,
}: ManagedIframeProps) => {
  const permission = getManagedIframeMediaPermission({
    src,
    srcDoc,
    owner,
    requestedMediaCapabilities,
    iframeMediaPermissions,
    hostOrigin: window.location.origin,
  });
  const sessionKey = JSON.stringify({
    src,
    srcDoc,
    iframeId,
    ownerId: owner.id,
    ownerType: owner.type,
    permission,
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
      iframeRef={iframeRef}
      renderIframe={renderIframe}
      ownerId={`${owner.type}:${owner.id}`}
      ownerName={owner.name}
      mediaOrigin={permission?.origin}
      isMicrophoneAllowed={permission?.microphone ?? false}
      isCameraAllowed={permission?.camera ?? false}
    />
  );
};
