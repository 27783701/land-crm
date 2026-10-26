import { type ManagedIframeProps } from '@/media-access/types/ManagedIframeProps';
import { isString } from '@sniptt/guards';
import { type CSSProperties } from 'react';

const NUMERIC_DIMENSION_PATTERN = /^\d+(?:\.\d+)?$/;

const normalizeDimension = (
  dimension: CSSProperties['width'],
): CSSProperties['width'] =>
  isString(dimension) && NUMERIC_DIMENSION_PATTERN.test(dimension)
    ? Number(dimension)
    : dimension;

export const getManagedIframeContainerStyle = ({
  style,
  width,
  height,
}: Pick<ManagedIframeProps, 'style' | 'width' | 'height'>): CSSProperties => ({
  width: normalizeDimension(style?.width ?? width ?? '100%'),
  height: normalizeDimension(style?.height ?? height ?? '100%'),
  display: style?.display === 'none' ? 'none' : undefined,
});
