import {
  createMcpServer,
  deleteMcpServer,
  syncMcpServerTools,
  updateMcpServer,
} from 'test/integration/metadata/suites/utils/mcp-server-test.util';
import {
  type FakeMcpServer,
  startFakeMcpServer,
} from 'test/integration/metadata/suites/utils/mcp-server-fake-server.util';
import { updateFeatureFlag } from 'test/integration/metadata/suites/utils/update-feature-flag.util';
import { updateConfigVariable } from 'test/integration/twenty-config/utils/update-config-variable.util';
import { getAppProviderByClassName } from 'test/integration/utils/get-app-provider-by-class-name.util';
import { getCoreRepository } from 'test/integration/utils/get-core-repository.util';
import { FeatureFlagKey } from 'twenty-shared/types';
import { isDefined } from 'twenty-shared/utils';
import { v4 as uuidv4 } from 'uuid';

import { plaintextStringSchema } from 'src/engine/core-modules/secret-encryption/branded-strings/plaintext-string.type';
import { ConnectedAccountEntity } from 'src/engine/metadata-modules/connected-account/entities/connected-account.entity';
import { type ConnectedAccountTokenEncryptionService } from 'src/engine/metadata-modules/connected-account/services/connected-account-token-encryption.service';
import { SEED_APPLE_WORKSPACE_ID } from 'src/engine/workspace-manager/dev-seeder/core/constants/seeder-workspaces.constant';
import { CONNECTED_ACCOUNT_DATA_SEED_IDS } from 'src/engine/workspace-manager/dev-seeder/data/constants/connected-account-data-seeds.constant';

const UNREACHABLE_URL = 'http://127.0.0.1:1/mcp';

describe('mcpServer tool sync (e2e)', () => {
  let fakeMcpServer: FakeMcpServer;
  const createdMcpServerIds: string[] = [];

  beforeAll(async () => {
    await updateFeatureFlag({
      featureFlag: FeatureFlagKey.IS_MCP_SERVERS_ENABLED,
      value: true,
      expectToFail: false,
    });
    await updateConfigVariable({
      input: {
        key: 'OUTBOUND_HTTP_ALLOWED_INTERNAL_HOSTS',
        value: ['127.0.0.1'],
      },
    });
    fakeMcpServer = await startFakeMcpServer();
  });

  afterAll(async () => {
    await fakeMcpServer.close();
    await updateConfigVariable({
      input: { key: 'OUTBOUND_HTTP_ALLOWED_INTERNAL_HOSTS', value: [] },
    });
  });

  afterEach(async () => {
    for (const id of createdMcpServerIds.splice(0)) {
      const response = await deleteMcpServer(id);

      expect(response.body.errors).toBeUndefined();
    }
  });

  const createAndTrack = async ({
    url,
    connectedAccountId,
  }: {
    url: string;
    connectedAccountId?: string;
  }) => {
    const response = await createMcpServer({
      name: `fake_${uuidv4().slice(0, 8)}`,
      label: 'Fake',
      url,
      connectedAccountId,
    });
    const created = response.body.data?.createMcpServer;

    if (isDefined(created?.id)) {
      createdMcpServerIds.push(created.id);
    }

    expect(response.body.errors).toBeUndefined();

    return created;
  };

  it('caches the sanitized tool list when the server is created', async () => {
    const created = await createAndTrack({ url: fakeMcpServer.url });

    expect(created.toolsSyncError).toBeNull();
    expect(created.toolsSyncedAt).not.toBeNull();
    expect(created.tools).toEqual([
      {
        name: 'search_docs',
        description: 'Search the documentation',
        inputSchema: expect.objectContaining({ type: 'object' }),
        annotations: { readOnlyHint: true },
      },
    ]);
    expect(new Set(fakeMcpServer.receivedAuthorizationHeaders)).toEqual(
      new Set([undefined]),
    );
  });

  it('authenticates with the access token of the linked connected account', async () => {
    const accessToken = 'mcp-access-token';
    const connectedAccountRepository =
      getCoreRepository<ConnectedAccountEntity>(ConnectedAccountEntity);
    const encryptedAccessToken =
      getAppProviderByClassName<ConnectedAccountTokenEncryptionService>(
        'ConnectedAccountTokenEncryptionService',
      ).encrypt({
        plaintext: plaintextStringSchema.parse(accessToken),
        workspaceId: SEED_APPLE_WORKSPACE_ID,
      });

    await connectedAccountRepository.update(
      { id: CONNECTED_ACCOUNT_DATA_SEED_IDS.JONY_SHARED },
      { accessToken: encryptedAccessToken },
    );

    try {
      const created = await createAndTrack({
        url: fakeMcpServer.url,
        connectedAccountId: CONNECTED_ACCOUNT_DATA_SEED_IDS.JONY_SHARED,
      });

      expect(created.toolsSyncError).toBeNull();
      expect(created.tools).toHaveLength(1);
      expect(fakeMcpServer.receivedAuthorizationHeaders).toContainEqual(
        `Bearer ${accessToken}`,
      );
    } finally {
      await connectedAccountRepository.update(
        { id: CONNECTED_ACCOUNT_DATA_SEED_IDS.JONY_SHARED },
        { accessToken: null },
      );
    }
  });

  it('records the failure and keeps the server when it is unreachable', async () => {
    const created = await createAndTrack({ url: UNREACHABLE_URL });

    expect(created.tools).toEqual([]);
    expect(created.toolsSyncedAt).toBeNull();
    expect(created.toolsSyncError).toEqual(expect.any(String));
  });

  it('re-syncs when the url changes and keeps the last good list on a failed re-sync', async () => {
    const created = await createAndTrack({ url: UNREACHABLE_URL });

    const updated = await updateMcpServer({
      id: created.id,
      update: { url: fakeMcpServer.url },
    });

    expect(updated.body.data.updateMcpServer.tools).toHaveLength(1);
    expect(updated.body.data.updateMcpServer.toolsSyncError).toBeNull();

    await fakeMcpServer.close();

    try {
      const synced = await syncMcpServerTools(created.id);

      expect(synced.body.data.syncMcpServerTools.toolsSyncError).toEqual(
        expect.any(String),
      );
      expect(synced.body.data.syncMcpServerTools.tools).toHaveLength(1);
    } finally {
      fakeMcpServer = await startFakeMcpServer();
    }
  });
});
