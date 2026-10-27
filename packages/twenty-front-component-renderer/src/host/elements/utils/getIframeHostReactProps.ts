import { isBoolean, isNumber, isString } from '@sniptt/guards';
import { type CSSProperties } from 'react';
import { isPlainObject } from 'twenty-shared/utils';

import { type FrontComponentIframeHostProps } from '@/host/elements/types/FrontComponentIframeHostProps';

const getString = (value: unknown) => (isString(value) ? value : undefined);

const getDimension = (value: unknown) =>
  isString(value) || isNumber(value) ? value : undefined;

const getStyle = (value: unknown): CSSProperties | undefined => {
  if (!isPlainObject(value)) {
    return undefined;
  }

  const style: Record<string, string | number> = {};

  for (const [property, propertyValue] of Object.entries(value)) {
    if (isString(propertyValue) || isNumber(propertyValue)) {
      style[property] = propertyValue;
    }
  }

  return style;
};

export const getIframeHostReactProps = (
  props: Record<string, unknown>,
): FrontComponentIframeHostProps['iframeProps'] => ({
  src: getString(props.src),
  srcDoc: getString(props.srcDoc),
  style: getStyle(props.style),
  width: getDimension(props.width),
  height: getDimension(props.height),
  hidden: isBoolean(props.hidden) ? props.hidden : undefined,
  sandbox: getString(props.sandbox),
  allow: getString(props.allow),
});
