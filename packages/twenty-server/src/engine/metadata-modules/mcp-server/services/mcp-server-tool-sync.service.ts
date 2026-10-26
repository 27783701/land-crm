import { Injectable, Logger } from '@nestjs/common';

import { isDefined } from 'twenty-shared/utils';
import { type QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

import { WorkspaceManyOrAllFlatEntityMapsCacheService } from 'src/engine/metadata-modules/flat-entity/services/workspace-many-or-all-flat-entity-maps-cache.service';
import { type FlatMcpServer } from 'src/engine/metadata-modules/flat-mcp-server/types/flat-mcp-server.type';
import { McpServerEntity } from 'src/engine/metadata-modules/mcp-server/entities/mcp-server.entity';
import { McpServerClientService } from 'src/engine/metadata-modules/mcp-server/services/mcp-server-client.service';
import { type McpServerTool } from 'src/engine/metadata-modules/mcp-server/types/mcp-server-tool.type';
import { InjectWorkspaceScopedRepository } from 'src/engine/twenty-orm/workspace-scoped-repository/inject-workspace-scoped-repository.decorator';
import { WorkspaceScopedRepository } from 'src/engine/twenty-orm/workspace-scoped-repository/workspace-scoped-repository';
import { sanitizeMcpServerTool } from 'src/engine/metadata-modules/mcp-server/utils/sanitize-mcp-server-tool.util';

const SYNC_ERROR_MAX_LENGTH = 500;

@Injectable()
export class McpServerToolSyncService {
  private readonly logger = new Logger(McpServerToolSyncService.name);

  constructor(
    private readonly mcpServerClientService: McpServerClientService,
    private readonly workspaceManyOrAllFlatEntityMapsCacheService: WorkspaceManyOrAllFlatEntityMapsCacheService,
    @InjectWorkspaceScopedRepository(McpServerEntity)
    private readonly mcpServerRepository: WorkspaceScopedRepository<McpServerEntity>,
  ) {}

  // Never throws: a server that is down must not block saving its settings,
  // the outcome is reported through toolsSyncError instead.
  async syncTools(flatMcpServer: FlatMcpServer): Promise<void> {
    const { id, workspaceId } = flatMcpServer;

    try {
      const tools = await this.fetchSanitizedTools(flatMcpServer);

      await this.mcpServerRepository.update(
        workspaceId,
        { id },
        {
          tools: tools as QueryDeepPartialEntity<McpServerEntity>['tools'],
          toolsSyncedAt: new Date(),
          toolsSyncError: null,
        },
      );
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Unknown MCP server error';

      this.logger.warn(
        `Failed to sync tools of MCP server ${id} in workspace ${workspaceId}: ${message}`,
      );

      await this.mcpServerRepository.update(
        workspaceId,
        { id },
        { toolsSyncError: message.slice(0, SYNC_ERROR_MAX_LENGTH) },
      );
    }

    await this.workspaceManyOrAllFlatEntityMapsCacheService.invalidateFlatEntityMaps(
      { workspaceId, flatMapsKeys: ['flatMcpServerMaps'] },
    );
  }

  private async fetchSanitizedTools(
    flatMcpServer: FlatMcpServer,
  ): Promise<McpServerTool[]> {
    const remoteTools = await this.mcpServerClientService.listTools({
      url: flatMcpServer.url,
      connectedAccountId: flatMcpServer.connectedAccountId,
      workspaceId: flatMcpServer.workspaceId,
    });

    return remoteTools.map(sanitizeMcpServerTool).filter(isDefined);
  }
}
