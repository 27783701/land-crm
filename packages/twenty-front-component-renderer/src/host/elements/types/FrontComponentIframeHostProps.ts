import { type IframeHTMLAttributes, type ReactNode } from 'react';

export type FrontComponentIframeHostProps = {
  iframeProps: Pick<
    IframeHTMLAttributes<HTMLIFrameElement>,
    'src' | 'srcDoc' | 'hidden' | 'sandbox' | 'allow'
  >;
  iframeElement: Element | null;
  renderIframe: (
    options: Pick<IframeHTMLAttributes<HTMLIFrameElement>, 'allow' | 'sandbox'>,
  ) => ReactNode;
};
