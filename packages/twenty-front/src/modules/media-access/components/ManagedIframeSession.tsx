import { ManagedIframeEnableButton } from '@/media-access/components/ManagedIframeEnableButton';
import { ManagedIframeMediaAccessSessionEffect } from '@/media-access/components/ManagedIframeMediaAccessSessionEffect';
import { type ManagedIframeElementProps } from '@/media-access/types/ManagedIframeElementProps';
import { type RequestMediaCapabilityApproval } from '@/media-access/types/RequestMediaCapabilityApproval';
import { getIframeMediaPermissionMediaTypes } from '@/media-access/utils/getIframeMediaPermissionMediaTypes';
import { isIframeMediaPermissionCovered } from '@/media-access/utils/isIframeMediaPermissionCovered';
import { restrictIframeMediaPermission } from '@/media-access/utils/restrictIframeMediaPermission';
import { t } from '@lingui/core/macro';
import { isNonEmptyString } from '@sniptt/guards';
import { Fragment, useCallback, useId, useState } from 'react';
import { type IframeMediaPermission } from 'twenty-shared/types';
import { getIframeMediaAllow, isDefined } from 'twenty-shared/utils';

type ManagedIframeSessionProps = ManagedIframeElementProps & {
  iframeElement?: Element | null;
  ownerId: string;
  ownerName: string;
  permission: IframeMediaPermission | null;
  grantedPermission: IframeMediaPermission | null;
  requestCapabilityApproval?: RequestMediaCapabilityApproval;
};

const getEnableLabel = (permission: IframeMediaPermission) => {
  if (permission.microphone && permission.camera) {
    return t`Enable microphone and camera`;
  }

  if (permission.camera) {
    return t`Enable camera`;
  }

  return t`Enable microphone`;
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
  hidden,
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
  renderIframe,
  iframeElement,
  ownerId,
  ownerName,
  permission,
  grantedPermission,
  requestCapabilityApproval,
}: ManagedIframeSessionProps) => {
  const mediaAccessSessionId = useId();
  const [nativeIframeElement, setNativeIframeElement] =
    useState<HTMLIFrameElement | null>(null);
  const [activatedPermission, setActivatedPermission] =
    useState<IframeMediaPermission | null>(null);
  const [isRequestingApproval, setIsRequestingApproval] = useState(false);
  const delegatedPermission =
    isDefined(activatedPermission) &&
    isIframeMediaPermissionCovered({
      permission: activatedPermission,
      coveringPermission: permission,
    })
      ? activatedPermission
      : null;
  const isActivated = isDefined(delegatedPermission);

  if (isDefined(activatedPermission) && !isActivated) {
    setActivatedPermission(null);
  }

  const enablePermission = isDefined(requestCapabilityApproval)
    ? permission
    : grantedPermission;
  const anchorElement = isDefined(renderIframe)
    ? iframeElement
    : nativeIframeElement;
  const handleDeactivate = useCallback(() => {
    setActivatedPermission(null);
  }, []);
  const handleEnable = async () => {
    if (!isDefined(enablePermission)) {
      return;
    }

    if (
      !isDefined(requestCapabilityApproval) ||
      isIframeMediaPermissionCovered({
        permission: enablePermission,
        coveringPermission: grantedPermission,
      })
    ) {
      setActivatedPermission(enablePermission);
      return;
    }

    setIsRequestingApproval(true);

    try {
      const approvedCapabilities = await requestCapabilityApproval({
        mediaTypes: getIframeMediaPermissionMediaTypes(enablePermission),
        abortSignal: new AbortController().signal,
      });

      setActivatedPermission(
        restrictIframeMediaPermission({
          permission: enablePermission,
          capabilities: approvedCapabilities,
        }),
      );
    } finally {
      setIsRequestingApproval(false);
    }
  };
  const iframeAllow = getIframeMediaAllow({
    allow,
    permission: delegatedPermission,
  });
  const iframeSandbox = isActivated
    ? [
        ...new Set([
          ...(sandbox ?? '').split(/\s+/).filter(isNonEmptyString),
          'allow-same-origin',
        ]),
      ].join(' ')
    : sandbox;

  return (
    <>
      {isDefined(delegatedPermission) && (
        <ManagedIframeMediaAccessSessionEffect
          id={mediaAccessSessionId}
          ownerId={ownerId}
          ownerName={ownerName}
          permission={delegatedPermission}
          onStop={handleDeactivate}
        />
      )}
      <Fragment key={isActivated ? 'media-enabled' : 'media-disabled'}>
        {isDefined(renderIframe) ? (
          renderIframe({ allow: iframeAllow, sandbox: iframeSandbox })
        ) : (
          <iframe
            ref={setNativeIframeElement}
            src={src}
            srcDoc={srcDoc}
            title={title}
            id={id}
            name={name}
            className={className}
            style={style}
            width={width}
            height={height}
            hidden={hidden}
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
        )}
      </Fragment>
      {isDefined(enablePermission) &&
        !isActivated &&
        !hidden &&
        isDefined(anchorElement) && (
          <ManagedIframeEnableButton
            anchorElement={anchorElement}
            label={getEnableLabel(enablePermission)}
            disabled={isRequestingApproval}
            onClick={() => void handleEnable()}
          />
        )}
    </>
  );
};
