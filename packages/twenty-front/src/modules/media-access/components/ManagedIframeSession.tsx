import { MediaAccessSessionCleanupEffect } from '@/media-access/components/MediaAccessSessionCleanupEffect';
import { mediaAccessSessionsState } from '@/media-access/states/mediaAccessSessionsState';
import { type ManagedIframeProps } from '@/media-access/types/ManagedIframeProps';
import { getManagedIframeContainerStyle } from '@/media-access/utils/getManagedIframeContainerStyle';
import { useSetAtomState } from '@/ui/utilities/state/jotai/hooks/useSetAtomState';
import { styled } from '@linaria/react';
import { t } from '@lingui/core/macro';
import { isNonEmptyString } from '@sniptt/guards';
import { useId, useState } from 'react';
import { getIframeMediaAllow, isDefined } from 'twenty-shared/utils';
import { Button } from 'twenty-ui/primitives/input';
import { themeCssVariables } from 'twenty-ui/theme';

const StyledContainer = styled.div`
  display: inline-flex;
  position: relative;
`;

const StyledControls = styled.div`
  background: ${themeCssVariables.background.primary};
  border: 1px solid ${themeCssVariables.border.color.medium};
  border-radius: ${themeCssVariables.border.radius.sm};
  bottom: ${themeCssVariables.spacing[2]};
  display: flex;
  gap: ${themeCssVariables.spacing[2]};
  padding: ${themeCssVariables.spacing[2]};
  position: absolute;
  right: ${themeCssVariables.spacing[2]};
`;

type ManagedIframeSessionProps = {
  iframeProps: ManagedIframeProps;
  permission: {
    origin: string;
    microphone: boolean;
    camera: boolean;
  } | null;
};

export const ManagedIframeSession = ({
  iframeProps,
  permission,
}: ManagedIframeSessionProps) => {
  const id = useId();
  const [isActivated, setIsActivated] = useState(false);
  const setMediaAccessSessions = useSetAtomState(mediaAccessSessionsState);
  const canEnableMedia =
    isDefined(permission) && (permission.microphone || permission.camera);
  const handleDisable = () => {
    setIsActivated(false);
    setMediaAccessSessions((sessions) =>
      sessions.filter((session) => session.id !== id),
    );
  };
  const handleEnable = () => {
    if (!isDefined(permission) || !canEnableMedia) {
      return;
    }

    setMediaAccessSessions((sessions) => [
      ...sessions.filter((session) => session.id !== id),
      {
        id,
        ownerId: `${iframeProps.owner.type}:${iframeProps.owner.id}`,
        ownerName: iframeProps.owner.name,
        status: 'delegated',
        origin: permission.origin,
        mediaTypes: [
          ...(permission.microphone ? (['audio'] as const) : []),
          ...(permission.camera ? (['video'] as const) : []),
        ],
        onStop: handleDisable,
      },
    ]);
    setIsActivated(true);
  };
  const allow = getIframeMediaAllow({
    allow: iframeProps.allow,
    permission: isActivated ? permission : null,
  });
  const sandbox = isActivated
    ? [
        ...new Set([
          ...(iframeProps.sandbox ?? '').split(/\s+/).filter(isNonEmptyString),
          'allow-same-origin',
        ]),
      ].join(' ')
    : iframeProps.sandbox;
  const mediaLabel = permission?.camera
    ? permission.microphone
      ? t`Enable microphone and camera`
      : t`Enable camera`
    : t`Enable microphone`;

  return (
    <StyledContainer style={getManagedIframeContainerStyle(iframeProps)}>
      <MediaAccessSessionCleanupEffect id={id} />
      <iframe
        key={isActivated ? 'media-enabled' : 'media-disabled'}
        ref={iframeProps.iframeRef}
        src={iframeProps.src}
        srcDoc={iframeProps.srcDoc}
        title={iframeProps.title}
        id={iframeProps.id}
        name={iframeProps.name}
        className={iframeProps.className}
        style={{ ...iframeProps.style, width: '100%', height: '100%' }}
        width={iframeProps.width}
        height={iframeProps.height}
        loading={iframeProps.loading}
        referrerPolicy={iframeProps.referrerPolicy}
        tabIndex={iframeProps.tabIndex}
        onLoad={iframeProps.onLoad}
        onError={iframeProps.onError}
        onClick={iframeProps.onClick}
        onFocus={iframeProps.onFocus}
        onBlur={iframeProps.onBlur}
        sandbox={sandbox}
        allow={allow}
        allowFullScreen={iframeProps.allowFullScreen}
      />
      {canEnableMedia && !isActivated && (
        <StyledControls>
          <Button size="sm" variant="outline" onClick={handleEnable}>
            {mediaLabel}
          </Button>
        </StyledControls>
      )}
    </StyledContainer>
  );
};
