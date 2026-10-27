import { getIframeHostReactProps } from '@/host/elements/utils/getIframeHostReactProps';

describe('getIframeHostReactProps', () => {
  it('keeps supported iframe attributes, dimensions and parsed styles', () => {
    expect(
      getIframeHostReactProps({
        src: 'https://phone.example.com',
        srcDoc: '<p>Sandboxed content</p>',
        width: 400,
        height: '300',
        style: { width: 400, color: 'red', '--phone-color': 'red' },
        loading: 'lazy',
        referrerPolicy: 'no-referrer',
        allowFullScreen: true,
      }),
    ).toEqual(
      expect.objectContaining({
        src: 'https://phone.example.com',
        srcDoc: '<p>Sandboxed content</p>',
        width: 400,
        height: '300',
        style: { width: 400, color: 'red', '--phone-color': 'red' },
        loading: 'lazy',
        referrerPolicy: 'no-referrer',
        allowFullScreen: true,
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
      style: { width: {}, height: 300 },
      loading: 'invalid',
      referrerPolicy: 'invalid',
      onLoad: 'alert(1)',
      allowFullScreen: 'true',
      iframeMediaPermissions: [{ origin: 'https://phone.example.com' }],
    });

    expect(props).toEqual(
      expect.objectContaining({
        src: undefined,
        srcDoc: undefined,
        allow: undefined,
        sandbox: undefined,
        width: undefined,
        style: { height: 300 },
        loading: undefined,
        referrerPolicy: undefined,
        onLoad: undefined,
        allowFullScreen: undefined,
      }),
    );
    expect(props).not.toHaveProperty('iframeMediaPermissions');
  });
});
