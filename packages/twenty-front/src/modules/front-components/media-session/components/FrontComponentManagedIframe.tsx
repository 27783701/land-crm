import { FrontComponentIframeOwnerContext } from '@/front-components/media-session/contexts/FrontComponentIframeOwnerContext';
import { ManagedIframe } from '@/media-access/components/ManagedIframe';
import { useWorkspaceIframeMediaPermissions } from '@/media-access/hooks/useWorkspaceIframeMediaPermissions';
import { useContext, useId } from 'react';
import {
  type FrontComponentIframeHostProps,
  getRequestedIframeMediaCapabilities,
} from 'twenty-front-component-renderer';
import { isDefined } from 'twenty-shared/utils';

type FrontComponentManagedIframeProps = FrontComponentIframeHostProps;

export const FrontComponentManagedIframe = ({
  iframeProps: props,
  iframeRef,
}: FrontComponentManagedIframeProps) => {
  const owner = useContext(FrontComponentIframeOwnerContext);
  const iframeId = useId();
  const iframeMediaPermissions = useWorkspaceIframeMediaPermissions();

  if (!isDefined(owner)) {
    return null;
  }

  return (
    <ManagedIframe
      iframeId={iframeId}
      iframeRef={iframeRef}
      owner={owner}
      iframeMediaPermissions={iframeMediaPermissions}
      requestedMediaCapabilities={getRequestedIframeMediaCapabilities(
        props.allow,
      )}
      src={props.src}
      srcDoc={props.srcDoc}
      title={props.title}
      id={props.id}
      name={props.name}
      className={props.className}
      style={props.style}
      width={props.width}
      height={props.height}
      loading={props.loading}
      referrerPolicy={props.referrerPolicy}
      tabIndex={props.tabIndex}
      onLoad={props.onLoad}
      onError={props.onError}
      onClick={props.onClick}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      sandbox={props.sandbox}
      allow={props.allow}
      allowFullScreen={props.allowFullScreen}
    />
  );
};
