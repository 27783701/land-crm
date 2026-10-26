import { gql } from 'graphql-tag';
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
import { makeAdminPanelApiRequest } from 'test/integration/twenty-config/utils/make-admin-panel-api-request.util';
import { FeatureFlagKey } from 'twenty-shared/types';
import { isDefined } from 'twenty-shared/utils';
import { v4 as uuidv4 } from 'uuid';

const FAKE_MCP_SERVER_PORT = 4789;

const CREATE_CONFIG_VARIABLE_MUTATION = gql`
  mutation CreateDatabaseConfigVariable($key: String!, $value: JSON!) {
    createDatabaseConfigVariable(key: $key, value: $value)
  }
`;

const DELETE_CONFIG_VARIABLE_MUTATION = gql`
  mutation DeleteDatabaseConfigVariable($key: String!) {
    deleteDatabaseConfigVariable(key: $key)
  }
`;

describe('mcpServer tool sync (e2e)', () => {
  let fakeMcpServer: FakeMcpServer;
  const createdMcpServerIds: string[] = [];

  beforeAll(async () => {
    jest.useRealTimers();
    await updateFeatureFlag({
      featureFlag: FeatureFlagKey.IS_MCP_SERVERS_ENABLED,
      value: true,
      expectToFail: false,
    });
    await makeAdminPanelApiRequest({
      query: CREATE_CONFIG_VARIABLE_MUTATION,
      variables: { key: 'OUTBOUND_HTTP_ALLOWED_INTERNAL_HOSTS', value: ['*'] },
    });
    fakeMcpServer = await startFakeMcpServer(FAKE_MCP_SERVER_PORT);
  });

  afterAll(async () => {
    await fakeMcpServer.close();
    await makeAdminPanelApiRequest({
      query: DELETE_CONFIG_VARIABLE_MUTATION,
      variables: { key: 'OUTBOUND_HTTP_ALLOWED_INTERNAL_HOSTS' },
    });
    jest.useFakeTimers();
  });

  afterEach(async () => {
    for (const id of createdMcpServerIds.splice(0)) {
      const response = await deleteMcpServer(id);

      expect(response.body.errors).toBeUndefined();
    }
  });

  const createAndTrack = async (url: string) => {
    const response = await createMcpServer({
      name: `fake_${uuidv4().slice(0, 8)}`,
      label: 'Fake',
      url,
    });
    const created = response.body.data?.createMcpServer;

    if (isDefined(created?.id)) {
      createdMcpServerIds.push(created.id);
    }

    expect(response.body.errors).toBeUndefined();

    return created;
  };

  it('caches the sanitized tool list when the server is created', async () => {
    const created = await createAndTrack(fakeMcpServer.url);

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
    expect(fakeMcpServer.receivedAuthorizationHeaders).not.toContain(
      expect.stringContaining('Bearer'),
    );
  });

  it('records the failure and keeps the server when it is unreachable', async () => {
    const created = await createAndTrack('http://127.0.0.1:1/mcp');

    expect(created.tools).toEqual([]);
    expect(created.toolsSyncedAt).toBeNull();
    expect(created.toolsSyncError).toEqual(expect.any(String));
  });

  it('re-syncs on demand and when the url changes', async () => {
    const created = await createAndTrack('http://127.0.0.1:1/mcp');

    const updated = await updateMcpServer({
      id: created.id,
      update: { url: fakeMcpServer.url },
    });

    expect(updated.body.data.updateMcpServer.tools).toHaveLength(1);
    expect(updated.body.data.updateMcpServer.toolsSyncError).toBeNull();

    await fakeMcpServer.close();

    const synced = await syncMcpServerTools(created.id);

    expect(synced.body.data.syncMcpServerTools.toolsSyncError).toEqual(
      expect.any(String),
    );
    expect(synced.body.data.syncMcpServerTools.tools).toHaveLength(1);

    fakeMcpServer = await startFakeMcpServer(FAKE_MCP_SERVER_PORT);
  });
});
