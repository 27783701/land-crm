import { type IframeHTMLAttributes, type Ref } from 'react';
import { type FrontComponentIframeHostProps } from 'twenty-front-component-renderer';

export type ManagedIframeElementProps = Pick<
  IframeHTMLAttributes<HTMLIFrameElement>,
  | 'src'
  | 'srcDoc'
  | 'title'
  | 'id'
  | 'name'
  | 'className'
  | 'style'
  | 'width'
  | 'height'
  | 'hidden'
  | 'loading'
  | 'referrerPolicy'
  | 'tabIndex'
  | 'onLoad'
  | 'onError'
  | 'onClick'
  | 'onFocus'
  | 'onBlur'
  | 'sandbox'
  | 'allow'
  | 'allowFullScreen'
> & {
  iframeRef?: Ref<HTMLIFrameElement>;
  renderIframe?: FrontComponentIframeHostProps['renderIframe'];
};
