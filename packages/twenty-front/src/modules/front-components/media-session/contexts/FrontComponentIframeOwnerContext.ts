import { type MediaAccessOwner } from '@/media-access/types/MediaAccessOwner';
import { createContext } from 'react';

export const FrontComponentIframeOwnerContext = createContext<Extract<
  MediaAccessOwner,
  { type: 'application' }
> | null>(null);
