import { type MediaSessionMediaType } from 'twenty-front-component-renderer';

export type RequestMediaCapabilityApproval = (input: {
  mediaTypes: MediaSessionMediaType[];
  abortSignal: AbortSignal;
}) => Promise<string[]>;
