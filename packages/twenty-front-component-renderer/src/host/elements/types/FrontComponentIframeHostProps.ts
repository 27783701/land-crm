import { type ElementRefCallback } from '@/host/elements/types/ElementRefCallback';

export type FrontComponentIframeHostProps = {
  iframeProps: Record<string, unknown>;
  iframeRef: ElementRefCallback;
};
