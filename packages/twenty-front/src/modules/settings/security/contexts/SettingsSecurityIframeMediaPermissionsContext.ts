import { createContext } from 'react';
import { type IframeMediaPermission } from 'twenty-shared/types';

export const SettingsSecurityIframeMediaPermissionsContext = createContext<{
  savePermission: (permission: IframeMediaPermission) => Promise<boolean>;
} | null>(null);
