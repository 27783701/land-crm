import { getIframeMediaAllow } from '../getIframeMediaAllow';

describe('getIframeMediaAllow', () => {
  it.each([undefined, null, {}, 1, true])(
    'denies media by default for unsupported allow value %s',
    (allow) => {
      expect(getIframeMediaAllow({ allow })).toBe(
        "microphone 'none'; camera 'none'",
      );
    },
  );

  it('removes every media directive while preserving unrelated permissions', () => {
    expect(
      getIframeMediaAllow({
        allow: " MICROPHONE *; Camera; microphone 'src'; fullscreen; autoplay ",
        permission: null,
      }),
    ).toBe("fullscreen; autoplay; microphone 'none'; camera 'none'");
  });

  it.each([
    {
      microphone: true,
      camera: false,
      expected: "microphone https://phone.example.com; camera 'none'",
    },
    {
      microphone: false,
      camera: true,
      expected: "microphone 'none'; camera https://phone.example.com",
    },
    {
      microphone: true,
      camera: true,
      expected:
        'microphone https://phone.example.com; camera https://phone.example.com',
    },
  ])(
    'serializes exact origins independently for microphone=$microphone and camera=$camera',
    ({ microphone, camera, expected }) => {
      expect(
        getIframeMediaAllow({
          allow: 'camera *; microphone https://other.example.com',
          permission: {
            origin: 'https://PHONE.example.com:443/',
            microphone,
            camera,
          },
        }),
      ).toBe(expected);
    },
  );

  it.each(['http://phone.example.com', 'https://phone.example.com; camera *'])(
    'denies both capabilities when the supplied origin is invalid: %s',
    (origin) => {
      expect(
        getIframeMediaAllow({
          allow: 'microphone *; camera *',
          permission: { origin, microphone: true, camera: true },
        }),
      ).toBe("microphone 'none'; camera 'none'");
    },
  );

  it('requires boolean grants instead of truthy permission values', () => {
    expect(
      getIframeMediaAllow({
        allow: 'microphone *; camera *',
        permission: {
          origin: 'https://phone.example.com',
          microphone: 'true' as unknown as boolean,
          camera: 1 as unknown as boolean,
        },
      }),
    ).toBe("microphone 'none'; camera 'none'");
  });
});
