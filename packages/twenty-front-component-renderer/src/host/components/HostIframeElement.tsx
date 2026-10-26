import { useContext } from 'react';
import {
  getIframeMediaAllow,
  isDefined,
  isNonEmptyArray,
} from 'twenty-shared/utils';

import { FrontComponentIframeHostContext } from '@/host/elements/contexts/FrontComponentIframeHostContext';
import { useHtmlHostElementProps } from '@/host/elements/hooks/useHtmlHostElementProps';
import { createPlainHostElement } from '@/host/elements/utils/createPlainHostElement';
import { getRequestedIframeMediaCapabilities } from '@/host/elements/utils/getRequestedIframeMediaCapabilities';

type HostIframeElementProps = Record<string, unknown>;

export const HostIframeElement = (props: HostIframeElementProps) => {
  const IframeHost = useContext(FrontComponentIframeHostContext);
  const { reactBindableProps, hostEnforcedProps, composedElementRef } =
    useHtmlHostElementProps({ props, htmlTag: 'iframe' });

  if (
    isDefined(IframeHost) &&
    isNonEmptyArray(
      getRequestedIframeMediaCapabilities(reactBindableProps.allow),
    )
  ) {
    return (
      <IframeHost
        iframeProps={{ ...reactBindableProps, ...hostEnforcedProps }}
        iframeRef={composedElementRef}
      />
    );
  }

  return createPlainHostElement({
    htmlTag: 'iframe',
    isVoid: false,
    reactBindableProps,
    hostEnforcedProps: {
      ...hostEnforcedProps,
      allow: getIframeMediaAllow({ allow: reactBindableProps.allow }),
    },
    composedElementRef,
    children: undefined,
  });
};
