import { type MediaAccessOwner } from '@/media-access/types/MediaAccessOwner';
import { type IframeHTMLAttributes, type Ref } from 'react';
import { type IframeMediaPermission } from 'twenty-shared/types';

export type ManagedIframeProps = Pick<
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
  iframeId: string;
  iframeRef?: Ref<HTMLIFrameElement>;
  owner: MediaAccessOwner;
  requestedMediaCapabilities?: readonly ('microphone' | 'camera')[];
  iframeMediaPermissions: readonly IframeMediaPermission[];
};
