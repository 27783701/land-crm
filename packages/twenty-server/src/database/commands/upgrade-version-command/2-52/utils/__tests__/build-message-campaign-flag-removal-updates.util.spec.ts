import { TWENTY_STANDARD_APPLICATION_UNIVERSAL_IDENTIFIER } from 'twenty-shared/application';
import { CommandMenuItemAvailabilityType } from 'twenty-shared/types';

import { buildMessageCampaignFlagRemovalUpdates } from 'src/database/commands/upgrade-version-command/2-52/utils/build-message-campaign-flag-removal-updates.util';
import { EngineComponentKey } from 'src/engine/metadata-modules/command-menu-item/enums/engine-component-key.enum';
import { type FlatCommandMenuItem } from 'src/engine/metadata-modules/flat-command-menu-item/types/flat-command-menu-item.type';
import { createEmptyFlatEntityMaps } from 'src/engine/metadata-modules/flat-entity/constant/create-empty-flat-entity-maps.constant';
import { type FlatEntityMaps } from 'src/engine/metadata-modules/flat-entity/types/flat-entity-maps.type';
import { STANDARD_COMMAND_MENU_ITEMS } from 'src/engine/workspace-manager/twenty-standard-application/constants/standard-command-menu-item.constant';

const NOW = '2026-10-26T12:00:00.000Z';
const FLAG = 'featureFlags.IS_MESSAGE_CAMPAIGN_ENABLED';

const buildCommandMenuItem = ({
  universalIdentifier,
  conditionalAvailabilityExpression,
  applicationUniversalIdentifier = TWENTY_STANDARD_APPLICATION_UNIVERSAL_IDENTIFIER,
}: {
  universalIdentifier: string;
  conditionalAvailabilityExpression: string | null;
  applicationUniversalIdentifier?: string;
}): FlatCommandMenuItem => ({
  workspaceId: '20202020-1111-4111-8111-111111111111',
  applicationId: '20202020-2222-4222-8222-222222222222',
  applicationUniversalIdentifier,
  createdAt: NOW,
  updatedAt: NOW,
  id: universalIdentifier,
  universalIdentifier,
  label: 'Campaign',
  shortLabel: 'Campaign',
  icon: 'IconSend',
  position: 66,
  isPinned: false,
  isActive: true,
  isSystemSideEffect: false,
  engineComponentKey: EngineComponentKey.COMPOSE_CAMPAIGN,
  availabilityType: CommandMenuItemAvailabilityType.GLOBAL,
  conditionalAvailabilityExpression,
  conditionalPinnedExpression: null,
  availabilityObjectMetadataId: null,
  availabilityObjectMetadataUniversalIdentifier: null,
  navigationTargetObjectMetadataId: null,
  navigationTargetObjectMetadataUniversalIdentifier: null,
  frontComponentId: null,
  frontComponentUniversalIdentifier: null,
  pageLayoutId: null,
  pageLayoutUniversalIdentifier: null,
  workflowVersionId: null,
  coreWorkflowVersionId: null,
  hotKeys: null,
  payload: null,
  overrides: null,
  universalOverrides: null,
});

const buildMaps = (
  commandMenuItems: FlatCommandMenuItem[],
): FlatEntityMaps<FlatCommandMenuItem> => ({
  ...createEmptyFlatEntityMaps(),
  byUniversalIdentifier: Object.fromEntries(
    commandMenuItems.map((commandMenuItem) => [
      commandMenuItem.universalIdentifier,
      commandMenuItem,
    ]),
  ),
});

const FLAGGED_SEND_CAMPAIGN_EXPRESSION = `numberOfSelectedRecords == 1 and (everyEquals(selectedRecords, "status", "DRAFT") or everyEquals(selectedRecords, "status", "SCHEDULED")) and noneDefined(selectedRecords, "deletedAt") and ${FLAG}`;
const FLAGGED_ADD_TO_LIST_EXPRESSION = `${FLAG} and targetObjectWritePermissions.messageListMember and numberOfSelectedRecords >= 1 and not hasAnySoftDeleteFilterOnView and (isSelectAll or noneDefined(selectedRecords, "deletedAt"))`;

describe('buildMessageCampaignFlagRemovalUpdates', () => {
  it('drops the flag and lands on the shipped standard expressions', () => {
    const updates = buildMessageCampaignFlagRemovalUpdates({
      flatCommandMenuItemMaps: buildMaps([
        buildCommandMenuItem({
          universalIdentifier:
            STANDARD_COMMAND_MENU_ITEMS.composeCampaign.universalIdentifier,
          conditionalAvailabilityExpression: FLAG,
        }),
        buildCommandMenuItem({
          universalIdentifier:
            STANDARD_COMMAND_MENU_ITEMS.sendMessageCampaign.universalIdentifier,
          conditionalAvailabilityExpression: FLAGGED_SEND_CAMPAIGN_EXPRESSION,
        }),
        buildCommandMenuItem({
          universalIdentifier:
            STANDARD_COMMAND_MENU_ITEMS.addToMessageList.universalIdentifier,
          conditionalAvailabilityExpression: FLAGGED_ADD_TO_LIST_EXPRESSION,
        }),
      ]),
      direction: 'up',
      now: NOW,
    });

    expect(
      updates.map(
        ({ universalIdentifier, conditionalAvailabilityExpression }) => ({
          universalIdentifier,
          conditionalAvailabilityExpression,
        }),
      ),
    ).toEqual(
      [
        STANDARD_COMMAND_MENU_ITEMS.composeCampaign,
        STANDARD_COMMAND_MENU_ITEMS.sendMessageCampaign,
        STANDARD_COMMAND_MENU_ITEMS.addToMessageList,
      ].map(({ universalIdentifier, conditionalAvailabilityExpression }) => ({
        universalIdentifier,
        conditionalAvailabilityExpression,
      })),
    );
  });

  it('leaves items without the flag and items owned by another application untouched', () => {
    const updates = buildMessageCampaignFlagRemovalUpdates({
      flatCommandMenuItemMaps: buildMaps([
        buildCommandMenuItem({
          universalIdentifier:
            STANDARD_COMMAND_MENU_ITEMS.composeCampaign.universalIdentifier,
          conditionalAvailabilityExpression: null,
        }),
        buildCommandMenuItem({
          universalIdentifier:
            STANDARD_COMMAND_MENU_ITEMS.sendMessageCampaign.universalIdentifier,
          conditionalAvailabilityExpression: FLAGGED_SEND_CAMPAIGN_EXPRESSION,
          applicationUniversalIdentifier:
            '20202020-3333-4333-8333-333333333333',
        }),
      ]),
      direction: 'up',
      now: NOW,
    });

    expect(updates).toEqual([]);
  });

  it('puts the flag back on down only for items still on the shipped expression', () => {
    const updates = buildMessageCampaignFlagRemovalUpdates({
      flatCommandMenuItemMaps: buildMaps([
        buildCommandMenuItem({
          universalIdentifier:
            STANDARD_COMMAND_MENU_ITEMS.addToMessageList.universalIdentifier,
          conditionalAvailabilityExpression:
            STANDARD_COMMAND_MENU_ITEMS.addToMessageList
              .conditionalAvailabilityExpression,
        }),
        buildCommandMenuItem({
          universalIdentifier:
            STANDARD_COMMAND_MENU_ITEMS.sendMessageCampaign.universalIdentifier,
          conditionalAvailabilityExpression: 'numberOfSelectedRecords == 1',
        }),
      ]),
      direction: 'down',
      now: NOW,
    });

    expect(
      updates.map(
        ({ universalIdentifier, conditionalAvailabilityExpression }) => ({
          universalIdentifier,
          conditionalAvailabilityExpression,
        }),
      ),
    ).toEqual([
      {
        universalIdentifier:
          STANDARD_COMMAND_MENU_ITEMS.addToMessageList.universalIdentifier,
        conditionalAvailabilityExpression: FLAGGED_ADD_TO_LIST_EXPRESSION,
      },
    ]);
  });
});
