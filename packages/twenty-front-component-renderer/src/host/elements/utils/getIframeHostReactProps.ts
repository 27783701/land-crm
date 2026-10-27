import { isBoolean, isFunction, isNumber, isString } from '@sniptt/guards';
import {
  type CSSProperties,
  type IframeHTMLAttributes,
  type ReactEventHandler,
} from 'react';
import { isPlainObject } from 'twenty-shared/utils';

const getString = (value: unknown) => (isString(value) ? value : undefined);

const getDimension = (value: unknown) =>
  isString(value) || isNumber(value) ? value : undefined;

const getEventHandler = (
  value: unknown,
): ReactEventHandler<HTMLIFrameElement> | undefined => {
  if (!isFunction(value)) {
    return undefined;
  }

  return (event) => {
    value(event);
  };
};

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

const getReferrerPolicy = (value: unknown) => {
  switch (value) {
    case '':
    case 'no-referrer':
    case 'no-referrer-when-downgrade':
    case 'origin':
    case 'origin-when-cross-origin':
    case 'same-origin':
    case 'strict-origin':
    case 'strict-origin-when-cross-origin':
    case 'unsafe-url':
      return value;
    default:
      return undefined;
  }
};

export const getIframeHostReactProps = (
  props: Record<string, unknown>,
): IframeHTMLAttributes<HTMLIFrameElement> => ({
  src: getString(props.src),
  srcDoc: getString(props.srcDoc),
  title: getString(props.title),
  id: getString(props.id),
  name: getString(props.name),
  className: getString(props.className),
  style: getStyle(props.style),
  width: getDimension(props.width),
  height: getDimension(props.height),
  loading:
    props.loading === 'eager' || props.loading === 'lazy'
      ? props.loading
      : undefined,
  referrerPolicy: getReferrerPolicy(props.referrerPolicy),
  tabIndex: isNumber(props.tabIndex) ? props.tabIndex : undefined,
  onLoad: getEventHandler(props.onLoad),
  onError: getEventHandler(props.onError),
  onClick: getEventHandler(props.onClick),
  onFocus: getEventHandler(props.onFocus),
  onBlur: getEventHandler(props.onBlur),
  sandbox: getString(props.sandbox),
  allow: getString(props.allow),
  allowFullScreen: isBoolean(props.allowFullScreen)
    ? props.allowFullScreen
    : undefined,
});
