import { MediaAccessSessionCleanupEffect } from '@/media-access/components/MediaAccessSessionCleanupEffect';
import { mediaAccessSessionsState } from '@/media-access/states/mediaAccessSessionsState';
import { type ManagedIframeElementProps } from '@/media-access/types/ManagedIframeElementProps';
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

type ManagedIframeSessionProps = ManagedIframeElementProps & {
  ownerId: string;
  ownerName: string;
  mediaOrigin?: string;
  isMicrophoneAllowed: boolean;
  isCameraAllowed: boolean;
};

export const ManagedIframeSession = ({
  src,
  srcDoc,
  title,
  id,
  name,
  className,
  style,
  width,
  height,
  loading,
  referrerPolicy,
  tabIndex,
  onLoad,
  onError,
  onClick,
  onFocus,
  onBlur,
  sandbox,
  allow,
  allowFullScreen,
  iframeRef,
  ownerId,
  ownerName,
  mediaOrigin,
  isMicrophoneAllowed,
  isCameraAllowed,
}: ManagedIframeSessionProps) => {
  const mediaAccessSessionId = useId();
  const [isActivated, setIsActivated] = useState(false);
  const setMediaAccessSessions = useSetAtomState(mediaAccessSessionsState);
  const canEnableMedia =
    isDefined(mediaOrigin) && (isMicrophoneAllowed || isCameraAllowed);
  const handleDisable = () => {
    setIsActivated(false);
    setMediaAccessSessions((sessions) =>
      sessions.filter((session) => session.id !== mediaAccessSessionId),
    );
  };
  const handleEnable = () => {
    if (!isDefined(mediaOrigin) || !canEnableMedia) {
      return;
    }

    setMediaAccessSessions((sessions) => [
      ...sessions.filter((session) => session.id !== mediaAccessSessionId),
      {
        id: mediaAccessSessionId,
        ownerId,
        ownerName,
        status: 'delegated',
        origin: mediaOrigin,
        mediaTypes: [
          ...(isMicrophoneAllowed ? (['audio'] as const) : []),
          ...(isCameraAllowed ? (['video'] as const) : []),
        ],
        onStop: handleDisable,
      },
    ]);
    setIsActivated(true);
  };
  const iframeAllow = getIframeMediaAllow({
    allow,
    permission:
      isActivated && isDefined(mediaOrigin)
        ? {
            origin: mediaOrigin,
            microphone: isMicrophoneAllowed,
            camera: isCameraAllowed,
          }
        : null,
  });
  const iframeSandbox = isActivated
    ? [
        ...new Set([
          ...(sandbox ?? '').split(/\s+/).filter(isNonEmptyString),
          'allow-same-origin',
        ]),
      ].join(' ')
    : sandbox;
  const getMediaLabel = () => {
    if (isMicrophoneAllowed && isCameraAllowed) {
      return t`Enable microphone and camera`;
    }

    if (isCameraAllowed) {
      return t`Enable camera`;
    }

    return t`Enable microphone`;
  };

  return (
    <StyledContainer
      style={getManagedIframeContainerStyle({ style, width, height })}
    >
      <MediaAccessSessionCleanupEffect id={mediaAccessSessionId} />
      <iframe
        key={isActivated ? 'media-enabled' : 'media-disabled'}
        ref={iframeRef}
        src={src}
        srcDoc={srcDoc}
        title={title}
        id={id}
        name={name}
        className={className}
        style={{ ...style, width: '100%', height: '100%' }}
        width={width}
        height={height}
        loading={loading}
        referrerPolicy={referrerPolicy}
        tabIndex={tabIndex}
        onLoad={onLoad}
        onError={onError}
        onClick={onClick}
        onFocus={onFocus}
        onBlur={onBlur}
        sandbox={iframeSandbox}
        allow={iframeAllow}
        allowFullScreen={allowFullScreen}
      />
      {canEnableMedia && !isActivated && (
        <StyledControls>
          <Button size="sm" variant="outline" onClick={handleEnable}>
            {getMediaLabel()}
          </Button>
        </StyledControls>
      )}
    </StyledContainer>
  );
};
