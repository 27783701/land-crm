import { FrontComponentIframeOwnerContext } from '@/front-components/media-session/contexts/FrontComponentIframeOwnerContext';
import { ManagedIframe } from '@/media-access/components/ManagedIframe';
import { useQuery } from '@apollo/client/react';
import { type IframeHTMLAttributes, useContext, useId } from 'react';
import {
  type FrontComponentIframeHostProps,
  getRequestedIframeMediaCapabilities,
} from 'twenty-front-component-renderer';
import { isDefined } from 'twenty-shared/utils';
import { GetWorkspaceIframeMediaPermissionsDocument } from '~/generated-metadata/graphql';

type FrontComponentManagedIframeProps = FrontComponentIframeHostProps;

export const FrontComponentManagedIframe = ({
  iframeProps,
  iframeRef,
}: FrontComponentManagedIframeProps) => {
  const owner = useContext(FrontComponentIframeOwnerContext);
  const iframeId = useId();
  const { data, error } = useQuery(GetWorkspaceIframeMediaPermissionsDocument, {
    fetchPolicy: 'cache-and-network',
  });
  const props = iframeProps as IframeHTMLAttributes<HTMLIFrameElement>;

  if (!isDefined(owner)) {
    return null;
  }

  return (
    <ManagedIframe
      iframeId={iframeId}
      iframeRef={iframeRef}
      owner={owner}
      iframeMediaPermissions={
        isDefined(error)
          ? []
          : (data?.currentWorkspace.iframeMediaPermissions ?? [])
      }
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
