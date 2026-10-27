import { useEffect } from 'react';

type ManagedIframeRevokedActivationEffectProps = {
  onRevoked: () => void;
};

export const ManagedIframeRevokedActivationEffect = ({
  onRevoked,
}: ManagedIframeRevokedActivationEffectProps) => {
  useEffect(() => {
    onRevoked();
  }, [onRevoked]);

  return null;
};
