import { getAppProviderByClassName } from 'test/integration/utils/get-app-provider-by-class-name.util';

import { type AddCampaignsNavigationFolderCommand } from 'src/database/commands/upgrade-version-command/2-52/2-52-workspace-command-1793032958214-add-campaigns-navigation-folder.command';
import { SEED_APPLE_WORKSPACE_ID } from 'src/engine/workspace-manager/dev-seeder/core/constants/seeder-workspaces.constant';
import { STANDARD_NAVIGATION_MENU_ITEMS } from 'src/engine/workspace-manager/twenty-standard-application/constants/standard-navigation-menu-item.constant';

const RUN_ON_WORKSPACE_ARGS = {
  workspaceId: SEED_APPLE_WORKSPACE_ID,
  options: {},
  index: 0,
  total: 1,
};

const CAMPAIGNS_NAVIGATION_UNIVERSAL_IDENTIFIERS: string[] = [
  STANDARD_NAVIGATION_MENU_ITEMS.campaignsFolder.universalIdentifier,
  STANDARD_NAVIGATION_MENU_ITEMS.allMessageCampaigns.universalIdentifier,
  STANDARD_NAVIGATION_MENU_ITEMS.allMessageLists.universalIdentifier,
];

type NavigationMenuItemRow = {
  id: string;
  universalIdentifier: string;
  type: string;
  folderId: string | null;
  targetObjectNameSingular: string | null;
  name: string | null;
  position: number;
};

const readNavigationMenuItems = async (): Promise<NavigationMenuItemRow[]> =>
  global.testDataSource.query(
    `SELECT n."id", n."universalIdentifier", n."type", n."folderId", n."name",
            n."position", o."nameSingular" AS "targetObjectNameSingular"
     FROM core."navigationMenuItem" n
     LEFT JOIN core."objectMetadata" o ON o."id" = n."targetObjectMetadataId"
     WHERE n."workspaceId" = $1
     ORDER BY n."universalIdentifier"`,
    [SEED_APPLE_WORKSPACE_ID],
  );

const isCampaignsNavigationMenuItem = ({
  universalIdentifier,
}: NavigationMenuItemRow) =>
  CAMPAIGNS_NAVIGATION_UNIVERSAL_IDENTIFIERS.includes(universalIdentifier);

describe('2-52 workspace command - add campaigns navigation folder (integration)', () => {
  let command: AddCampaignsNavigationFolderCommand;

  beforeAll(() => {
    command = getAppProviderByClassName<AddCampaignsNavigationFolderCommand>(
      'AddCampaignsNavigationFolderCommand',
    );
  });

  afterAll(async () => {
    await command.up(RUN_ON_WORKSPACE_ARGS);
  });

  it('removes the folder on down and recreates it linked to the real campaign and list objects on up', async () => {
    const navigationMenuItemsBefore = await readNavigationMenuItems();
    const otherNavigationMenuItemsBefore = navigationMenuItemsBefore.filter(
      (navigationMenuItem) =>
        !isCampaignsNavigationMenuItem(navigationMenuItem),
    );

    await command.down(RUN_ON_WORKSPACE_ARGS);

    expect(await readNavigationMenuItems()).toEqual(
      otherNavigationMenuItemsBefore,
    );

    await command.up(RUN_ON_WORKSPACE_ARGS);
    await command.up(RUN_ON_WORKSPACE_ARGS);

    const navigationMenuItemsAfter = await readNavigationMenuItems();
    const campaignsNavigationMenuItems = navigationMenuItemsAfter.filter(
      isCampaignsNavigationMenuItem,
    );
    const folder = campaignsNavigationMenuItems.find(
      ({ universalIdentifier }) =>
        universalIdentifier ===
        STANDARD_NAVIGATION_MENU_ITEMS.campaignsFolder.universalIdentifier,
    );

    expect(
      navigationMenuItemsAfter.filter(
        (navigationMenuItem) =>
          !isCampaignsNavigationMenuItem(navigationMenuItem),
      ),
    ).toEqual(otherNavigationMenuItemsBefore);
    expect(folder).toMatchObject({
      type: 'FOLDER',
      name: 'Campaigns',
      folderId: null,
    });
    expect(
      campaignsNavigationMenuItems
        .filter(({ type }) => type === 'OBJECT')
        .map(({ folderId, targetObjectNameSingular, position }) => ({
          folderId,
          targetObjectNameSingular,
          position,
        })),
    ).toEqual(
      expect.arrayContaining([
        {
          folderId: folder?.id,
          targetObjectNameSingular: 'messageCampaign',
          position: 0,
        },
        {
          folderId: folder?.id,
          targetObjectNameSingular: 'messageList',
          position: 1,
        },
      ]),
    );
    expect(campaignsNavigationMenuItems).toHaveLength(3);
  });
});
