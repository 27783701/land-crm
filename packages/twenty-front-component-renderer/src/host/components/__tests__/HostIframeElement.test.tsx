import '@/testing/setupServerRenderingGlobals';

import { HostIframeElement } from '@/host/components/HostIframeElement';
import { FrontComponentIframeHostContext } from '@/host/elements/contexts/FrontComponentIframeHostContext';
import { type FrontComponentIframeHostProps } from '@/host/elements/types/FrontComponentIframeHostProps';
import { renderToStaticMarkup } from 'react-dom/server';

const findIframe = (markup: string) =>
  new DOMParser().parseFromString(markup, 'text/html').querySelector('iframe');

describe('HostIframeElement', () => {
  it('denies media and keeps sandbox restrictions without a trusted host', () => {
    const markup = renderToStaticMarkup(
      <HostIframeElement
        src="https://phone.example.com"
        allow="autoplay; microphone *; camera *"
        sandbox="allow-scripts allow-same-origin"
        width="400"
        height="300"
      />,
    );
    const iframe = findIframe(markup);

    expect(iframe?.getAttribute('allow')).toBe(
      "autoplay; microphone 'none'; camera 'none'",
    );
    expect(iframe?.getAttribute('sandbox')).toBe('allow-scripts');
    expect(iframe?.getAttribute('width')).toBe('400');
    expect(iframe?.getAttribute('height')).toBe('300');
  });

  it('normalizes differently cased sensitive props before invoking the trusted host', () => {
    const TrustedIframeHost = jest.fn(
      (_props: FrontComponentIframeHostProps) => <div>Managed iframe</div>,
    );

    renderToStaticMarkup(
      <FrontComponentIframeHostContext.Provider value={TrustedIframeHost}>
        <HostIframeElement
          SRC="https://phone.example.com"
          SRCDOC="<p>Sandboxed HTML</p>"
          ALLOW="microphone *"
          SANDBOX="allow-scripts allow-same-origin"
          STYLE="width: 400px; height: 300px"
        />
      </FrontComponentIframeHostContext.Provider>,
    );

    expect(TrustedIframeHost.mock.calls[0]?.[0].iframeProps).toEqual(
      expect.objectContaining({
        src: 'https://phone.example.com',
        srcDoc: '<p>Sandboxed HTML</p>',
        allow: 'microphone *',
        sandbox: 'allow-scripts',
        style: { width: '400px', height: '300px' },
      }),
    );
    expect(TrustedIframeHost.mock.calls[0]?.[0].iframeProps).not.toHaveProperty(
      'ALLOW',
    );
    expect(TrustedIframeHost.mock.calls[0]?.[0].iframeProps).not.toHaveProperty(
      'SRCDOC',
    );
  });

  it('keeps ordinary embeds on the native path and explicitly denies media', () => {
    const TrustedIframeHost = jest.fn(
      (_props: FrontComponentIframeHostProps) => <div>Managed iframe</div>,
    );
    const markup = renderToStaticMarkup(
      <FrontComponentIframeHostContext.Provider value={TrustedIframeHost}>
        <HostIframeElement
          src="https://example.com"
          allow="camera 'none'; autoplay"
          data-embed-kind="document"
          className="document-frame"
        />
      </FrontComponentIframeHostContext.Provider>,
    );
    const iframe = findIframe(markup);

    expect(TrustedIframeHost).not.toHaveBeenCalled();
    expect(iframe?.getAttribute('allow')).toBe(
      "autoplay; microphone 'none'; camera 'none'",
    );
    expect(iframe?.getAttribute('data-embed-kind')).toBe('document');
    expect(iframe?.className).toBe('document-frame');
  });
});
