import { getIframeHostReactProps } from '@/host/elements/utils/getIframeHostReactProps';

describe('getIframeHostReactProps', () => {
  it('keeps iframe source, dimensions, media options and parsed styles', () => {
    expect(
      getIframeHostReactProps({
        src: 'https://phone.example.com',
        srcDoc: '<p>Sandboxed content</p>',
        width: 400,
        height: '300',
        hidden: true,
        style: { width: 400, color: 'red', '--phone-color': 'red' },
        sandbox: 'allow-scripts',
        allow: 'microphone',
      }),
    ).toEqual(
      expect.objectContaining({
        src: 'https://phone.example.com',
        srcDoc: '<p>Sandboxed content</p>',
        width: 400,
        height: '300',
        hidden: true,
        style: { width: 400, color: 'red', '--phone-color': 'red' },
        sandbox: 'allow-scripts',
        allow: 'microphone',
      }),
    );
  });

  it('drops malformed wire values and properties outside the iframe contract', () => {
    const props = getIframeHostReactProps({
      src: {},
      srcDoc: 42,
      allow: true,
      sandbox: ['allow-same-origin'],
      width: false,
      hidden: 'true',
      style: { width: {}, height: 300 },
      iframeMediaPermissions: [{ origin: 'https://phone.example.com' }],
    });

    expect(props).toEqual(
      expect.objectContaining({
        src: undefined,
        srcDoc: undefined,
        allow: undefined,
        sandbox: undefined,
        width: undefined,
        hidden: undefined,
        style: { height: 300 },
      }),
    );
    expect(props).not.toHaveProperty('iframeMediaPermissions');
  });
});
