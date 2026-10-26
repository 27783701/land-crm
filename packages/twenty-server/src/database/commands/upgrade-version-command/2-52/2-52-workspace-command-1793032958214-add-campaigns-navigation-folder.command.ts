import { Inject } from '@nestjs/common';
import { Command } from 'nest-commander';
import { isDefined } from 'twenty-shared/utils';

import { ProvisionedWorkspaceCommandRunner } from 'src/database/commands/command-runners/provisioned-workspace.command-runner';
import { WorkspaceIteratorService } from 'src/database/commands/command-runners/workspace-iterator.service';
import { type RunOnWorkspaceArgs } from 'src/database/commands/command-runners/workspace.command-runner';
import { getStandardFlatEntitiesToCreateOrThrow } from 'src/database/commands/upgrade-version-command/2-10/utils/get-standard-flat-entities-to-create-or-throw.util';
import { ApplicationService } from 'src/engine/core-modules/application/application.service';
import { RegisteredWorkspaceCommand } from 'src/engine/core-modules/upgrade/decorators/registered-workspace-command.decorator';
import { type FlatNavigationMenuItem } from 'src/engine/metadata-modules/flat-navigation-menu-item/types/flat-navigation-menu-item.type';
import { WorkspaceCacheService } from 'src/engine/workspace-cache/services/workspace-cache.service';
import { STANDARD_NAVIGATION_MENU_ITEMS } from 'src/engine/workspace-manager/twenty-standard-application/constants/standard-navigation-menu-item.constant';
import { computeTwentyStandardApplicationAllFlatEntityMaps } from 'src/engine/workspace-manager/twenty-standard-application/utils/twenty-standard-application-all-flat-entity-maps.constant';
import { WorkspaceMigrationBuilderException } from 'src/engine/workspace-manager/workspace-migration/exceptions/workspace-migration-builder-exception';
import { WorkspaceMigrationValidateBuildAndRunService } from 'src/engine/workspace-manager/workspace-migration/services/workspace-migration-validate-build-and-run-service';

const CAMPAIGNS_NAVIGATION_UNIVERSAL_IDENTIFIERS = [
  STANDARD_NAVIGATION_MENU_ITEMS.campaignsFolder.universalIdentifier,
  STANDARD_NAVIGATION_MENU_ITEMS.allMessageCampaigns.universalIdentifier,
  STANDARD_NAVIGATION_MENU_ITEMS.allMessageLists.universalIdentifier,
];

@RegisteredWorkspaceCommand('2.52.0', 1793032958214)
@Command({
  name: 'upgrade:2-52:add-campaigns-navigation-folder',
  description:
    'Add the Campaigns folder holding Campaigns and Lists to the navigation menu',
})
export class AddCampaignsNavigationFolderCommand extends ProvisionedWorkspaceCommandRunner {
  @Inject(ApplicationService)
  private readonly applicationService: ApplicationService;

  @Inject(WorkspaceCacheService)
  private readonly workspaceCacheService: WorkspaceCacheService;

  @Inject(WorkspaceMigrationValidateBuildAndRunService)
  private readonly workspaceMigrationValidateBuildAndRunService: WorkspaceMigrationValidateBuildAndRunService;

  constructor(
    protected readonly workspaceIteratorService: WorkspaceIteratorService,
  ) {
    super(workspaceIteratorService);
  }

  override async runOnWorkspace(args: RunOnWorkspaceArgs): Promise<void> {
    await this.up(args);
  }

  async up({ workspaceId, options }: RunOnWorkspaceArgs): Promise<void> {
    const { twentyStandardFlatApplication } =
      await this.applicationService.findWorkspaceTwentyStandardAndCustomApplicationOrThrow(
        { workspaceId },
      );
    const { flatNavigationMenuItemMaps } =
      await this.workspaceCacheService.getOrRecompute(workspaceId, [
        'flatNavigationMenuItemMaps',
      ]);
    const { allFlatEntityMaps: standardAllFlatEntityMaps } =
      computeTwentyStandardApplicationAllFlatEntityMaps({
        now: new Date().toISOString(),
        workspaceId,
        twentyStandardApplicationId: twentyStandardFlatApplication.id,
      });

    const navigationMenuItemsToCreate =
      getStandardFlatEntitiesToCreateOrThrow<FlatNavigationMenuItem>({
        standardFlatEntityMaps:
          standardAllFlatEntityMaps.flatNavigationMenuItemMaps,
        existingFlatEntityMaps: flatNavigationMenuItemMaps,
        universalIdentifiers: CAMPAIGNS_NAVIGATION_UNIVERSAL_IDENTIFIERS,
      });

    await this.runNavigationMenuItemMigration({
      workspaceId,
      dryRun: options.dryRun ?? false,
      applicationUniversalIdentifier:
        twentyStandardFlatApplication.universalIdentifier,
      flatEntityToCreate: navigationMenuItemsToCreate,
      flatEntityToDelete: [],
    });
  }

  async down({ workspaceId, options }: RunOnWorkspaceArgs): Promise<void> {
    const { twentyStandardFlatApplication } =
      await this.applicationService.findWorkspaceTwentyStandardAndCustomApplicationOrThrow(
        { workspaceId },
      );
    const { flatNavigationMenuItemMaps } =
      await this.workspaceCacheService.getOrRecompute(workspaceId, [
        'flatNavigationMenuItemMaps',
      ]);

    const navigationMenuItemsToDelete =
      CAMPAIGNS_NAVIGATION_UNIVERSAL_IDENTIFIERS.map(
        (universalIdentifier) =>
          flatNavigationMenuItemMaps.byUniversalIdentifier[universalIdentifier],
      ).filter(isDefined);

    await this.runNavigationMenuItemMigration({
      workspaceId,
      dryRun: options.dryRun ?? false,
      applicationUniversalIdentifier:
        twentyStandardFlatApplication.universalIdentifier,
      flatEntityToCreate: [],
      flatEntityToDelete: navigationMenuItemsToDelete,
    });
  }

  private async runNavigationMenuItemMigration({
    workspaceId,
    dryRun,
    applicationUniversalIdentifier,
    flatEntityToCreate,
    flatEntityToDelete,
  }: {
    workspaceId: string;
    dryRun: boolean;
    applicationUniversalIdentifier: string;
    flatEntityToCreate: FlatNavigationMenuItem[];
    flatEntityToDelete: FlatNavigationMenuItem[];
  }): Promise<void> {
    if (flatEntityToCreate.length === 0 && flatEntityToDelete.length === 0) {
      return;
    }

    this.logger.log(
      `${dryRun ? '[DRY RUN] ' : ''}Workspace ${workspaceId}: creating ${flatEntityToCreate.length} and deleting ${flatEntityToDelete.length} Campaigns navigation item(s)`,
    );

    if (dryRun) {
      return;
    }

    const result =
      await this.workspaceMigrationValidateBuildAndRunService.validateBuildAndRunWorkspaceMigration(
        {
          isSystemBuild: true,
          applicationUniversalIdentifier,
          workspaceId,
          allFlatEntityOperationByMetadataName: {
            navigationMenuItem: {
              flatEntityToCreate,
              flatEntityToDelete,
              flatEntityToUpdate: [],
            },
          },
        },
      );

    if (result.status === 'fail') {
      throw new WorkspaceMigrationBuilderException(result);
    }
  }
}
