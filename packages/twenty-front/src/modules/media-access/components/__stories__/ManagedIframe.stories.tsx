import { ManagedIframe } from '@/media-access/components/ManagedIframe';
import { MediaAccessIndicator } from '@/media-access/components/MediaAccessIndicator';
import { mediaAccessSessionsState } from '@/media-access/states/mediaAccessSessionsState';
import { type MediaAccessSession } from '@/media-access/types/MediaAccessSession';
import { type Meta, type StoryObj } from '@storybook/react-vite';
import { createStore, Provider } from 'jotai';
import { type CSSProperties, useState } from 'react';
import { expect, fn, screen, userEvent, waitFor, within } from 'storybook/test';
import { Button } from 'twenty-ui/primitives/input';
import { ComponentDecorator } from 'twenty-ui/testing';

const meta: Meta<typeof ManagedIframe> = {
  title: 'Modules/MediaAccess/ManagedIframe',
  component: ManagedIframe,
  decorators: [ComponentDecorator],
};

export default meta;

const MICROPHONE_PERMISSION = {
  origin: 'https://example.com',
  microphone: true,
  camera: false,
};

const ManagedIframePreview = ({
  hasNativeCapture = false,
  iframeStyle,
}: {
  hasNativeCapture?: boolean;
  iframeStyle?: CSSProperties;
}) => {
  const [isHidden, setIsHidden] = useState(false);
  const [isGranted, setIsGranted] = useState(true);
  const [store] = useState(() => {
    const previewStore = createStore();
    const sessions: MediaAccessSession[] = hasNativeCapture
      ? [
          {
            id: 'recorder-session',
            ownerId: 'application:recorder',
            ownerName: 'Native recorder',
            status: 'capturing',
            mediaTypes: ['video'],
            onStop: fn(),
          },
        ]
      : [];
    previewStore.set(mediaAccessSessionsState.atom, sessions);

    return previewStore;
  });

  return (
    <Provider store={store}>
      <MediaAccessIndicator />
      <Button onClick={() => setIsHidden(!isHidden)}>
        {isHidden ? 'Show phone' : 'Hide phone'}
      </Button>
      <Button onClick={() => setIsGranted(!isGranted)}>
        {isGranted ? 'Revoke microphone' : 'Grant microphone'}
      </Button>
      <div style={{ width: 500, height: 250 }} hidden={isHidden}>
        <ManagedIframe
          iframeId="phone"
          owner={{ type: 'workspace-widget', id: 'phone', name: 'Aircall' }}
          iframeMediaPermissions={isGranted ? [MICROPHONE_PERMISSION] : []}
          requestedMediaCapabilities={['microphone', 'camera']}
          src="https://example.com"
          title="Aircall phone"
          width="100%"
          height="100%"
          style={iframeStyle}
          sandbox="allow-scripts allow-forms"
          allow="microphone *; camera *; encrypted-media"
        />
      </div>
    </Provider>
  );
};

export const EnableAndDisable: StoryObj<typeof ManagedIframe> = {
  render: () => <ManagedIframePreview />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const initialFrame = canvas.getByTitle('Aircall phone');

    await expect(initialFrame).toHaveAttribute(
      'allow',
      "encrypted-media; microphone 'none'; camera 'none'",
    );
    await expect(
      canvas.queryByRole('button', { name: 'Media access enabled' }),
    ).not.toBeInTheDocument();
    await userEvent.click(
      canvas.getByRole('button', { name: 'Enable microphone' }),
    );

    const enabledFrame = canvas.getByTitle('Aircall phone');
    await expect(enabledFrame).not.toBe(initialFrame);
    await expect(enabledFrame).toHaveAttribute(
      'allow',
      "encrypted-media; microphone https://example.com; camera 'none'",
    );
    await userEvent.click(canvas.getByRole('button', { name: 'Hide phone' }));
    await userEvent.click(
      canvas.getByRole('button', { name: 'Media access enabled' }),
    );
    await expect(
      await screen.findByText('Microphone access enabled'),
    ).toBeVisible();
    await expect(screen.getByText('https://example.com')).toBeVisible();
    await userEvent.click(
      screen.getByRole('button', { name: 'Disable media access for Aircall' }),
    );

    await waitFor(() => expect(enabledFrame).not.toBeInTheDocument());
    await expect(
      canvas.queryByRole('button', { name: 'Media access enabled' }),
    ).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', { name: 'Show phone' }));
    await expect(
      canvas.getByRole('button', { name: 'Enable microphone' }),
    ).toBeVisible();
    await expect(canvas.getByTitle('Aircall phone')).toHaveAttribute(
      'allow',
      "encrypted-media; microphone 'none'; camera 'none'",
    );
  },
};

export const RevokedPermission: StoryObj<typeof ManagedIframe> = {
  render: () => <ManagedIframePreview />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(
      canvas.getByRole('button', { name: 'Enable microphone' }),
    );
    const enabledFrame = canvas.getByTitle('Aircall phone');
    await userEvent.click(
      canvas.getByRole('button', { name: 'Revoke microphone' }),
    );

    await waitFor(() => expect(enabledFrame).not.toBeInTheDocument());
    await expect(
      canvas.queryByRole('button', { name: 'Media access enabled' }),
    ).not.toBeInTheDocument();
    await expect(
      canvas.queryByRole('button', { name: 'Enable microphone' }),
    ).not.toBeInTheDocument();
    await userEvent.click(
      canvas.getByRole('button', { name: 'Grant microphone' }),
    );
    await expect(
      canvas.getByRole('button', { name: 'Enable microphone' }),
    ).toBeVisible();
    await expect(canvas.getByTitle('Aircall phone')).toHaveAttribute(
      'allow',
      "encrypted-media; microphone 'none'; camera 'none'",
    );
  },
};

export const NativeCaptureAndExternalAccess: StoryObj<typeof ManagedIframe> = {
  render: () => <ManagedIframePreview hasNativeCapture />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(
      canvas.getByRole('button', { name: 'Enable microphone' }),
    );
    await userEvent.click(
      canvas.getByRole('button', { name: 'Microphone or camera in use' }),
    );

    const sessions = await screen.findByRole('list', {
      name: 'Microphone or camera in use',
    });
    await expect(within(sessions).getAllByRole('listitem')).toHaveLength(2);
    await expect(within(sessions).getByText('Camera')).toBeVisible();
    await expect(
      within(sessions).getByText('Microphone access enabled'),
    ).toBeVisible();
    await userEvent.click(
      within(sessions).getByRole('button', {
        name: 'Disable media access for Aircall',
      }),
    );

    await waitFor(() =>
      expect(within(sessions).getAllByRole('listitem')).toHaveLength(1),
    );
    await expect(
      within(sessions).getByRole('button', {
        name: 'Stop capture for Native recorder',
      }),
    ).toBeVisible();
  },
};

export const FixedSize: StoryObj<typeof ManagedIframe> = {
  render: () => (
    <ManagedIframePreview
      iframeStyle={{ width: 360, height: 180, border: 0 }}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const initialFrame = canvas.getByTitle('Aircall phone');

    await expect(initialFrame.getBoundingClientRect().width).toBe(360);
    await expect(initialFrame.getBoundingClientRect().height).toBe(180);
    await expect(
      initialFrame.parentElement?.getBoundingClientRect().width,
    ).toBe(360);
    await expect(
      initialFrame.parentElement?.getBoundingClientRect().height,
    ).toBe(180);
    await userEvent.click(
      canvas.getByRole('button', { name: 'Enable microphone' }),
    );

    const enabledFrame = canvas.getByTitle('Aircall phone');
    await expect(enabledFrame).not.toBe(initialFrame);
    await expect(enabledFrame.getBoundingClientRect().width).toBe(360);
    await expect(enabledFrame.getBoundingClientRect().height).toBe(180);
  },
};
