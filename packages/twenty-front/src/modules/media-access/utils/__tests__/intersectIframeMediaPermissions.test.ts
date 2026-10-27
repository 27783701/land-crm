import { intersectIframeMediaPermissions } from '@/media-access/utils/intersectIframeMediaPermissions';

const PHONE_ORIGIN = 'https://phone.example.com';
const VIDEO_ORIGIN = 'https://video.example.com';

describe('intersectIframeMediaPermissions', () => {
  it('ignores origins approved after the document was served', () => {
    expect(
      intersectIframeMediaPermissions({
        permissions: [
          { origin: PHONE_ORIGIN, microphone: true, camera: false },
          { origin: VIDEO_ORIGIN, microphone: true, camera: true },
        ],
        documentPermissions: [
          { origin: PHONE_ORIGIN, microphone: true, camera: false },
        ],
      }),
    ).toEqual([{ origin: PHONE_ORIGIN, microphone: true, camera: false }]);
  });

  it('applies capabilities revoked after the document was served', () => {
    expect(
      intersectIframeMediaPermissions({
        permissions: [
          { origin: VIDEO_ORIGIN, microphone: true, camera: false },
        ],
        documentPermissions: [
          { origin: VIDEO_ORIGIN, microphone: true, camera: true },
        ],
      }),
    ).toEqual([{ origin: VIDEO_ORIGIN, microphone: true, camera: false }]);
  });

  it('drops origins whose remaining capabilities are all disabled', () => {
    expect(
      intersectIframeMediaPermissions({
        permissions: [
          { origin: VIDEO_ORIGIN, microphone: false, camera: true },
        ],
        documentPermissions: [
          { origin: VIDEO_ORIGIN, microphone: true, camera: false },
        ],
      }),
    ).toEqual([]);
  });
});
