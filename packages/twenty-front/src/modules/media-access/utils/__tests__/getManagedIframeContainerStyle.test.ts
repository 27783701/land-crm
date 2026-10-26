import { getManagedIframeContainerStyle } from '@/media-access/utils/getManagedIframeContainerStyle';

describe('getManagedIframeContainerStyle', () => {
  it('converts numeric HTML dimensions to CSS pixel dimensions', () => {
    expect(
      getManagedIframeContainerStyle({ width: '400', height: 300 }),
    ).toEqual({ width: 400, height: 300, display: undefined });
  });

  it('uses CSS dimensions before HTML dimensions and retains percentage units', () => {
    expect(
      getManagedIframeContainerStyle({
        width: '400',
        height: '300',
        style: { width: '50%', height: 180 },
      }),
    ).toEqual({ width: '50%', height: 180, display: undefined });
  });
});
