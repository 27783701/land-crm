import { type IframeHTMLAttributes, type ReactNode } from 'react';

export type FrontComponentIframeHostProps = {
  iframeProps: Pick<
    IframeHTMLAttributes<HTMLIFrameElement>,
    | 'src'
    | 'srcDoc'
    | 'style'
    | 'width'
    | 'height'
    | 'hidden'
    | 'sandbox'
    | 'allow'
  >;
  renderIframe: (
    options: Pick<
      IframeHTMLAttributes<HTMLIFrameElement>,
      'allow' | 'sandbox' | 'style'
    >,
  ) => ReactNode;
};
