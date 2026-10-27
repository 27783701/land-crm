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
  renderIframe,
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
      renderIframe={renderIframe}
      owner={owner}
      iframeMediaPermissions={iframeMediaPermissions}
      requestedMediaCapabilities={getRequestedIframeMediaCapabilities(
        props.allow,
      )}
      src={props.src}
      srcDoc={props.srcDoc}
      style={props.style}
      width={props.width}
      height={props.height}
      hidden={props.hidden}
      sandbox={props.sandbox}
      allow={props.allow}
    />
  );
};
