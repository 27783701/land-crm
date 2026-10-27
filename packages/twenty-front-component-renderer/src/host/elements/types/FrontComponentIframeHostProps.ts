import { type ElementRefCallback } from '@/host/elements/types/ElementRefCallback';
import { type IframeHTMLAttributes } from 'react';

export type FrontComponentIframeHostProps = {
  iframeProps: IframeHTMLAttributes<HTMLIFrameElement>;
  iframeRef: ElementRefCallback;
};
