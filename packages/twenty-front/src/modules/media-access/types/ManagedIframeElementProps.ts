import { type IframeHTMLAttributes, type Ref } from 'react';

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
};
