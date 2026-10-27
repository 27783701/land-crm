import { useContext } from 'react';
import { doNotTranslate } from 'twenty-shared/i18n';
import { isDefined } from 'twenty-shared/utils';

import { SettingsSecurityIframeMediaPermissionsContext } from '@/settings/security/contexts/SettingsSecurityIframeMediaPermissionsContext';

export const useSaveIframeMediaPermission = () => {
  const context = useContext(SettingsSecurityIframeMediaPermissionsContext);

  if (!isDefined(context)) {
    throw new Error(
      doNotTranslate(
        'Embedded website media permission settings are unavailable',
      ),
    );
  }

  return context;
};
