export default {
    "scalars": [
        1,
        4,
        6,
        7,
        10,
        12,
        14,
        17,
        24,
        26,
        29,
        32,
        34,
        41,
        53,
        61,
        71,
        77,
        89,
        93,
        94,
        96,
        101,
        106,
        112,
        117,
        123,
        126,
        127,
        128,
        129,
        137,
        139,
        153,
        157,
        159,
        161,
        206,
        207,
        234,
        238,
        239,
        241,
        251,
        257,
        261,
        265,
        268,
        275,
        290,
        292,
        303,
        310,
        311,
        312,
        323,
        325,
        340,
        341,
        342,
        343,
        344,
        345,
        347,
        348,
        349,
        352,
        353,
        355,
        356,
        359,
        361,
        365,
        369,
        378,
        385,
        386,
        387,
        390,
        394,
        395,
        400,
        404,
        427,
        429,
        430,
        433,
        438,
        450,
        452,
        456,
        461,
        481,
        493,
        494,
        496,
        520,
        522,
        524,
        586,
        606,
        613,
        615,
        619,
        630,
        636,
        637,
        639,
        640,
        642,
        643,
        644,
        647,
        648,
        653,
        655,
        658,
        663,
        664,
        665,
        668,
        669
    ],
    "types": {
        "ActivateWorkspaceInput": {
            "displayName": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "String": {},
        "AddQuerySubscriptionInput": {
            "eventStreamId": [
                1
            ],
            "operationSignature": [
                310
            ],
            "queryId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "Agent": {
            "applicationId": [
                520
            ],
            "createdAt": [
                207
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "id": [
                520
            ],
            "isCustom": [
                4
            ],
            "isSystem": [
                4
            ],
            "label": [
                1
            ],
            "modelConfiguration": [
                310
            ],
            "modelId": [
                1
            ],
            "name": [
                1
            ],
            "prompt": [
                1
            ],
            "responseFormat": [
                310
            ],
            "roleId": [
                520
            ],
            "triggers": [
                310
            ],
            "updatedAt": [
                207
            ],
            "__typename": [
                1
            ]
        },
        "Boolean": {},
        "AgentChatChannel": {
            "color": [
                1
            ],
            "icon": [
                1
            ],
            "id": [
                520
            ],
            "isAccessible": [
                4
            ],
            "isCustom": [
                4
            ],
            "name": [
                1
            ],
            "position": [
                6
            ],
            "roleIds": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "Float": {},
        "AgentChatChannelAssignmentFilter": {},
        "AgentChatChannelRole": {
            "canAccessAllAgentChatChannels": [
                4
            ],
            "icon": [
                1
            ],
            "id": [
                520
            ],
            "label": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AgentChatChannelSummary": {
            "channelId": [
                520
            ],
            "hasUnreadOpen": [
                4
            ],
            "openCount": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "Int": {},
        "AgentChatChannelThreadIds": {
            "endCursor": [
                1
            ],
            "hasNextPage": [
                4
            ],
            "threadIds": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "AgentChatChannelThreadStatus": {},
        "AgentChatEvent": {
            "event": [
                310
            ],
            "threadId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AgentChatInboxAction": {},
        "AgentChatOpenThreadsSummary": {
            "hasUnreadAssignedThread": [
                4
            ],
            "hasUnreadMentionThread": [
                4
            ],
            "hasUnreadOpenThread": [
                4
            ],
            "needsInputThreadCount": [
                10
            ],
            "openThreadCount": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "AgentChatThread": {
            "contextWindowTokens": [
                10
            ],
            "conversationSize": [
                10
            ],
            "createdAt": [
                207
            ],
            "deletedAt": [
                207
            ],
            "id": [
                17
            ],
            "title": [
                1
            ],
            "totalCacheReadTokens": [
                10
            ],
            "totalInputCredits": [
                6
            ],
            "totalInputTokens": [
                10
            ],
            "totalOutputCredits": [
                6
            ],
            "totalOutputTokens": [
                10
            ],
            "updatedAt": [
                207
            ],
            "__typename": [
                1
            ]
        },
        "ID": {},
        "AgentChatThreadParticipant": {
            "archivedAt": [
                207
            ],
            "id": [
                520
            ],
            "isSubscribed": [
                4
            ],
            "lastMentionedAt": [
                207
            ],
            "lastReadAt": [
                207
            ],
            "snoozedUntil": [
                207
            ],
            "threadId": [
                520
            ],
            "updatedAt": [
                207
            ],
            "__typename": [
                1
            ]
        },
        "AgentIdInput": {
            "id": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "AgentMessage": {
            "agentId": [
                520
            ],
            "createdAt": [
                207
            ],
            "id": [
                520
            ],
            "parts": [
                21
            ],
            "processedAt": [
                207
            ],
            "reactions": [
                22
            ],
            "role": [
                1
            ],
            "senderUserWorkspaceId": [
                520
            ],
            "senderWorkspaceMemberId": [
                520
            ],
            "status": [
                1
            ],
            "threadId": [
                520
            ],
            "turnId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "AgentMessagePart": {
            "createdAt": [
                207
            ],
            "errorMessage": [
                1
            ],
            "fileFilename": [
                1
            ],
            "fileId": [
                520
            ],
            "fileMediaType": [
                1
            ],
            "fileUrl": [
                1
            ],
            "id": [
                520
            ],
            "messageId": [
                520
            ],
            "orderIndex": [
                10
            ],
            "providerExecuted": [
                4
            ],
            "providerMetadata": [
                310
            ],
            "reasoningContent": [
                1
            ],
            "sourceDocumentFilename": [
                1
            ],
            "sourceDocumentMediaType": [
                1
            ],
            "sourceDocumentSourceId": [
                1
            ],
            "sourceDocumentTitle": [
                1
            ],
            "sourceUrlSourceId": [
                1
            ],
            "sourceUrlTitle": [
                1
            ],
            "sourceUrlUrl": [
                1
            ],
            "state": [
                1
            ],
            "textContent": [
                1
            ],
            "toolCallId": [
                1
            ],
            "toolInput": [
                310
            ],
            "toolName": [
                1
            ],
            "toolOutput": [
                310
            ],
            "type": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AgentMessageReactionSummary": {
            "agentIds": [
                520
            ],
            "emoji": [
                1
            ],
            "hasAssistantReacted": [
                4
            ],
            "workspaceMemberIds": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "AgentRun": {
            "createdAt": [
                207
            ],
            "creatorName": [
                1
            ],
            "creatorSource": [
                1
            ],
            "credits": [
                6
            ],
            "endedAt": [
                207
            ],
            "errorMessage": [
                1
            ],
            "id": [
                520
            ],
            "input": [
                1
            ],
            "inputTokens": [
                10
            ],
            "modelId": [
                1
            ],
            "outputTokens": [
                10
            ],
            "reply": [
                1
            ],
            "startedAt": [
                207
            ],
            "status": [
                24
            ],
            "threadId": [
                520
            ],
            "threadTitle": [
                1
            ],
            "toolNames": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AgentTurnStatus": {},
        "AggregateChartConfiguration": {
            "aggregateFieldMetadataId": [
                520
            ],
            "aggregateOperation": [
                26
            ],
            "configurationType": [
                647
            ],
            "description": [
                1
            ],
            "displayDataLabel": [
                4
            ],
            "filter": [
                310
            ],
            "firstDayOfTheWeek": [
                10
            ],
            "label": [
                1
            ],
            "numberFormat": [
                139
            ],
            "prefix": [
                1
            ],
            "ratioAggregateConfig": [
                422
            ],
            "suffix": [
                1
            ],
            "timezone": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AggregateOperations": {},
        "AiChatUsage": {
            "consumedValue": [
                96
            ],
            "kind": [
                1
            ],
            "limitValue": [
                96
            ],
            "periodEnd": [
                207
            ],
            "__typename": [
                1
            ]
        },
        "AiChatUserCreditsUsage": {
            "consumedValue": [
                96
            ],
            "limitValue": [
                96
            ],
            "periodEnd": [
                207
            ],
            "__typename": [
                1
            ]
        },
        "AiModelTier": {},
        "AiSystemPromptPreview": {
            "estimatedTokenCount": [
                10
            ],
            "sections": [
                31
            ],
            "__typename": [
                1
            ]
        },
        "AiSystemPromptSection": {
            "content": [
                1
            ],
            "estimatedTokenCount": [
                10
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AllMetadataName": {},
        "Analytics": {
            "success": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "AnalyticsType": {},
        "ApiConfig": {
            "mutationMaximumAffectedRecords": [
                6
            ],
            "__typename": [
                1
            ]
        },
        "ApiKey": {
            "createdAt": [
                207
            ],
            "expiresAt": [
                207
            ],
            "id": [
                520
            ],
            "name": [
                1
            ],
            "revokedAt": [
                207
            ],
            "role": [
                444
            ],
            "updatedAt": [
                207
            ],
            "__typename": [
                1
            ]
        },
        "ApiKeyForRole": {
            "expiresAt": [
                207
            ],
            "id": [
                520
            ],
            "name": [
                1
            ],
            "revokedAt": [
                207
            ],
            "__typename": [
                1
            ]
        },
        "ApiKeyToken": {
            "token": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AppConnection": {
            "accessToken": [
                1
            ],
            "authFailedAt": [
                1
            ],
            "authFailedReason": [
                1
            ],
            "externalAccountId": [
                1
            ],
            "handle": [
                1
            ],
            "id": [
                17
            ],
            "name": [
                1
            ],
            "providerName": [
                1
            ],
            "providerType": [
                1
            ],
            "scope": [
                157
            ],
            "scopes": [
                1
            ],
            "userWorkspaceId": [
                1
            ],
            "visibility": [
                1
            ],
            "workspaceMemberId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AppKeyValue": {
            "key": [
                1
            ],
            "scope": [
                41
            ],
            "value": [
                310
            ],
            "__typename": [
                1
            ]
        },
        "AppKeyValueScope": {},
        "AppMessageInput": {
            "externalId": [
                1
            ],
            "participants": [
                43
            ],
            "receivedAt": [
                207
            ],
            "subject": [
                1
            ],
            "text": [
                1
            ],
            "threadExternalId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AppMessageParticipantInput": {
            "displayName": [
                1
            ],
            "handle": [
                1
            ],
            "personId": [
                520
            ],
            "role": [
                349
            ],
            "workspaceMemberId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "Application": {
            "agents": [
                3
            ],
            "applicationRegistration": [
                73
            ],
            "applicationRegistrationId": [
                520
            ],
            "applicationVariables": [
                76
            ],
            "autoUpgrade": [
                4
            ],
            "availablePackages": [
                310
            ],
            "canBeUninstalled": [
                4
            ],
            "commandMenuItems": [
                152
            ],
            "createdAt": [
                207
            ],
            "defaultLogicFunctionRole": [
                444
            ],
            "defaultRoleId": [
                1
            ],
            "description": [
                1
            ],
            "frontComponents": [
                282
            ],
            "healthCheckLogicFunctionId": [
                520
            ],
            "id": [
                520
            ],
            "isUninstallBlockedByOtherWorkspaceInstallations": [
                4
            ],
            "logicFunctions": [
                322
            ],
            "logoFileId": [
                520
            ],
            "logoUrl": [
                1
            ],
            "name": [
                1
            ],
            "objects": [
                371
            ],
            "packageJsonChecksum": [
                1
            ],
            "packageJsonFileId": [
                520
            ],
            "settingsCustomTabFrontComponentId": [
                520
            ],
            "settingsMenuItems": [
                480
            ],
            "universalIdentifier": [
                1
            ],
            "version": [
                1
            ],
            "yarnLockChecksum": [
                1
            ],
            "yarnLockFileId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationAuthorization": {
            "applicationId": [
                520
            ],
            "applicationName": [
                1
            ],
            "applicationUniversalIdentifier": [
                1
            ],
            "createdAt": [
                207
            ],
            "id": [
                520
            ],
            "lastAuthorizedAt": [
                207
            ],
            "lastUsedAt": [
                207
            ],
            "scopes": [
                1
            ],
            "workspaceId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationCapabilityGrant": {
            "grantedCapabilities": [
                1
            ],
            "id": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationConnectedAccountDTO": {
            "applicationId": [
                520
            ],
            "archivedAt": [
                207
            ],
            "authFailedAt": [
                207
            ],
            "authFailedReason": [
                1
            ],
            "connectionParameters": [
                418
            ],
            "connectionProviderId": [
                520
            ],
            "createdAt": [
                207
            ],
            "handle": [
                1
            ],
            "handleAliases": [
                1
            ],
            "id": [
                520
            ],
            "isOwnedByCurrentUser": [
                4
            ],
            "lastCredentialsRefreshedAt": [
                207
            ],
            "lastSignedInAt": [
                207
            ],
            "name": [
                1
            ],
            "provider": [
                1
            ],
            "scope": [
                157
            ],
            "scopes": [
                1
            ],
            "updatedAt": [
                207
            ],
            "userWorkspaceId": [
                520
            ],
            "visibility": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationConnectionProvider": {
            "applicationId": [
                1
            ],
            "displayName": [
                1
            ],
            "id": [
                520
            ],
            "logoUrl": [
                1
            ],
            "name": [
                1
            ],
            "oauth": [
                49
            ],
            "scope": [
                161
            ],
            "type": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationConnectionProviderOAuthConfig": {
            "isClientCredentialsConfigured": [
                4
            ],
            "scopes": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationExport": {
            "application": [
                51
            ],
            "coverage": [
                52
            ],
            "files": [
                54
            ],
            "manifest": [
                310
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationExportApplication": {
            "displayName": [
                1
            ],
            "sourceType": [
                71
            ],
            "universalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationExportCoverageEntry": {
            "metadataName": [
                1
            ],
            "reason": [
                1
            ],
            "status": [
                53
            ],
            "universalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationExportCoverageStatus": {},
        "ApplicationExportFile": {
            "content": [
                1
            ],
            "folder": [
                1
            ],
            "path": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationFileCompletionError": {
            "fileId": [
                520
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationFileUploadError": {
            "fileFolder": [
                275
            ],
            "filePath": [
                1
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationFileUploadRequestInput": {
            "fileFolder": [
                275
            ],
            "filePath": [
                1
            ],
            "size": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationFileUploadTarget": {
            "contentType": [
                1
            ],
            "expiresAt": [
                207
            ],
            "fileFolder": [
                275
            ],
            "fileId": [
                520
            ],
            "filePath": [
                1
            ],
            "uploadUrl": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationHealthCheckAction": {
            "label": [
                1
            ],
            "location": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationHealthCheckResult": {
            "action": [
                59
            ],
            "description": [
                1
            ],
            "status": [
                61
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationHealthStatus": {},
        "ApplicationMonitoring": {
            "activity": [
                63
            ],
            "bucketSizeInSeconds": [
                10
            ],
            "creditUsage": [
                64
            ],
            "creditsUsed": [
                6
            ],
            "failedRunCount": [
                10
            ],
            "functions": [
                65
            ],
            "issues": [
                66
            ],
            "lifecycle": [
                67
            ],
            "lifecycleFailureCount": [
                10
            ],
            "lookbackInHours": [
                10
            ],
            "periodEnd": [
                207
            ],
            "periodStart": [
                207
            ],
            "rateLimitEventCount": [
                10
            ],
            "runCount": [
                10
            ],
            "versions": [
                68
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationMonitoringActivityBucket": {
            "bucketStart": [
                207
            ],
            "errorCount": [
                10
            ],
            "rateLimitedJobCount": [
                10
            ],
            "rateLimitedRequestCount": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationMonitoringCreditBucket": {
            "bucketStart": [
                207
            ],
            "creditsUsed": [
                6
            ],
            "operationType": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationMonitoringFunction": {
            "failedRunCount": [
                10
            ],
            "logicFunctionName": [
                1
            ],
            "p95DurationMs": [
                6
            ],
            "runCount": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationMonitoringIssue": {
            "affectedInstallCount": [
                10
            ],
            "errorCode": [
                1
            ],
            "eventCount": [
                10
            ],
            "lastSeenAt": [
                207
            ],
            "level": [
                1
            ],
            "logicFunctionName": [
                1
            ],
            "source": [
                1
            ],
            "versions": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationMonitoringLifecycleBucket": {
            "bucketStart": [
                207
            ],
            "failedCount": [
                10
            ],
            "installCount": [
                10
            ],
            "uninstallCount": [
                10
            ],
            "upgradeCount": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationMonitoringVersion": {
            "activeInstallCount": [
                10
            ],
            "failedRunCount": [
                10
            ],
            "runCount": [
                10
            ],
            "version": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationPreferences": {
            "applicationId": [
                520
            ],
            "connectionProviders": [
                48
            ],
            "settingsMenuItems": [
                480
            ],
            "variables": [
                618
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationRegistration": {
            "createdAt": [
                207
            ],
            "galleryImagesUrls": [
                1
            ],
            "id": [
                520
            ],
            "isConfigured": [
                4
            ],
            "isListed": [
                4
            ],
            "isPreInstalled": [
                4
            ],
            "isVetted": [
                4
            ],
            "latestAvailableVersion": [
                1
            ],
            "logoUrl": [
                1
            ],
            "name": [
                1
            ],
            "oAuthClientId": [
                1
            ],
            "oAuthRedirectUris": [
                1
            ],
            "oAuthScopes": [
                1
            ],
            "ownerWorkspaceId": [
                520
            ],
            "sourcePackage": [
                1
            ],
            "sourceType": [
                71
            ],
            "universalIdentifier": [
                1
            ],
            "updatedAt": [
                207
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationRegistrationSourceType": {},
        "ApplicationRegistrationStats": {
            "activeInstalls": [
                10
            ],
            "autoUpdateEnabled": [
                10
            ],
            "creditsUsedBreakdown": [
                204
            ],
            "mostInstalledVersion": [
                1
            ],
            "suspendedInstalls": [
                10
            ],
            "totalCreditsUsed": [
                6
            ],
            "versionDistribution": [
                628
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationRegistrationSummary": {
            "id": [
                520
            ],
            "latestAvailableVersion": [
                1
            ],
            "logoUrl": [
                1
            ],
            "sourceType": [
                71
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationRegistrationVariable": {
            "createdAt": [
                207
            ],
            "description": [
                1
            ],
            "id": [
                520
            ],
            "isDeprecated": [
                4
            ],
            "isFilled": [
                4
            ],
            "isRequired": [
                4
            ],
            "isSecret": [
                4
            ],
            "key": [
                1
            ],
            "options": [
                310
            ],
            "type": [
                1
            ],
            "updatedAt": [
                207
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationTokenPair": {
            "applicationAccessToken": [
                81
            ],
            "applicationRefreshToken": [
                81
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationVariable": {
            "description": [
                1
            ],
            "id": [
                520
            ],
            "isDeprecated": [
                4
            ],
            "isRequired": [
                4
            ],
            "isSecret": [
                4
            ],
            "key": [
                1
            ],
            "label": [
                1
            ],
            "options": [
                310
            ],
            "scope": [
                77
            ],
            "type": [
                1
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationVariableScope": {},
        "ApprovedAccessDomain": {
            "createdAt": [
                207
            ],
            "domain": [
                1
            ],
            "id": [
                520
            ],
            "isValidated": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "AuthBypassProviders": {
            "google": [
                4
            ],
            "microsoft": [
                4
            ],
            "password": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "AuthProviders": {
            "google": [
                4
            ],
            "magicLink": [
                4
            ],
            "microsoft": [
                4
            ],
            "password": [
                4
            ],
            "sso": [
                460
            ],
            "__typename": [
                1
            ]
        },
        "AuthToken": {
            "expiresAt": [
                207
            ],
            "token": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AuthTokenPair": {
            "accessOrWorkspaceAgnosticToken": [
                81
            ],
            "refreshToken": [
                81
            ],
            "__typename": [
                1
            ]
        },
        "AuthTokens": {
            "tokens": [
                82
            ],
            "__typename": [
                1
            ]
        },
        "AuthorizeApp": {
            "redirectUrl": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AutocompleteResult": {
            "placeId": [
                1
            ],
            "text": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AvailableWorkspace": {
            "displayName": [
                1
            ],
            "id": [
                520
            ],
            "inviteHash": [
                1
            ],
            "loginToken": [
                1
            ],
            "logo": [
                1
            ],
            "personalInviteToken": [
                1
            ],
            "sso": [
                459
            ],
            "workspaceUrls": [
                670
            ],
            "__typename": [
                1
            ]
        },
        "AvailableWorkspaces": {
            "availableWorkspacesForSignIn": [
                86
            ],
            "availableWorkspacesForSignUp": [
                86
            ],
            "__typename": [
                1
            ]
        },
        "AvailableWorkspacesAndAccessTokens": {
            "availableWorkspaces": [
                87
            ],
            "tokens": [
                82
            ],
            "__typename": [
                1
            ]
        },
        "AxisNameDisplay": {},
        "BarChartConfiguration": {
            "aggregateFieldMetadataId": [
                520
            ],
            "aggregateOperation": [
                26
            ],
            "axisNameDisplay": [
                89
            ],
            "color": [
                1
            ],
            "configurationType": [
                647
            ],
            "description": [
                1
            ],
            "displayDataLabel": [
                4
            ],
            "displayLegend": [
                4
            ],
            "filter": [
                310
            ],
            "firstDayOfTheWeek": [
                10
            ],
            "groupMode": [
                93
            ],
            "isCumulative": [
                4
            ],
            "layout": [
                94
            ],
            "numberFormat": [
                139
            ],
            "omitNullValues": [
                4
            ],
            "primaryAxisDateGranularity": [
                385
            ],
            "primaryAxisGroupByFieldMetadataId": [
                520
            ],
            "primaryAxisGroupBySubFieldName": [
                1
            ],
            "primaryAxisManualSortOrder": [
                1
            ],
            "primaryAxisOrderBy": [
                290
            ],
            "rangeMax": [
                6
            ],
            "rangeMin": [
                6
            ],
            "secondaryAxisGroupByDateGranularity": [
                385
            ],
            "secondaryAxisGroupByFieldMetadataId": [
                520
            ],
            "secondaryAxisGroupBySubFieldName": [
                1
            ],
            "secondaryAxisManualSortOrder": [
                1
            ],
            "secondaryAxisOrderBy": [
                290
            ],
            "splitMultiValueFields": [
                4
            ],
            "timezone": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "BarChartData": {
            "data": [
                310
            ],
            "formattedToRawLookup": [
                310
            ],
            "groupMode": [
                93
            ],
            "hasTooManyGroups": [
                4
            ],
            "indexBy": [
                1
            ],
            "keys": [
                1
            ],
            "layout": [
                94
            ],
            "series": [
                95
            ],
            "showDataLabels": [
                4
            ],
            "showLegend": [
                4
            ],
            "xAxisLabel": [
                1
            ],
            "yAxisLabel": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "BarChartDataInput": {
            "configuration": [
                310
            ],
            "objectMetadataId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "BarChartGroupMode": {},
        "BarChartLayout": {},
        "BarChartSeries": {
            "key": [
                1
            ],
            "label": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "BigInt": {},
        "Billing": {
            "billingUrl": [
                1
            ],
            "isBillingEnabled": [
                4
            ],
            "stripePublishableKey": [
                1
            ],
            "trialPeriods": [
                121
            ],
            "__typename": [
                1
            ]
        },
        "BillingCustomer": {
            "hasPaymentMethod": [
                4
            ],
            "id": [
                520
            ],
            "userCreditsFallback": [
                619
            ],
            "__typename": [
                1
            ]
        },
        "BillingEndTrialPeriod": {
            "billingPortalUrl": [
                1
            ],
            "billingSubscriptions": [
                116
            ],
            "currentBillingSubscription": [
                116
            ],
            "hasPaymentMethod": [
                4
            ],
            "status": [
                494
            ],
            "__typename": [
                1
            ]
        },
        "BillingEntitlement": {
            "key": [
                101
            ],
            "value": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "BillingEntitlementKey": {},
        "BillingLicensedProduct": {
            "description": [
                1
            ],
            "images": [
                1
            ],
            "metadata": [
                113
            ],
            "name": [
                1
            ],
            "prices": [
                107
            ],
            "__typename": [
                1
            ]
        },
        "BillingMeteredProduct": {
            "description": [
                1
            ],
            "images": [
                1
            ],
            "metadata": [
                113
            ],
            "name": [
                1
            ],
            "prices": [
                108
            ],
            "__typename": [
                1
            ]
        },
        "BillingPaymentIntent": {
            "clientSecret": [
                1
            ],
            "paymentIntentType": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "BillingPlan": {
            "baseProducts": [
                102
            ],
            "downgradePlanKeys": [
                106
            ],
            "isCheckoutDefault": [
                4
            ],
            "isSellable": [
                4
            ],
            "meteredProducts": [
                103
            ],
            "planKey": [
                106
            ],
            "resourceCreditProducts": [
                102
            ],
            "upgradePlanKeys": [
                106
            ],
            "__typename": [
                1
            ]
        },
        "BillingPlanKey": {},
        "BillingPriceLicensed": {
            "creditAmount": [
                6
            ],
            "isSellable": [
                4
            ],
            "priceUsageType": [
                123
            ],
            "recurringInterval": [
                493
            ],
            "stripePriceId": [
                1
            ],
            "unitAmount": [
                6
            ],
            "__typename": [
                1
            ]
        },
        "BillingPriceMetered": {
            "priceUsageType": [
                123
            ],
            "recurringInterval": [
                493
            ],
            "stripePriceId": [
                1
            ],
            "tiers": [
                109
            ],
            "__typename": [
                1
            ]
        },
        "BillingPriceTier": {
            "flatAmount": [
                6
            ],
            "unitAmount": [
                6
            ],
            "upTo": [
                6
            ],
            "__typename": [
                1
            ]
        },
        "BillingProduct": {
            "description": [
                1
            ],
            "images": [
                1
            ],
            "metadata": [
                113
            ],
            "name": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "BillingProductDTO": {
            "description": [
                1
            ],
            "images": [
                1
            ],
            "metadata": [
                113
            ],
            "name": [
                1
            ],
            "on_BillingLicensedProduct": [
                102
            ],
            "on_BillingMeteredProduct": [
                103
            ],
            "__typename": [
                1
            ]
        },
        "BillingProductKey": {},
        "BillingProductMetadata": {
            "isLegacy": [
                1
            ],
            "planKey": [
                106
            ],
            "priceUsageBased": [
                123
            ],
            "productKey": [
                112
            ],
            "__typename": [
                1
            ]
        },
        "BillingResourceCreditUsage": {
            "periodEnd": [
                207
            ],
            "periodStart": [
                207
            ],
            "productKey": [
                112
            ],
            "unitPriceCents": [
                6
            ],
            "userCreditsUsed": [
                6
            ],
            "workspaceCreditsExtraGranted": [
                6
            ],
            "workspaceCreditsGranted": [
                6
            ],
            "workspaceCreditsGrantedForSeats": [
                6
            ],
            "workspaceCreditsSeats": [
                10
            ],
            "workspaceCreditsTotalGranted": [
                6
            ],
            "workspaceCreditsUsed": [
                6
            ],
            "__typename": [
                1
            ]
        },
        "BillingSession": {
            "url": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "BillingSubscription": {
            "billingSubscriptionItems": [
                118
            ],
            "cancelAt": [
                207
            ],
            "collectionMethod": [
                117
            ],
            "currentPeriodEnd": [
                207
            ],
            "hasUserCredits": [
                4
            ],
            "id": [
                520
            ],
            "interval": [
                493
            ],
            "metadata": [
                310
            ],
            "phases": [
                119
            ],
            "status": [
                494
            ],
            "__typename": [
                1
            ]
        },
        "BillingSubscriptionCollectionMethod": {},
        "BillingSubscriptionItem": {
            "billingProduct": [
                111
            ],
            "creditAmount": [
                6
            ],
            "hasReachedCurrentPeriodCap": [
                4
            ],
            "id": [
                520
            ],
            "quantity": [
                6
            ],
            "stripePriceId": [
                1
            ],
            "unitAmount": [
                6
            ],
            "__typename": [
                1
            ]
        },
        "BillingSubscriptionSchedulePhase": {
            "end_date": [
                6
            ],
            "items": [
                120
            ],
            "start_date": [
                6
            ],
            "__typename": [
                1
            ]
        },
        "BillingSubscriptionSchedulePhaseItem": {
            "price": [
                1
            ],
            "quantity": [
                6
            ],
            "__typename": [
                1
            ]
        },
        "BillingTrialPeriod": {
            "duration": [
                6
            ],
            "isCreditCardRequired": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "BillingUpdate": {
            "billingSubscriptions": [
                116
            ],
            "currentBillingSubscription": [
                116
            ],
            "__typename": [
                1
            ]
        },
        "BillingUsageType": {},
        "BooleanFieldComparison": {
            "is": [
                4
            ],
            "isNot": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "CalendarChannel": {
            "connectedAccountId": [
                520
            ],
            "contactAutoCreationPolicy": [
                126
            ],
            "createdAt": [
                207
            ],
            "excludePrivateEvents": [
                4
            ],
            "handle": [
                1
            ],
            "id": [
                520
            ],
            "isContactAutoCreationEnabled": [
                4
            ],
            "isSyncEnabled": [
                4
            ],
            "syncStage": [
                127
            ],
            "syncStageStartedAt": [
                207
            ],
            "syncStatus": [
                128
            ],
            "syncedAt": [
                207
            ],
            "throttleFailureCount": [
                6
            ],
            "updatedAt": [
                207
            ],
            "visibility": [
                129
            ],
            "__typename": [
                1
            ]
        },
        "CalendarChannelContactAutoCreationPolicy": {},
        "CalendarChannelSyncStage": {},
        "CalendarChannelSyncStatus": {},
        "CalendarChannelVisibility": {},
        "CalendarConfiguration": {
            "configurationType": [
                647
            ],
            "__typename": [
                1
            ]
        },
        "CallRecordingSummaryConfiguration": {
            "configurationType": [
                647
            ],
            "__typename": [
                1
            ]
        },
        "CallRecordingTranscriptConfiguration": {
            "configurationType": [
                647
            ],
            "__typename": [
                1
            ]
        },
        "CampaignAudiencePreviewDTO": {
            "duplicateEmails": [
                10
            ],
            "globallyUnsubscribed": [
                10
            ],
            "hardSuppressed": [
                10
            ],
            "sendable": [
                10
            ],
            "topicUnsubscribed": [
                10
            ],
            "totalMembers": [
                10
            ],
            "trackingRefused": [
                10
            ],
            "withoutEmail": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "CancelMessageCampaignInput": {
            "campaignId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CancelMessageCampaignOutputDTO": {
            "campaignId": [
                1
            ],
            "canceledMessageCount": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "Captcha": {
            "provider": [
                137
            ],
            "siteKey": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CaptchaDriverType": {},
        "ChannelSyncSuccess": {
            "success": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "ChartNumberFormat": {},
        "ChatConfiguration": {
            "configurationType": [
                647
            ],
            "__typename": [
                1
            ]
        },
        "ChatStreamCatchupChunks": {
            "chunks": [
                310
            ],
            "error": [
                142
            ],
            "maxSeq": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "ChatStreamError": {
            "code": [
                1
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ChatThreadsConfiguration": {
            "configurationType": [
                647
            ],
            "__typename": [
                1
            ]
        },
        "CheckUserExist": {
            "availableWorkspacesCount": [
                6
            ],
            "exists": [
                4
            ],
            "isEmailVerified": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "ClaimableApplicationRegistration": {
            "author": [
                1
            ],
            "description": [
                1
            ],
            "id": [
                1
            ],
            "isOwned": [
                4
            ],
            "logoUrl": [
                1
            ],
            "name": [
                1
            ],
            "sourcePackage": [
                1
            ],
            "universalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ClientAiEvaluationModelConfig": {
            "description": [
                1
            ],
            "inputCostPerMillionTokens": [
                6
            ],
            "isAvailable": [
                4
            ],
            "isDeprecated": [
                4
            ],
            "label": [
                1
            ],
            "maxCriteriaPerQuestion": [
                6
            ],
            "maxScoreLevels": [
                6
            ],
            "medianLatencyMs": [
                6
            ],
            "modelId": [
                1
            ],
            "outputCostPerMillionTokens": [
                6
            ],
            "providerLabel": [
                1
            ],
            "supportedQuestionTypes": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ClientAiModelConfig": {
            "contextWindowTokens": [
                6
            ],
            "costPerTask": [
                6
            ],
            "dataResidency": [
                1
            ],
            "effort": [
                1
            ],
            "efforts": [
                1
            ],
            "inputCostPerMillionTokens": [
                6
            ],
            "intelligenceIndex": [
                6
            ],
            "isBenchmarkInherited": [
                4
            ],
            "isDeprecated": [
                4
            ],
            "label": [
                1
            ],
            "maxOutputTokens": [
                6
            ],
            "modelFamily": [
                365
            ],
            "modelFamilyLabel": [
                1
            ],
            "modelId": [
                1
            ],
            "nativeCapabilities": [
                367
            ],
            "outputCostPerMillionTokens": [
                6
            ],
            "outputTokensPerSecond": [
                6
            ],
            "providerLabel": [
                1
            ],
            "providerName": [
                1
            ],
            "sdkPackage": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ClientAiModelTierConfig": {
            "modelId": [
                1
            ],
            "tier": [
                29
            ],
            "__typename": [
                1
            ]
        },
        "ClientConfig": {
            "aiEvaluationModels": [
                146
            ],
            "aiModelTiers": [
                148
            ],
            "aiModels": [
                147
            ],
            "allowRequestsToTwentyIcons": [
                4
            ],
            "analyticsEnabled": [
                4
            ],
            "api": [
                35
            ],
            "appVersion": [
                1
            ],
            "authProviders": [
                80
            ],
            "billing": [
                97
            ],
            "calendarBookingPageId": [
                1
            ],
            "canManageFeatureFlags": [
                4
            ],
            "captcha": [
                136
            ],
            "defaultSubdomain": [
                1
            ],
            "enterpriseInstanceType": [
                1
            ],
            "frontDomain": [
                1
            ],
            "isAttachmentPreviewEnabled": [
                4
            ],
            "isBookCallOnboardingStepEnabled": [
                4
            ],
            "isClickHouseConfigured": [
                4
            ],
            "isCloudflareIntegrationEnabled": [
                4
            ],
            "isCompanyEnrichmentEnabled": [
                4
            ],
            "isConfigVariablesInDbEnabled": [
                4
            ],
            "isCookieSessionEnabled": [
                4
            ],
            "isEmailVerificationRequired": [
                4
            ],
            "isEmailingDomainInDemoMode": [
                4
            ],
            "isGoogleCalendarEnabled": [
                4
            ],
            "isGoogleMessagingEnabled": [
                4
            ],
            "isImapSmtpCaldavEnabled": [
                4
            ],
            "isMicrosoftCalendarEnabled": [
                4
            ],
            "isMicrosoftMessagingEnabled": [
                4
            ],
            "isMultiWorkspaceEnabled": [
                4
            ],
            "isOnboardingAiChatEnabled": [
                4
            ],
            "isWorkspaceSchemaDDLLocked": [
                4
            ],
            "maintenance": [
                150
            ],
            "publicFeatureFlags": [
                416
            ],
            "publicFunctionDomain": [
                1
            ],
            "sentry": [
                478
            ],
            "serverUrl": [
                1
            ],
            "signInPrefilled": [
                4
            ],
            "support": [
                495
            ],
            "__typename": [
                1
            ]
        },
        "ClientConfigMaintenanceMode": {
            "endAt": [
                207
            ],
            "link": [
                1
            ],
            "startAt": [
                207
            ],
            "__typename": [
                1
            ]
        },
        "CollectionHash": {
            "collectionName": [
                32
            ],
            "hash": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CommandMenuItem": {
            "applicationId": [
                520
            ],
            "availabilityObjectMetadataId": [
                520
            ],
            "availabilityType": [
                153
            ],
            "conditionalAvailabilityExpression": [
                1
            ],
            "conditionalPinnedExpression": [
                1
            ],
            "coreWorkflowVersionId": [
                520
            ],
            "createdAt": [
                207
            ],
            "engineComponentKey": [
                241
            ],
            "frontComponent": [
                282
            ],
            "frontComponentId": [
                520
            ],
            "hotKeys": [
                1
            ],
            "icon": [
                1
            ],
            "id": [
                520
            ],
            "isActive": [
                4
            ],
            "isPinned": [
                4
            ],
            "label": [
                1
            ],
            "navigationTargetObjectMetadataId": [
                520
            ],
            "pageLayoutId": [
                520
            ],
            "payload": [
                154
            ],
            "position": [
                6
            ],
            "shortLabel": [
                1
            ],
            "universalIdentifier": [
                520
            ],
            "updatedAt": [
                207
            ],
            "workflowVersionId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "CommandMenuItemAvailabilityType": {},
        "CommandMenuItemPayload": {
            "on_ObjectMetadataCommandMenuItemPayload": [
                377
            ],
            "on_PathCommandMenuItemPayload": [
                402
            ],
            "__typename": [
                1
            ]
        },
        "CompleteApplicationFileUploadsResult": {
            "errors": [
                55
            ],
            "files": [
                273
            ],
            "__typename": [
                1
            ]
        },
        "ConnectedAccountPublicDTO": {
            "applicationId": [
                520
            ],
            "archivedAt": [
                207
            ],
            "authFailedAt": [
                207
            ],
            "authFailedReason": [
                1
            ],
            "connectionParameters": [
                418
            ],
            "connectionProviderId": [
                520
            ],
            "createdAt": [
                207
            ],
            "handle": [
                1
            ],
            "handleAliases": [
                1
            ],
            "id": [
                520
            ],
            "lastCredentialsRefreshedAt": [
                207
            ],
            "lastSignedInAt": [
                207
            ],
            "name": [
                1
            ],
            "provider": [
                1
            ],
            "scope": [
                157
            ],
            "scopes": [
                1
            ],
            "updatedAt": [
                207
            ],
            "userWorkspaceId": [
                520
            ],
            "visibility": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ConnectedAccountScope": {},
        "ConnectedImapSmtpCaldavAccount": {
            "connectionParameters": [
                296
            ],
            "handle": [
                1
            ],
            "id": [
                520
            ],
            "provider": [
                1
            ],
            "userWorkspaceId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "ConnectionCursor": {},
        "ConnectionParametersInput": {
            "connectionSecurity": [
                234
            ],
            "host": [
                1
            ],
            "password": [
                1
            ],
            "port": [
                6
            ],
            "username": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ConnectionProviderScope": {},
        "CreateAgentChatChannelInput": {
            "color": [
                1
            ],
            "icon": [
                1
            ],
            "name": [
                1
            ],
            "roleIds": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "CreateAgentInput": {
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "label": [
                1
            ],
            "modelConfiguration": [
                310
            ],
            "modelId": [
                1
            ],
            "name": [
                1
            ],
            "prompt": [
                1
            ],
            "responseFormat": [
                310
            ],
            "roleId": [
                520
            ],
            "triggers": [
                310
            ],
            "__typename": [
                1
            ]
        },
        "CreateApiKeyInput": {
            "expiresAt": [
                1
            ],
            "name": [
                1
            ],
            "revokedAt": [
                1
            ],
            "roleId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "CreateAppMessageChannelInput": {
            "connectedAccountId": [
                520
            ],
            "displayName": [
                1
            ],
            "handle": [
                1
            ],
            "messagingProviderUniversalIdentifier": [
                520
            ],
            "participantHandleFieldUniversalIdentifier": [
                520
            ],
            "visibility": [
                345
            ],
            "__typename": [
                1
            ]
        },
        "CreateApplicationFileUploadsResult": {
            "errors": [
                56
            ],
            "targets": [
                58
            ],
            "__typename": [
                1
            ]
        },
        "CreateApplicationRegistration": {
            "applicationRegistration": [
                70
            ],
            "clientSecret": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateApplicationRegistrationInput": {
            "name": [
                1
            ],
            "oAuthRedirectUris": [
                1
            ],
            "oAuthScopes": [
                1
            ],
            "universalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateApprovedAccessDomainInput": {
            "domain": [
                1
            ],
            "email": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateCalendarEventInput": {
            "addConferencing": [
                4
            ],
            "attendees": [
                1
            ],
            "connectedAccountId": [
                1
            ],
            "description": [
                1
            ],
            "endsAt": [
                1
            ],
            "isFullDay": [
                4
            ],
            "location": [
                1
            ],
            "sendInvitations": [
                4
            ],
            "startsAt": [
                1
            ],
            "timeZone": [
                1
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateCalendarEventOutput": {
            "calendarEventId": [
                1
            ],
            "conferenceLink": [
                1
            ],
            "error": [
                1
            ],
            "iCalUid": [
                1
            ],
            "success": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "CreateCommandMenuItemInput": {
            "availabilityObjectMetadataId": [
                520
            ],
            "availabilityType": [
                153
            ],
            "conditionalAvailabilityExpression": [
                1
            ],
            "conditionalPinnedExpression": [
                1
            ],
            "coreWorkflowVersionId": [
                520
            ],
            "engineComponentKey": [
                241
            ],
            "frontComponentId": [
                520
            ],
            "hotKeys": [
                1
            ],
            "icon": [
                1
            ],
            "isPinned": [
                4
            ],
            "label": [
                1
            ],
            "navigationTargetObjectMetadataId": [
                520
            ],
            "pageLayoutId": [
                520
            ],
            "payload": [
                310
            ],
            "position": [
                6
            ],
            "shortLabel": [
                1
            ],
            "workflowVersionId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "CreateEmailGroupChannelInput": {
            "displayName": [
                1
            ],
            "handle": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateEmailGroupChannelOutput": {
            "forwardingAddress": [
                1
            ],
            "messageChannel": [
                339
            ],
            "__typename": [
                1
            ]
        },
        "CreateEmailingDomainInput": {
            "domain": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateFieldInput": {
            "defaultValue": [
                310
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "isActive": [
                4
            ],
            "isAuditLogged": [
                4
            ],
            "isLabelSyncedWithName": [
                4
            ],
            "isNullable": [
                4
            ],
            "isRemoteCreation": [
                4
            ],
            "isSearchable": [
                4
            ],
            "isSystem": [
                4
            ],
            "isUIEditable": [
                4
            ],
            "isUIReadOnly": [
                4
            ],
            "isUnique": [
                4
            ],
            "label": [
                1
            ],
            "morphRelationsCreationPayload": [
                310
            ],
            "name": [
                1
            ],
            "objectMetadataId": [
                520
            ],
            "options": [
                310
            ],
            "relationCreationPayload": [
                310
            ],
            "settings": [
                310
            ],
            "type": [
                268
            ],
            "__typename": [
                1
            ]
        },
        "CreateFrontComponentInput": {
            "builtComponentChecksum": [
                1
            ],
            "builtComponentPath": [
                1
            ],
            "componentName": [
                1
            ],
            "description": [
                1
            ],
            "id": [
                520
            ],
            "name": [
                1
            ],
            "sourceComponentPath": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateIndexFieldInput": {
            "fieldMetadataId": [
                520
            ],
            "subFieldName": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateIndexInput": {
            "fields": [
                178
            ],
            "indexType": [
                303
            ],
            "objectMetadataId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "CreateLogicFunctionFromSourceInput": {
            "cronTriggerSettings": [
                310
            ],
            "databaseEventTriggerSettings": [
                310
            ],
            "description": [
                1
            ],
            "httpRouteTriggerSettings": [
                310
            ],
            "id": [
                520
            ],
            "name": [
                1
            ],
            "serverRouteTriggerSettings": [
                310
            ],
            "source": [
                310
            ],
            "timeoutSeconds": [
                6
            ],
            "toolTriggerSettings": [
                310
            ],
            "universalIdentifier": [
                520
            ],
            "workflowActionTriggerSettings": [
                310
            ],
            "__typename": [
                1
            ]
        },
        "CreateMessageSuppressionInput": {
            "emailAddress": [
                1
            ],
            "unsubscribeTopicId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "CreateNavigationMenuItemInput": {
            "agentChatChannelId": [
                520
            ],
            "color": [
                1
            ],
            "folderId": [
                520
            ],
            "icon": [
                1
            ],
            "id": [
                520
            ],
            "link": [
                1
            ],
            "name": [
                1
            ],
            "pageLayoutId": [
                520
            ],
            "position": [
                6
            ],
            "targetObjectMetadataId": [
                520
            ],
            "targetRecordId": [
                520
            ],
            "type": [
                369
            ],
            "userWorkspaceId": [
                520
            ],
            "viewId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "CreateObjectInput": {
            "color": [
                1
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "isLabelSyncedWithName": [
                4
            ],
            "isRemote": [
                4
            ],
            "labelPlural": [
                1
            ],
            "labelSingular": [
                1
            ],
            "namePlural": [
                1
            ],
            "nameSingular": [
                1
            ],
            "primaryKeyColumnType": [
                1
            ],
            "primaryKeyFieldMetadataSettings": [
                310
            ],
            "shortcut": [
                1
            ],
            "skipNameField": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "CreateOneFieldMetadataInput": {
            "field": [
                176
            ],
            "__typename": [
                1
            ]
        },
        "CreateOneIndexInput": {
            "index": [
                179
            ],
            "__typename": [
                1
            ]
        },
        "CreateOneObjectInput": {
            "object": [
                183
            ],
            "__typename": [
                1
            ]
        },
        "CreatePageLayoutInput": {
            "name": [
                1
            ],
            "objectMetadataId": [
                520
            ],
            "type": [
                395
            ],
            "__typename": [
                1
            ]
        },
        "CreatePageLayoutTabInput": {
            "layoutMode": [
                394
            ],
            "pageLayoutId": [
                520
            ],
            "position": [
                6
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreatePageLayoutWidgetInput": {
            "configuration": [
                310
            ],
            "objectMetadataId": [
                520
            ],
            "pageLayoutTabId": [
                520
            ],
            "position": [
                310
            ],
            "title": [
                1
            ],
            "type": [
                648
            ],
            "__typename": [
                1
            ]
        },
        "CreateRecordExportInput": {
            "fieldMetadataIds": [
                520
            ],
            "filter": [
                310
            ],
            "objectMetadataId": [
                520
            ],
            "orderBy": [
                310
            ],
            "__typename": [
                1
            ]
        },
        "CreateRoleInput": {
            "canAccessAllAgentChatChannels": [
                4
            ],
            "canAccessAllTools": [
                4
            ],
            "canBeAssignedToAgents": [
                4
            ],
            "canBeAssignedToApiKeys": [
                4
            ],
            "canBeAssignedToUsers": [
                4
            ],
            "canDestroyAllObjectRecords": [
                4
            ],
            "canReadAllObjectRecords": [
                4
            ],
            "canSoftDeleteAllObjectRecords": [
                4
            ],
            "canUpdateAllObjectRecords": [
                4
            ],
            "canUpdateAllSettings": [
                4
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "id": [
                1
            ],
            "label": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateSkillInput": {
            "content": [
                1
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "id": [
                520
            ],
            "label": [
                1
            ],
            "name": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateUnsubscribeTopicInput": {
            "description": [
                1
            ],
            "name": [
                1
            ],
            "visibility": [
                524
            ],
            "__typename": [
                1
            ]
        },
        "CreateUsageLimitInput": {
            "burstValue": [
                96
            ],
            "limitKind": [
                1
            ],
            "limitValue": [
                96
            ],
            "operationType": [
                606
            ],
            "periodCount": [
                10
            ],
            "periodUnit": [
                1
            ],
            "resourceType": [
                613
            ],
            "spenderId": [
                1
            ],
            "spenderType": [
                1
            ],
            "unit": [
                615
            ],
            "__typename": [
                1
            ]
        },
        "CreateValidationRuleInput": {
            "description": [
                1
            ],
            "errorFieldMetadataId": [
                520
            ],
            "expression": [
                1
            ],
            "icon": [
                1
            ],
            "isActive": [
                4
            ],
            "message": [
                1
            ],
            "name": [
                1
            ],
            "objectMetadataId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "CreateViewFieldGroupInput": {
            "id": [
                520
            ],
            "isVisible": [
                4
            ],
            "name": [
                1
            ],
            "position": [
                6
            ],
            "viewId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "CreateViewFieldInput": {
            "aggregateOperation": [
                26
            ],
            "fieldMetadataId": [
                520
            ],
            "id": [
                520
            ],
            "isVisible": [
                4
            ],
            "position": [
                6
            ],
            "size": [
                6
            ],
            "viewFieldGroupId": [
                520
            ],
            "viewId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "CreateViewFilterGroupInput": {
            "id": [
                520
            ],
            "logicalOperator": [
                636
            ],
            "parentViewFilterGroupId": [
                520
            ],
            "positionInViewFilterGroup": [
                6
            ],
            "viewId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "CreateViewFilterInput": {
            "fieldMetadataId": [
                520
            ],
            "id": [
                520
            ],
            "operand": [
                637
            ],
            "positionInViewFilterGroup": [
                6
            ],
            "relationTargetFieldMetadataId": [
                520
            ],
            "subFieldName": [
                1
            ],
            "value": [
                310
            ],
            "viewFilterGroupId": [
                520
            ],
            "viewId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "CreateViewGroupInput": {
            "fieldValue": [
                1
            ],
            "id": [
                520
            ],
            "isVisible": [
                4
            ],
            "position": [
                6
            ],
            "viewId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "CreateViewInput": {
            "anyFieldFilterValue": [
                1
            ],
            "calendarEndFieldMetadataId": [
                520
            ],
            "calendarFieldMetadataId": [
                520
            ],
            "calendarLayout": [
                630
            ],
            "groupLoadLimit": [
                10
            ],
            "icon": [
                1
            ],
            "id": [
                520
            ],
            "isCompact": [
                4
            ],
            "kanbanAggregateOperation": [
                26
            ],
            "kanbanAggregateOperationFieldMetadataId": [
                520
            ],
            "kanbanColumnWidth": [
                10
            ],
            "key": [
                639
            ],
            "mainGroupByFieldMetadataId": [
                520
            ],
            "name": [
                1
            ],
            "objectMetadataId": [
                520
            ],
            "openRecordIn": [
                640
            ],
            "position": [
                6
            ],
            "shouldHideEmptyGroups": [
                4
            ],
            "type": [
                643
            ],
            "visibility": [
                644
            ],
            "__typename": [
                1
            ]
        },
        "CreateViewSortInput": {
            "direction": [
                642
            ],
            "fieldMetadataId": [
                520
            ],
            "id": [
                520
            ],
            "subFieldName": [
                1
            ],
            "viewId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "CreateWebhookInput": {
            "description": [
                1
            ],
            "id": [
                520
            ],
            "operations": [
                1
            ],
            "secret": [
                1
            ],
            "targetUrl": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreditUsedItem": {
            "creditsUsed": [
                6
            ],
            "label": [
                1
            ],
            "operation": [
                606
            ],
            "resource": [
                613
            ],
            "__typename": [
                1
            ]
        },
        "CursorPaging": {
            "after": [
                159
            ],
            "before": [
                159
            ],
            "first": [
                10
            ],
            "last": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "DatabaseEventAction": {},
        "DateTime": {},
        "DeleteApprovedAccessDomainInput": {
            "id": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "DeleteOneFieldInput": {
            "id": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "DeleteOneIndexInput": {
            "id": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "DeleteOneObjectInput": {
            "id": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "DeleteSso": {
            "identityProviderId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "DeleteSsoInput": {
            "identityProviderId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "DeleteTwoFactorAuthenticationMethod": {
            "success": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "DeleteViewFieldGroupInput": {
            "id": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "DeleteViewFieldInput": {
            "id": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "DeleteViewFilterInput": {
            "id": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "DeleteViewGroupInput": {
            "id": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "DeleteViewSortInput": {
            "id": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "DeletedWorkspaceMember": {
            "avatarUrl": [
                1
            ],
            "id": [
                520
            ],
            "name": [
                285
            ],
            "userEmail": [
                1
            ],
            "userWorkspaceId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "DestroyViewFieldGroupInput": {
            "id": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "DestroyViewFieldInput": {
            "id": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "DestroyViewFilterInput": {
            "id": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "DestroyViewGroupInput": {
            "id": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "DestroyViewSortInput": {
            "id": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "DevelopmentApplication": {
            "id": [
                1
            ],
            "universalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "DomainRecord": {
            "key": [
                1
            ],
            "status": [
                1
            ],
            "type": [
                1
            ],
            "validationType": [
                1
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "DomainValidRecords": {
            "domain": [
                1
            ],
            "id": [
                520
            ],
            "isCustomDomainEnabled": [
                4
            ],
            "records": [
                227
            ],
            "__typename": [
                1
            ]
        },
        "DuplicatedDashboard": {
            "createdAt": [
                1
            ],
            "id": [
                520
            ],
            "pageLayoutId": [
                520
            ],
            "position": [
                6
            ],
            "title": [
                1
            ],
            "updatedAt": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "DuplicatedMessageList": {
            "createdAt": [
                1
            ],
            "description": [
                1
            ],
            "id": [
                520
            ],
            "memberCount": [
                6
            ],
            "name": [
                1
            ],
            "position": [
                6
            ],
            "updatedAt": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "EditSso": {
            "id": [
                520
            ],
            "issuer": [
                1
            ],
            "name": [
                1
            ],
            "status": [
                461
            ],
            "type": [
                292
            ],
            "__typename": [
                1
            ]
        },
        "EditSsoInput": {
            "id": [
                520
            ],
            "status": [
                461
            ],
            "__typename": [
                1
            ]
        },
        "EmailAccountConnectionParameters": {
            "CALDAV": [
                160
            ],
            "IMAP": [
                160
            ],
            "SMTP": [
                160
            ],
            "name": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "EmailConnectionSecurity": {},
        "EmailPasswordResetLink": {
            "success": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "EmailThreadConfiguration": {
            "configurationType": [
                647
            ],
            "__typename": [
                1
            ]
        },
        "EmailingDomain": {
            "createdAt": [
                207
            ],
            "domain": [
                1
            ],
            "id": [
                520
            ],
            "status": [
                238
            ],
            "tenantStatus": [
                239
            ],
            "unsubscribeHostnameStatus": [
                522
            ],
            "updatedAt": [
                207
            ],
            "verificationRecords": [
                625
            ],
            "verifiedAt": [
                207
            ],
            "__typename": [
                1
            ]
        },
        "EmailingDomainStatus": {},
        "EmailingDomainTenantStatus": {},
        "EmailsConfiguration": {
            "configurationType": [
                647
            ],
            "__typename": [
                1
            ]
        },
        "EngineComponentKey": {},
        "EnqueueJobInput": {
            "delayMs": [
                10
            ],
            "jobId": [
                1
            ],
            "logicFunctionUniversalIdentifier": [
                1
            ],
            "payload": [
                310
            ],
            "retryLimit": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "EnqueueJobItemInput": {
            "jobId": [
                1
            ],
            "payload": [
                310
            ],
            "__typename": [
                1
            ]
        },
        "EnqueueJobResult": {
            "enqueued": [
                4
            ],
            "jobId": [
                1
            ],
            "logicFunctionUniversalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "EnqueueJobsInput": {
            "delayMs": [
                10
            ],
            "jobs": [
                243
            ],
            "logicFunctionUniversalIdentifier": [
                1
            ],
            "payloads": [
                310
            ],
            "retryLimit": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "EnqueueJobsResult": {
            "enqueued": [
                4
            ],
            "enqueuedJobsCount": [
                10
            ],
            "jobIds": [
                1
            ],
            "logicFunctionUniversalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseLicenseInfoDTO": {
            "expiresAt": [
                207
            ],
            "isValid": [
                4
            ],
            "licensee": [
                1
            ],
            "subscriptionId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseSubscriptionStatusDTO": {
            "cancelAt": [
                207
            ],
            "currentPeriodEnd": [
                207
            ],
            "expiresAt": [
                207
            ],
            "isCancellationScheduled": [
                4
            ],
            "licensee": [
                1
            ],
            "status": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "EventLogDateRangeInput": {
            "end": [
                207
            ],
            "start": [
                207
            ],
            "__typename": [
                1
            ]
        },
        "EventLogFieldFilterInput": {
            "field": [
                1
            ],
            "operand": [
                251
            ],
            "values": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "EventLogFilterOperand": {},
        "EventLogFiltersInput": {
            "dateRange": [
                249
            ],
            "eventType": [
                1
            ],
            "fieldFilters": [
                250
            ],
            "objectMetadataId": [
                1
            ],
            "recordId": [
                1
            ],
            "userWorkspaceId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "EventLogPageInfo": {
            "endCursor": [
                1
            ],
            "hasNextPage": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "EventLogQueryInput": {
            "after": [
                1
            ],
            "filters": [
                252
            ],
            "first": [
                10
            ],
            "table": [
                257
            ],
            "__typename": [
                1
            ]
        },
        "EventLogQueryResult": {
            "pageInfo": [
                253
            ],
            "records": [
                256
            ],
            "totalCount": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "EventLogRecord": {
            "event": [
                1
            ],
            "isCustom": [
                4
            ],
            "objectMetadataId": [
                1
            ],
            "properties": [
                310
            ],
            "recordId": [
                1
            ],
            "timestamp": [
                207
            ],
            "userId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "EventLogTable": {},
        "EventSubscription": {
            "eventStreamId": [
                1
            ],
            "metadataEvents": [
                354
            ],
            "objectRecordEventsWithQueryIds": [
                384
            ],
            "queueJobEvents": [
                313
            ],
            "__typename": [
                1
            ]
        },
        "ExecuteOneLogicFunctionInput": {
            "id": [
                520
            ],
            "payload": [
                310
            ],
            "__typename": [
                1
            ]
        },
        "FeatureFlag": {
            "key": [
                261
            ],
            "value": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "FeatureFlagKey": {},
        "Field": {
            "applicationId": [
                520
            ],
            "createdAt": [
                207
            ],
            "defaultValue": [
                310
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "id": [
                520
            ],
            "isActive": [
                4
            ],
            "isAuditLogged": [
                4
            ],
            "isLabelSyncedWithName": [
                4
            ],
            "isNullable": [
                4
            ],
            "isSearchable": [
                4
            ],
            "isSystem": [
                4
            ],
            "isUIEditable": [
                4
            ],
            "isUIReadOnly": [
                4
            ],
            "isUnique": [
                4
            ],
            "label": [
                1
            ],
            "morphId": [
                520
            ],
            "morphRelations": [
                437
            ],
            "name": [
                1
            ],
            "object": [
                371
            ],
            "objectMetadataId": [
                520
            ],
            "options": [
                310
            ],
            "relation": [
                437
            ],
            "settings": [
                310
            ],
            "type": [
                268
            ],
            "universalIdentifier": [
                1
            ],
            "updatedAt": [
                207
            ],
            "writability": [
                361
            ],
            "__typename": [
                1
            ]
        },
        "FieldConfiguration": {
            "configurationType": [
                647
            ],
            "fieldDisplayMode": [
                265
            ],
            "fieldMetadataId": [
                1
            ],
            "isUIEditable": [
                4
            ],
            "nestedRelationFieldMetadataId": [
                1
            ],
            "viewId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "FieldConnection": {
            "edges": [
                266
            ],
            "pageInfo": [
                391
            ],
            "__typename": [
                1
            ]
        },
        "FieldDisplayMode": {},
        "FieldEdge": {
            "cursor": [
                159
            ],
            "node": [
                262
            ],
            "__typename": [
                1
            ]
        },
        "FieldFilter": {
            "and": [
                267
            ],
            "id": [
                521
            ],
            "isActive": [
                124
            ],
            "isSystem": [
                124
            ],
            "isUIEditable": [
                124
            ],
            "isUIReadOnly": [
                124
            ],
            "objectMetadataId": [
                521
            ],
            "or": [
                267
            ],
            "__typename": [
                1
            ]
        },
        "FieldMetadataType": {},
        "FieldPermission": {
            "canReadFieldValue": [
                4
            ],
            "canUpdateFieldValue": [
                4
            ],
            "fieldMetadataId": [
                520
            ],
            "id": [
                520
            ],
            "objectMetadataId": [
                520
            ],
            "roleId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "FieldPermissionInput": {
            "canReadFieldValue": [
                4
            ],
            "canUpdateFieldValue": [
                4
            ],
            "fieldMetadataId": [
                520
            ],
            "objectMetadataId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "FieldRichTextConfiguration": {
            "configurationType": [
                647
            ],
            "__typename": [
                1
            ]
        },
        "FieldsConfiguration": {
            "configurationType": [
                647
            ],
            "newFieldDefaultVisibility": [
                4
            ],
            "shouldAllowUserToSeeHiddenFields": [
                4
            ],
            "viewId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "File": {
            "createdAt": [
                207
            ],
            "id": [
                520
            ],
            "path": [
                1
            ],
            "size": [
                6
            ],
            "__typename": [
                1
            ]
        },
        "FileAttachmentInput": {
            "filename": [
                1
            ],
            "id": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "FileFolder": {},
        "FileUploadTarget": {
            "contentType": [
                1
            ],
            "expiresAt": [
                207
            ],
            "fileId": [
                520
            ],
            "uploadUrl": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "FileWithSignedUrl": {
            "createdAt": [
                207
            ],
            "id": [
                520
            ],
            "path": [
                1
            ],
            "size": [
                6
            ],
            "url": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "FilesConfiguration": {
            "configurationType": [
                647
            ],
            "__typename": [
                1
            ]
        },
        "FindAvailableSSOIDP": {
            "id": [
                520
            ],
            "issuer": [
                1
            ],
            "name": [
                1
            ],
            "status": [
                461
            ],
            "type": [
                292
            ],
            "workspace": [
                667
            ],
            "__typename": [
                1
            ]
        },
        "FindMessageSuppressionsInput": {
            "limit": [
                10
            ],
            "offset": [
                10
            ],
            "reason": [
                352
            ],
            "searchTerm": [
                1
            ],
            "unsubscribeTopicId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "FormFieldConfiguration": {
            "configurationType": [
                647
            ],
            "fieldMetadataId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "FrontComponent": {
            "applicationGrantedCapabilities": [
                1
            ],
            "applicationId": [
                520
            ],
            "applicationName": [
                1
            ],
            "applicationTokenPair": [
                75
            ],
            "applicationVariables": [
                310
            ],
            "builtComponentChecksum": [
                1
            ],
            "builtComponentPath": [
                1
            ],
            "componentName": [
                1
            ],
            "createdAt": [
                207
            ],
            "description": [
                1
            ],
            "frontComponentSharedDependenciesChecksum": [
                1
            ],
            "id": [
                520
            ],
            "isHeadless": [
                4
            ],
            "name": [
                1
            ],
            "sourceComponentPath": [
                1
            ],
            "universalIdentifier": [
                520
            ],
            "updatedAt": [
                207
            ],
            "usesSdkClient": [
                4
            ],
            "widgetAvailability": [
                284
            ],
            "__typename": [
                1
            ]
        },
        "FrontComponentConfiguration": {
            "configurationType": [
                647
            ],
            "frontComponentId": [
                520
            ],
            "headerCommandMenuItemUniversalIdentifiers": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "FrontComponentWidgetAvailability": {
            "objectMetadataId": [
                520
            ],
            "pageLayoutType": [
                395
            ],
            "__typename": [
                1
            ]
        },
        "FullName": {
            "firstName": [
                1
            ],
            "lastName": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "GetApiKeyInput": {
            "id": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "GetAuthorizationUrlForSSO": {
            "authorizationURL": [
                1
            ],
            "id": [
                520
            ],
            "type": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "GetAuthorizationUrlForSSOInput": {
            "identityProviderId": [
                520
            ],
            "workspaceInviteHash": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "GrantApplicationCapabilitiesInput": {
            "applicationId": [
                520
            ],
            "capabilities": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "GraphOrderBy": {},
        "GridPosition": {
            "column": [
                6
            ],
            "columnSpan": [
                6
            ],
            "row": [
                6
            ],
            "rowSpan": [
                6
            ],
            "__typename": [
                1
            ]
        },
        "IdentityProviderType": {},
        "IframeConfiguration": {
            "configurationType": [
                647
            ],
            "url": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "IframeMediaPermission": {
            "camera": [
                4
            ],
            "microphone": [
                4
            ],
            "origin": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ImapSmtpCaldavConnectionSuccess": {
            "connectedAccountId": [
                1
            ],
            "success": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "ImapSmtpCaldavPublicConnectionParameters": {
            "CALDAV": [
                297
            ],
            "IMAP": [
                297
            ],
            "SMTP": [
                297
            ],
            "name": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ImapSmtpCaldavPublicConnectionParams": {
            "connectionSecurity": [
                234
            ],
            "host": [
                1
            ],
            "port": [
                6
            ],
            "username": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "Impersonate": {
            "loginToken": [
                81
            ],
            "workspace": [
                671
            ],
            "__typename": [
                1
            ]
        },
        "Index": {
            "createdAt": [
                207
            ],
            "id": [
                520
            ],
            "indexFieldMetadataList": [
                301
            ],
            "indexType": [
                303
            ],
            "indexWhereClause": [
                1
            ],
            "isCustom": [
                4
            ],
            "isUnique": [
                4
            ],
            "name": [
                1
            ],
            "updatedAt": [
                207
            ],
            "__typename": [
                1
            ]
        },
        "IndexEdge": {
            "cursor": [
                159
            ],
            "node": [
                299
            ],
            "__typename": [
                1
            ]
        },
        "IndexField": {
            "createdAt": [
                207
            ],
            "fieldMetadataId": [
                520
            ],
            "id": [
                520
            ],
            "order": [
                6
            ],
            "subFieldName": [
                1
            ],
            "updatedAt": [
                207
            ],
            "__typename": [
                1
            ]
        },
        "IndexFilter": {
            "and": [
                302
            ],
            "id": [
                521
            ],
            "isCustom": [
                124
            ],
            "or": [
                302
            ],
            "__typename": [
                1
            ]
        },
        "IndexType": {},
        "IngestAppMessagesInput": {
            "messageChannelId": [
                520
            ],
            "messages": [
                42
            ],
            "__typename": [
                1
            ]
        },
        "IngestAppMessagesOutput": {
            "messages": [
                306
            ],
            "__typename": [
                1
            ]
        },
        "IngestedAppMessage": {
            "externalId": [
                1
            ],
            "messageId": [
                520
            ],
            "messageThreadId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "InitiateTwoFactorAuthenticationProvisioning": {
            "uri": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "InvalidatePassword": {
            "success": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "InviteSuggestion": {
            "displayName": [
                1
            ],
            "email": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "JSON": {},
        "JSONObject": {},
        "JobState": {},
        "JobStatus": {
            "attemptsMade": [
                10
            ],
            "enqueuedAt": [
                6
            ],
            "failedReason": [
                1
            ],
            "finishedAt": [
                6
            ],
            "jobId": [
                1
            ],
            "progress": [
                10
            ],
            "startedAt": [
                6
            ],
            "state": [
                312
            ],
            "__typename": [
                1
            ]
        },
        "LineChartConfiguration": {
            "aggregateFieldMetadataId": [
                520
            ],
            "aggregateOperation": [
                26
            ],
            "axisNameDisplay": [
                89
            ],
            "color": [
                1
            ],
            "configurationType": [
                647
            ],
            "description": [
                1
            ],
            "displayDataLabel": [
                4
            ],
            "displayLegend": [
                4
            ],
            "filter": [
                310
            ],
            "firstDayOfTheWeek": [
                10
            ],
            "isCumulative": [
                4
            ],
            "isStacked": [
                4
            ],
            "numberFormat": [
                139
            ],
            "omitNullValues": [
                4
            ],
            "primaryAxisDateGranularity": [
                385
            ],
            "primaryAxisGroupByFieldMetadataId": [
                520
            ],
            "primaryAxisGroupBySubFieldName": [
                1
            ],
            "primaryAxisManualSortOrder": [
                1
            ],
            "primaryAxisOrderBy": [
                290
            ],
            "rangeMax": [
                6
            ],
            "rangeMin": [
                6
            ],
            "secondaryAxisGroupByDateGranularity": [
                385
            ],
            "secondaryAxisGroupByFieldMetadataId": [
                520
            ],
            "secondaryAxisGroupBySubFieldName": [
                1
            ],
            "secondaryAxisManualSortOrder": [
                1
            ],
            "secondaryAxisOrderBy": [
                290
            ],
            "splitMultiValueFields": [
                4
            ],
            "timezone": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "LineChartData": {
            "formattedToRawLookup": [
                310
            ],
            "hasTooManyGroups": [
                4
            ],
            "series": [
                318
            ],
            "showDataLabels": [
                4
            ],
            "showLegend": [
                4
            ],
            "xAxisLabel": [
                1
            ],
            "yAxisLabel": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "LineChartDataInput": {
            "configuration": [
                310
            ],
            "objectMetadataId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "LineChartDataPoint": {
            "x": [
                1
            ],
            "y": [
                6
            ],
            "__typename": [
                1
            ]
        },
        "LineChartSeries": {
            "data": [
                317
            ],
            "key": [
                1
            ],
            "label": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ListAppConnectionsInput": {
            "providerName": [
                1
            ],
            "scope": [
                157
            ],
            "userWorkspaceId": [
                1
            ],
            "visibility": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ListAppMessageChannelsInput": {
            "connectedAccountId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "Location": {
            "lat": [
                6
            ],
            "lng": [
                6
            ],
            "__typename": [
                1
            ]
        },
        "LogicFunction": {
            "applicationId": [
                520
            ],
            "canRunOnDemand": [
                4
            ],
            "createdAt": [
                207
            ],
            "cronTriggerSettings": [
                310
            ],
            "databaseEventTriggerSettings": [
                310
            ],
            "description": [
                1
            ],
            "executionMode": [
                323
            ],
            "handlerName": [
                1
            ],
            "httpRouteTriggerSettings": [
                310
            ],
            "id": [
                520
            ],
            "name": [
                1
            ],
            "runtime": [
                1
            ],
            "sourceHandlerPath": [
                1
            ],
            "timeoutSeconds": [
                6
            ],
            "toolTriggerSettings": [
                310
            ],
            "universalIdentifier": [
                520
            ],
            "updatedAt": [
                207
            ],
            "workflowActionTriggerSettings": [
                310
            ],
            "__typename": [
                1
            ]
        },
        "LogicFunctionExecutionMode": {},
        "LogicFunctionExecutionResult": {
            "data": [
                310
            ],
            "duration": [
                6
            ],
            "error": [
                310
            ],
            "logs": [
                1
            ],
            "status": [
                325
            ],
            "__typename": [
                1
            ]
        },
        "LogicFunctionExecutionStatus": {},
        "LogicFunctionIdInput": {
            "id": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "LogicFunctionLogs": {
            "logs": [
                1
            ],
            "name": [
                1
            ],
            "universalIdentifier": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "LogicFunctionLogsInput": {
            "applicationId": [
                520
            ],
            "applicationUniversalIdentifier": [
                520
            ],
            "id": [
                520
            ],
            "name": [
                1
            ],
            "universalIdentifier": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "LoginToken": {
            "loginToken": [
                81
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceApp": {
            "author": [
                1
            ],
            "category": [
                1
            ],
            "description": [
                1
            ],
            "id": [
                1
            ],
            "isVetted": [
                4
            ],
            "logoUrl": [
                1
            ],
            "name": [
                1
            ],
            "sourcePackage": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppDetail": {
            "aboutDescription": [
                1
            ],
            "author": [
                1
            ],
            "billsCredits": [
                4
            ],
            "category": [
                1
            ],
            "defaultRoleUniversalIdentifier": [
                1
            ],
            "description": [
                1
            ],
            "emailSupport": [
                1
            ],
            "galleryImages": [
                1
            ],
            "id": [
                1
            ],
            "installCount": [
                10
            ],
            "isListed": [
                4
            ],
            "isVetted": [
                4
            ],
            "issueReportUrl": [
                1
            ],
            "latestAvailableVersion": [
                1
            ],
            "logoUrl": [
                1
            ],
            "manifest": [
                310
            ],
            "name": [
                1
            ],
            "objects": [
                332
            ],
            "pricingDescription": [
                1
            ],
            "requestedCapabilities": [
                1
            ],
            "roles": [
                333
            ],
            "screenshots": [
                1
            ],
            "sourcePackage": [
                1
            ],
            "sourceType": [
                71
            ],
            "termsUrl": [
                1
            ],
            "universalIdentifier": [
                1
            ],
            "websiteUrl": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppObject": {
            "labelPlural": [
                1
            ],
            "labelSingular": [
                1
            ],
            "universalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppRole": {
            "canAccessAllTools": [
                4
            ],
            "canDestroyAllObjectRecords": [
                4
            ],
            "canReadAllObjectRecords": [
                4
            ],
            "canSoftDeleteAllObjectRecords": [
                4
            ],
            "canUpdateAllObjectRecords": [
                4
            ],
            "canUpdateAllSettings": [
                4
            ],
            "description": [
                1
            ],
            "fieldPermissions": [
                334
            ],
            "icon": [
                1
            ],
            "label": [
                1
            ],
            "objectPermissions": [
                335
            ],
            "permissionFlagUniversalIdentifiers": [
                1
            ],
            "universalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppRoleFieldPermission": {
            "canReadFieldValue": [
                4
            ],
            "canUpdateFieldValue": [
                4
            ],
            "fieldUniversalIdentifier": [
                1
            ],
            "objectUniversalIdentifier": [
                1
            ],
            "universalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppRoleObjectPermission": {
            "canDestroyObjectRecords": [
                4
            ],
            "canReadObjectRecords": [
                4
            ],
            "canSoftDeleteObjectRecords": [
                4
            ],
            "canUpdateObjectRecords": [
                4
            ],
            "objectUniversalIdentifier": [
                1
            ],
            "universalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "MessageCampaignBodyConfiguration": {
            "configurationType": [
                647
            ],
            "__typename": [
                1
            ]
        },
        "MessageCampaignDetailsConfiguration": {
            "configurationType": [
                647
            ],
            "__typename": [
                1
            ]
        },
        "MessageCampaignSendBlockerDTO": {
            "code": [
                1
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "MessageChannel": {
            "connectedAccount": [
                156
            ],
            "connectedAccountId": [
                520
            ],
            "contactAutoCreationPolicy": [
                340
            ],
            "createdAt": [
                207
            ],
            "displayName": [
                1
            ],
            "excludeGroupEmails": [
                4
            ],
            "excludeNonProfessionalEmails": [
                4
            ],
            "handle": [
                1
            ],
            "id": [
                520
            ],
            "importProgress": [
                10
            ],
            "isContactAutoCreationEnabled": [
                4
            ],
            "isSyncEnabled": [
                4
            ],
            "messageFolderImportPolicy": [
                347
            ],
            "messagingProviderUniversalIdentifier": [
                520
            ],
            "participantHandleFieldUniversalIdentifier": [
                520
            ],
            "pendingGroupEmailsAction": [
                341
            ],
            "syncStage": [
                342
            ],
            "syncStageStartedAt": [
                207
            ],
            "syncStatus": [
                343
            ],
            "syncedAt": [
                207
            ],
            "throttleFailureCount": [
                6
            ],
            "throttleRetryAfter": [
                207
            ],
            "type": [
                344
            ],
            "updatedAt": [
                207
            ],
            "visibility": [
                345
            ],
            "__typename": [
                1
            ]
        },
        "MessageChannelContactAutoCreationPolicy": {},
        "MessageChannelPendingGroupEmailsAction": {},
        "MessageChannelSyncStage": {},
        "MessageChannelSyncStatus": {},
        "MessageChannelType": {},
        "MessageChannelVisibility": {},
        "MessageFolder": {
            "createdAt": [
                207
            ],
            "externalId": [
                1
            ],
            "id": [
                520
            ],
            "isSentFolder": [
                4
            ],
            "isSynced": [
                4
            ],
            "messageChannelId": [
                520
            ],
            "name": [
                1
            ],
            "parentFolderId": [
                1
            ],
            "pendingSyncAction": [
                348
            ],
            "updatedAt": [
                207
            ],
            "__typename": [
                1
            ]
        },
        "MessageFolderImportPolicy": {},
        "MessageFolderPendingSyncAction": {},
        "MessageParticipantRole": {},
        "MessageSuppression": {
            "createdAt": [
                207
            ],
            "emailAddress": [
                1
            ],
            "id": [
                520
            ],
            "reason": [
                352
            ],
            "source": [
                353
            ],
            "unsubscribeTopicId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "MessageSuppressionList": {
            "records": [
                350
            ],
            "totalCount": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "MessageSuppressionReason": {},
        "MessageSuppressionSource": {},
        "MetadataEvent": {
            "metadataName": [
                1
            ],
            "properties": [
                383
            ],
            "recordId": [
                1
            ],
            "type": [
                355
            ],
            "updatedCollectionHash": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "MetadataEventAction": {},
        "MetadataReadability": {},
        "MetadataTranslation": {
            "canonicalValue": [
                1
            ],
            "locale": [
                1
            ],
            "metadataName": [
                1
            ],
            "objectMetadataId": [
                520
            ],
            "property": [
                1
            ],
            "provenance": [
                359
            ],
            "recordId": [
                520
            ],
            "sourceValue": [
                1
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "MetadataTranslationOverrideInput": {
            "locale": [
                1
            ],
            "property": [
                1
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "MetadataTranslationProvenance": {},
        "MetadataTranslationsInput": {
            "fieldMetadataId": [
                520
            ],
            "locale": [
                1
            ],
            "objectMetadataId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "MetadataWritability": {},
        "MinimalMetadata": {
            "collectionHashes": [
                151
            ],
            "objectMetadataItems": [
                363
            ],
            "views": [
                364
            ],
            "__typename": [
                1
            ]
        },
        "MinimalObjectMetadata": {
            "color": [
                1
            ],
            "icon": [
                1
            ],
            "id": [
                520
            ],
            "isActive": [
                4
            ],
            "isRemote": [
                4
            ],
            "isSystem": [
                4
            ],
            "labelPlural": [
                1
            ],
            "labelSingular": [
                1
            ],
            "namePlural": [
                1
            ],
            "nameSingular": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "MinimalView": {
            "id": [
                520
            ],
            "key": [
                639
            ],
            "objectMetadataId": [
                520
            ],
            "type": [
                643
            ],
            "__typename": [
                1
            ]
        },
        "ModelFamily": {},
        "Mutation": {
            "activateSkill": [
                487,
                {
                    "id": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "activateWorkspace": [
                652,
                {
                    "data": [
                        0,
                        "ActivateWorkspaceInput!"
                    ]
                }
            ],
            "addAgentChatMessageReaction": [
                22,
                {
                    "emoji": [
                        1,
                        "String!"
                    ],
                    "messageId": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "addQueryToEventStream": [
                4,
                {
                    "input": [
                        2,
                        "AddQuerySubscriptionInput!"
                    ]
                }
            ],
            "assignAgentChatThread": [
                4,
                {
                    "assigneeWorkspaceMemberId": [
                        520
                    ],
                    "threadId": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "assignRoleToAgent": [
                4,
                {
                    "agentId": [
                        520,
                        "UUID!"
                    ],
                    "roleId": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "assignRoleToApiKey": [
                4,
                {
                    "apiKeyId": [
                        520,
                        "UUID!"
                    ],
                    "roleId": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "authorizeApp": [
                84,
                {
                    "clientId": [
                        1,
                        "String!"
                    ],
                    "codeChallenge": [
                        1
                    ],
                    "issuer": [
                        1
                    ],
                    "redirectUrl": [
                        1,
                        "String!"
                    ],
                    "scope": [
                        1
                    ],
                    "state": [
                        1
                    ]
                }
            ],
            "cancelMessageCampaign": [
                135,
                {
                    "input": [
                        134,
                        "CancelMessageCampaignInput!"
                    ]
                }
            ],
            "cancelSwitchBillingInterval": [
                122
            ],
            "cancelSwitchBillingPlan": [
                122
            ],
            "cancelSwitchResourceCreditPrice": [
                122
            ],
            "checkCustomDomainValidRecords": [
                228
            ],
            "checkPublicDomainValidRecords": [
                228,
                {
                    "domain": [
                        1,
                        "String!"
                    ]
                }
            ],
            "checkoutSession": [
                115,
                {
                    "plan": [
                        106,
                        "BillingPlanKey!"
                    ],
                    "recurringInterval": [
                        493,
                        "SubscriptionInterval!"
                    ],
                    "requirePaymentMethod": [
                        4,
                        "Boolean!"
                    ],
                    "successUrlPath": [
                        1
                    ]
                }
            ],
            "claimApplicationRegistrationOwnership": [
                70,
                {
                    "applicationRegistrationId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "completeAppTarballUpload": [
                70,
                {
                    "fileId": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "completeApplicationFileUploads": [
                155,
                {
                    "applicationUniversalIdentifier": [
                        1,
                        "String!"
                    ],
                    "fileIds": [
                        520,
                        "[UUID!]!"
                    ]
                }
            ],
            "completeBookCallOnboardingStep": [
                389,
                {
                    "hasBookedCall": [
                        4,
                        "Boolean!"
                    ],
                    "isAutoSkipped": [
                        4,
                        "Boolean!"
                    ]
                }
            ],
            "completeFileUpload": [
                277,
                {
                    "fileId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "completeNewWorkspaceLogoUpload": [
                277,
                {
                    "fileId": [
                        1,
                        "String!"
                    ],
                    "workspaceId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "completeWorkspaceLogoUpload": [
                277,
                {
                    "fileId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "completeWorkspaceMemberProfilePictureUpload": [
                277,
                {
                    "fileId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "createAgentChatChannel": [
                5,
                {
                    "input": [
                        162,
                        "CreateAgentChatChannelInput!"
                    ]
                }
            ],
            "createApiKey": [
                36,
                {
                    "input": [
                        164,
                        "CreateApiKeyInput!"
                    ]
                }
            ],
            "createAppMessageChannel": [
                339,
                {
                    "input": [
                        165,
                        "CreateAppMessageChannelInput!"
                    ]
                }
            ],
            "createApplicationFileUploads": [
                166,
                {
                    "applicationUniversalIdentifier": [
                        1,
                        "String!"
                    ],
                    "files": [
                        57,
                        "[ApplicationFileUploadRequestInput!]!"
                    ]
                }
            ],
            "createApplicationRegistration": [
                167,
                {
                    "input": [
                        168,
                        "CreateApplicationRegistrationInput!"
                    ]
                }
            ],
            "createApprovedAccessDomain": [
                78,
                {
                    "input": [
                        169,
                        "CreateApprovedAccessDomainInput!"
                    ]
                }
            ],
            "createBillingPaymentMethodSetupIntent": [
                104
            ],
            "createCalendarEvent": [
                171,
                {
                    "input": [
                        170,
                        "CreateCalendarEventInput!"
                    ]
                }
            ],
            "createChatThread": [
                16,
                {
                    "channelId": [
                        520
                    ]
                }
            ],
            "createCommandMenuItem": [
                152,
                {
                    "input": [
                        172,
                        "CreateCommandMenuItemInput!"
                    ]
                }
            ],
            "createDevelopmentApplication": [
                226,
                {
                    "name": [
                        1,
                        "String!"
                    ],
                    "universalIdentifier": [
                        1,
                        "String!"
                    ]
                }
            ],
            "createEmailGroupChannel": [
                174,
                {
                    "input": [
                        173,
                        "CreateEmailGroupChannelInput!"
                    ]
                }
            ],
            "createEmailingDomain": [
                237,
                {
                    "input": [
                        175,
                        "CreateEmailingDomainInput!"
                    ]
                }
            ],
            "createFileUpload": [
                276,
                {
                    "fieldMetadataId": [
                        1
                    ],
                    "fieldMetadataUniversalIdentifier": [
                        1
                    ],
                    "fileFolder": [
                        275,
                        "FileFolder!"
                    ],
                    "filename": [
                        1,
                        "String!"
                    ],
                    "size": [
                        6,
                        "Float!"
                    ]
                }
            ],
            "createFrontComponent": [
                282,
                {
                    "input": [
                        177,
                        "CreateFrontComponentInput!"
                    ]
                }
            ],
            "createManyNavigationMenuItems": [
                368,
                {
                    "inputs": [
                        182,
                        "[CreateNavigationMenuItemInput!]!"
                    ]
                }
            ],
            "createManyViewFieldGroups": [
                633,
                {
                    "inputs": [
                        196,
                        "[CreateViewFieldGroupInput!]!"
                    ]
                }
            ],
            "createManyViewFields": [
                632,
                {
                    "inputs": [
                        197,
                        "[CreateViewFieldInput!]!"
                    ]
                }
            ],
            "createManyViewGroups": [
                638,
                {
                    "inputs": [
                        200,
                        "[CreateViewGroupInput!]!"
                    ]
                }
            ],
            "createMessageSuppression": [
                350,
                {
                    "input": [
                        181,
                        "CreateMessageSuppressionInput!"
                    ]
                }
            ],
            "createNavigationMenuItem": [
                368,
                {
                    "input": [
                        182,
                        "CreateNavigationMenuItemInput!"
                    ]
                }
            ],
            "createNewWorkspaceLogoUpload": [
                276,
                {
                    "filename": [
                        1,
                        "String!"
                    ],
                    "size": [
                        6,
                        "Float!"
                    ],
                    "workspaceId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "createOIDCIdentityProvider": [
                484,
                {
                    "input": [
                        482,
                        "SetupOIDCSsoInput!"
                    ]
                }
            ],
            "createObjectEvent": [
                33,
                {
                    "event": [
                        1,
                        "String!"
                    ],
                    "objectMetadataId": [
                        520,
                        "UUID!"
                    ],
                    "properties": [
                        310
                    ],
                    "recordId": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "createOneAgent": [
                3,
                {
                    "input": [
                        163,
                        "CreateAgentInput!"
                    ]
                }
            ],
            "createOneField": [
                262,
                {
                    "input": [
                        184,
                        "CreateOneFieldMetadataInput!"
                    ]
                }
            ],
            "createOneIndex": [
                299,
                {
                    "input": [
                        185,
                        "CreateOneIndexInput!"
                    ]
                }
            ],
            "createOneLogicFunction": [
                322,
                {
                    "input": [
                        180,
                        "CreateLogicFunctionFromSourceInput!"
                    ]
                }
            ],
            "createOneObject": [
                371,
                {
                    "input": [
                        186,
                        "CreateOneObjectInput!"
                    ]
                }
            ],
            "createOneRole": [
                444,
                {
                    "createRoleInput": [
                        191,
                        "CreateRoleInput!"
                    ]
                }
            ],
            "createPageLayout": [
                392,
                {
                    "input": [
                        187,
                        "CreatePageLayoutInput!"
                    ]
                }
            ],
            "createPageLayoutTab": [
                393,
                {
                    "input": [
                        188,
                        "CreatePageLayoutTabInput!"
                    ]
                }
            ],
            "createPageLayoutWidget": [
                396,
                {
                    "input": [
                        189,
                        "CreatePageLayoutWidgetInput!"
                    ]
                }
            ],
            "createPublicDomain": [
                415,
                {
                    "applicationId": [
                        1,
                        "String!"
                    ],
                    "domain": [
                        1,
                        "String!"
                    ]
                }
            ],
            "createSAMLIdentityProvider": [
                484,
                {
                    "input": [
                        483,
                        "SetupSAMLSsoInput!"
                    ]
                }
            ],
            "createSkill": [
                487,
                {
                    "input": [
                        192,
                        "CreateSkillInput!"
                    ]
                }
            ],
            "createSubscriptionPaymentIntent": [
                104,
                {
                    "idempotencyKey": [
                        1,
                        "String!"
                    ],
                    "plan": [
                        106,
                        "BillingPlanKey!"
                    ],
                    "recurringInterval": [
                        493,
                        "SubscriptionInterval!"
                    ],
                    "requirePaymentMethod": [
                        4,
                        "Boolean!"
                    ],
                    "successUrlPath": [
                        1
                    ]
                }
            ],
            "createUnsubscribeTopic": [
                523,
                {
                    "input": [
                        193,
                        "CreateUnsubscribeTopicInput!"
                    ]
                }
            ],
            "createUsageLimit": [
                604,
                {
                    "input": [
                        194,
                        "CreateUsageLimitInput!"
                    ]
                }
            ],
            "createValidationRule": [
                624,
                {
                    "input": [
                        195,
                        "CreateValidationRuleInput!"
                    ]
                }
            ],
            "createView": [
                629,
                {
                    "input": [
                        201,
                        "CreateViewInput!"
                    ]
                }
            ],
            "createViewField": [
                632,
                {
                    "input": [
                        197,
                        "CreateViewFieldInput!"
                    ]
                }
            ],
            "createViewFieldGroup": [
                633,
                {
                    "input": [
                        196,
                        "CreateViewFieldGroupInput!"
                    ]
                }
            ],
            "createViewFilter": [
                634,
                {
                    "input": [
                        199,
                        "CreateViewFilterInput!"
                    ]
                }
            ],
            "createViewFilterGroup": [
                635,
                {
                    "input": [
                        198,
                        "CreateViewFilterGroupInput!"
                    ]
                }
            ],
            "createViewGroup": [
                638,
                {
                    "input": [
                        200,
                        "CreateViewGroupInput!"
                    ]
                }
            ],
            "createViewSort": [
                641,
                {
                    "input": [
                        202,
                        "CreateViewSortInput!"
                    ]
                }
            ],
            "createWebhook": [
                645,
                {
                    "input": [
                        203,
                        "CreateWebhookInput!"
                    ]
                }
            ],
            "deactivateSkill": [
                487,
                {
                    "id": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "deleteAgentChatChannel": [
                4,
                {
                    "channelId": [
                        520,
                        "UUID!"
                    ],
                    "destinationChannelId": [
                        520
                    ]
                }
            ],
            "deleteAppKeyValue": [
                4,
                {
                    "key": [
                        1,
                        "String!"
                    ],
                    "scope": [
                        41
                    ]
                }
            ],
            "deleteAppMessageChannel": [
                339,
                {
                    "id": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "deleteApplicationRegistration": [
                4,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "deleteApprovedAccessDomain": [
                4,
                {
                    "input": [
                        208,
                        "DeleteApprovedAccessDomainInput!"
                    ]
                }
            ],
            "deleteCommandMenuItem": [
                152,
                {
                    "id": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "deleteConnectedAccount": [
                156,
                {
                    "id": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "deleteCurrentWorkspace": [
                652
            ],
            "deleteEmailGroupChannel": [
                339,
                {
                    "id": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "deleteEmailingDomain": [
                4,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "deleteFrontComponent": [
                282,
                {
                    "id": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "deleteManyNavigationMenuItems": [
                368,
                {
                    "ids": [
                        520,
                        "[UUID!]!"
                    ]
                }
            ],
            "deleteMessageSuppression": [
                4,
                {
                    "id": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "deleteNavigationMenuItem": [
                368,
                {
                    "id": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "deleteOneAgent": [
                3,
                {
                    "input": [
                        19,
                        "AgentIdInput!"
                    ]
                }
            ],
            "deleteOneField": [
                262,
                {
                    "input": [
                        209,
                        "DeleteOneFieldInput!"
                    ]
                }
            ],
            "deleteOneIndex": [
                299,
                {
                    "input": [
                        210,
                        "DeleteOneIndexInput!"
                    ]
                }
            ],
            "deleteOneLogicFunction": [
                322,
                {
                    "input": [
                        326,
                        "LogicFunctionIdInput!"
                    ]
                }
            ],
            "deleteOneObject": [
                371,
                {
                    "input": [
                        211,
                        "DeleteOneObjectInput!"
                    ]
                }
            ],
            "deleteOneRole": [
                1,
                {
                    "roleId": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "deletePublicDomain": [
                4,
                {
                    "domain": [
                        1,
                        "String!"
                    ]
                }
            ],
            "deleteQueuedChatMessage": [
                4,
                {
                    "messageId": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "deleteSSOIdentityProvider": [
                212,
                {
                    "input": [
                        213,
                        "DeleteSsoInput!"
                    ]
                }
            ],
            "deleteSkill": [
                487,
                {
                    "id": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "deleteTwoFactorAuthenticationMethod": [
                214,
                {
                    "twoFactorAuthenticationMethodId": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "deleteUnsubscribeTopic": [
                4,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "deleteUsageLimit": [
                4,
                {
                    "usageLimitId": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "deleteUser": [
                617
            ],
            "deleteUserFromWorkspace": [
                621,
                {
                    "workspaceMemberIdToDelete": [
                        1,
                        "String!"
                    ]
                }
            ],
            "deleteValidationRule": [
                624,
                {
                    "id": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "deleteView": [
                4,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "deleteViewField": [
                632,
                {
                    "input": [
                        216,
                        "DeleteViewFieldInput!"
                    ]
                }
            ],
            "deleteViewFieldGroup": [
                633,
                {
                    "input": [
                        215,
                        "DeleteViewFieldGroupInput!"
                    ]
                }
            ],
            "deleteViewFilter": [
                634,
                {
                    "input": [
                        217,
                        "DeleteViewFilterInput!"
                    ]
                }
            ],
            "deleteViewFilterGroup": [
                4,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "deleteViewGroup": [
                638,
                {
                    "input": [
                        218,
                        "DeleteViewGroupInput!"
                    ]
                }
            ],
            "deleteViewSort": [
                4,
                {
                    "input": [
                        219,
                        "DeleteViewSortInput!"
                    ]
                }
            ],
            "deleteWebhook": [
                645,
                {
                    "id": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "deleteWorkspaceInvitation": [
                1,
                {
                    "appTokenId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "destroyPageLayout": [
                4,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "destroyPageLayoutTab": [
                4,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "destroyPageLayoutWidget": [
                4,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "destroyView": [
                4,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "destroyViewField": [
                632,
                {
                    "input": [
                        222,
                        "DestroyViewFieldInput!"
                    ]
                }
            ],
            "destroyViewFieldGroup": [
                633,
                {
                    "input": [
                        221,
                        "DestroyViewFieldGroupInput!"
                    ]
                }
            ],
            "destroyViewFilter": [
                634,
                {
                    "input": [
                        223,
                        "DestroyViewFilterInput!"
                    ]
                }
            ],
            "destroyViewFilterGroup": [
                4,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "destroyViewGroup": [
                638,
                {
                    "input": [
                        224,
                        "DestroyViewGroupInput!"
                    ]
                }
            ],
            "destroyViewSort": [
                4,
                {
                    "input": [
                        225,
                        "DestroyViewSortInput!"
                    ]
                }
            ],
            "disconnectConnectedAccount": [
                156,
                {
                    "id": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "duplicateDashboard": [
                229,
                {
                    "id": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "duplicateMessageList": [
                230,
                {
                    "id": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "editSSOIdentityProvider": [
                231,
                {
                    "input": [
                        232,
                        "EditSsoInput!"
                    ]
                }
            ],
            "emailPasswordResetLink": [
                235,
                {
                    "captchaToken": [
                        1
                    ],
                    "email": [
                        1,
                        "String!"
                    ],
                    "workspaceId": [
                        520
                    ]
                }
            ],
            "endSubscriptionTrialPeriod": [
                99
            ],
            "enqueueJob": [
                244,
                {
                    "input": [
                        242,
                        "EnqueueJobInput!"
                    ]
                }
            ],
            "enqueueJobs": [
                246,
                {
                    "input": [
                        245,
                        "EnqueueJobsInput!"
                    ]
                }
            ],
            "enrichWorkspaceCompany": [
                656
            ],
            "executeOneLogicFunction": [
                324,
                {
                    "input": [
                        259,
                        "ExecuteOneLogicFunctionInput!"
                    ]
                }
            ],
            "generateApiKeyToken": [
                38,
                {
                    "apiKeyId": [
                        520,
                        "UUID!"
                    ],
                    "expiresAt": [
                        1,
                        "String!"
                    ]
                }
            ],
            "generateFrontComponentApplicationTokenPair": [
                75,
                {
                    "applicationId": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "generatePlaygroundToken": [
                81
            ],
            "generateTransientToken": [
                503
            ],
            "generateTwoFactorAuthenticationRecoveryCode": [
                517,
                {
                    "otp": [
                        1
                    ],
                    "userId": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "getAuthTokensFromLoginToken": [
                83,
                {
                    "loginToken": [
                        1,
                        "String!"
                    ],
                    "origin": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getAuthTokensFromOTP": [
                83,
                {
                    "captchaToken": [
                        1
                    ],
                    "loginToken": [
                        1,
                        "String!"
                    ],
                    "origin": [
                        1,
                        "String!"
                    ],
                    "otp": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getAuthTokensFromSSOExchangeToken": [
                83,
                {
                    "ssoExchangeToken": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getAuthTokensFromTwoFactorAuthenticationRecoveryCode": [
                518,
                {
                    "captchaToken": [
                        1
                    ],
                    "loginToken": [
                        1,
                        "String!"
                    ],
                    "origin": [
                        1,
                        "String!"
                    ],
                    "recoveryCode": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getAuthorizationUrlForSSO": [
                287,
                {
                    "input": [
                        288,
                        "GetAuthorizationUrlForSSOInput!"
                    ]
                }
            ],
            "getLoginTokenFromCredentials": [
                329,
                {
                    "captchaToken": [
                        1
                    ],
                    "email": [
                        1,
                        "String!"
                    ],
                    "locale": [
                        1
                    ],
                    "origin": [
                        1,
                        "String!"
                    ],
                    "password": [
                        1,
                        "String!"
                    ],
                    "verifyEmailRedirectPath": [
                        1
                    ]
                }
            ],
            "goBackToPreviousOnboardingStep": [
                388
            ],
            "grantApplicationCapabilities": [
                46,
                {
                    "input": [
                        289,
                        "GrantApplicationCapabilitiesInput!"
                    ]
                }
            ],
            "impersonate": [
                298,
                {
                    "userId": [
                        520,
                        "UUID!"
                    ],
                    "workspaceId": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "ingestAppMessages": [
                305,
                {
                    "input": [
                        304,
                        "IngestAppMessagesInput!"
                    ]
                }
            ],
            "initiateOTPProvisioning": [
                307,
                {
                    "loginToken": [
                        1,
                        "String!"
                    ],
                    "origin": [
                        1,
                        "String!"
                    ]
                }
            ],
            "initiateOTPProvisioningForAuthenticatedUser": [
                307
            ],
            "installApplication": [
                44,
                {
                    "universalIdentifier": [
                        1,
                        "String!"
                    ],
                    "version": [
                        1
                    ]
                }
            ],
            "installMarketplaceApp": [
                4,
                {
                    "universalIdentifier": [
                        1,
                        "String!"
                    ],
                    "version": [
                        1
                    ]
                }
            ],
            "markAgentChatThreadAsDoneInChannel": [
                4,
                {
                    "threadId": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "moveAgentChatThreadToChannel": [
                4,
                {
                    "channelId": [
                        520
                    ],
                    "threadId": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "refreshEnterpriseValidityToken": [
                4
            ],
            "releaseEnterpriseServerBinding": [
                247
            ],
            "removeAgentChatMessageReaction": [
                22,
                {
                    "emoji": [
                        1,
                        "String!"
                    ],
                    "messageId": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "removeQueryFromEventStream": [
                4,
                {
                    "input": [
                        439,
                        "RemoveQueryFromEventStreamInput!"
                    ]
                }
            ],
            "removeRecordShare": [
                431,
                {
                    "principal": [
                        428,
                        "RecordSharePrincipalInput!"
                    ],
                    "target": [
                        436,
                        "RecordTargetInput!"
                    ]
                }
            ],
            "removeRoleFromAgent": [
                4,
                {
                    "agentId": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "renewApplicationToken": [
                75,
                {
                    "applicationRefreshToken": [
                        1,
                        "String!"
                    ]
                }
            ],
            "renewToken": [
                83,
                {
                    "appToken": [
                        1,
                        "String!"
                    ]
                }
            ],
            "reopenAgentChatThreadInChannel": [
                4,
                {
                    "threadId": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "reportAppConnectionAuthFailure": [
                4,
                {
                    "input": [
                        440,
                        "ReportAppConnectionAuthFailureInput!"
                    ]
                }
            ],
            "resendEmailVerificationToken": [
                441,
                {
                    "email": [
                        1,
                        "String!"
                    ],
                    "origin": [
                        1,
                        "String!"
                    ]
                }
            ],
            "resendWorkspaceInvitation": [
                474,
                {
                    "appTokenId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "resetCommandMenuItem": [
                152,
                {
                    "id": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "resetPageLayoutTabToDefault": [
                393,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "resetPageLayoutToDefault": [
                392,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "resetPageLayoutWidgetToDefault": [
                396,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "resetTimelineActivityType": [
                498,
                {
                    "id": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "retryChatMessage": [
                466,
                {
                    "modelId": [
                        1
                    ],
                    "threadId": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "revokeAllOtherUserSessions": [
                10
            ],
            "revokeApiKey": [
                36,
                {
                    "input": [
                        442,
                        "RevokeApiKeyInput!"
                    ]
                }
            ],
            "revokeApplicationAuthorization": [
                4,
                {
                    "applicationAuthorizationId": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "revokeTwoFactorAuthenticationRecoveryCode": [
                4,
                {
                    "userId": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "revokeUserSession": [
                4,
                {
                    "userSessionId": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "rotateApplicationRegistrationClientSecret": [
                446,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "runAgent": [
                457,
                {
                    "input": [
                        453,
                        "RunAgentInput!"
                    ]
                }
            ],
            "runApplicationHealthCheck": [
                60,
                {
                    "applicationId": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "saveImapSmtpCaldavAccount": [
                295,
                {
                    "connectionParameters": [
                        233,
                        "EmailAccountConnectionParameters!"
                    ],
                    "handle": [
                        1,
                        "String!"
                    ],
                    "id": [
                        520
                    ]
                }
            ],
            "sendAppChannelMessage": [
                465,
                {
                    "input": [
                        464,
                        "SendAppChannelMessageInput!"
                    ]
                }
            ],
            "sendChatMessage": [
                466,
                {
                    "browsingContext": [
                        310
                    ],
                    "channelId": [
                        520
                    ],
                    "fileAttachments": [
                        274,
                        "[FileAttachmentInput!]"
                    ],
                    "mentionedWorkspaceMemberIds": [
                        520,
                        "[UUID!]"
                    ],
                    "messageId": [
                        520,
                        "UUID!"
                    ],
                    "modelId": [
                        1
                    ],
                    "shouldAssistantReply": [
                        4
                    ],
                    "text": [
                        1,
                        "String!"
                    ],
                    "threadId": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "sendEmail": [
                469,
                {
                    "input": [
                        468,
                        "SendEmailInput!"
                    ]
                }
            ],
            "sendInboxMessage": [
                473,
                {
                    "input": [
                        472,
                        "SendInboxMessageInput!"
                    ]
                }
            ],
            "sendInvitations": [
                474,
                {
                    "emails": [
                        1,
                        "[String!]!"
                    ],
                    "roleId": [
                        520
                    ]
                }
            ],
            "sendMessageCampaign": [
                476,
                {
                    "input": [
                        475,
                        "SendMessageCampaignInput!"
                    ]
                }
            ],
            "sendMessageCampaignTest": [
                471,
                {
                    "input": [
                        477,
                        "SendMessageCampaignTestInput!"
                    ]
                }
            ],
            "setAppKeyValue": [
                40,
                {
                    "input": [
                        479,
                        "SetAppKeyValueInput!"
                    ]
                }
            ],
            "setEnterpriseKey": [
                247,
                {
                    "enterpriseKey": [
                        1,
                        "String!"
                    ]
                }
            ],
            "setRecordGeneralAccess": [
                431,
                {
                    "accessLevel": [
                        427,
                        "RecordShareAccessLevel!"
                    ],
                    "target": [
                        436,
                        "RecordTargetInput!"
                    ]
                }
            ],
            "setRecordShare": [
                431,
                {
                    "accessLevel": [
                        427,
                        "RecordShareAccessLevel!"
                    ],
                    "principal": [
                        428,
                        "RecordSharePrincipalInput!"
                    ],
                    "target": [
                        436,
                        "RecordTargetInput!"
                    ]
                }
            ],
            "setResourceCreditSubscriptionPrice": [
                122,
                {
                    "priceId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "signIn": [
                88,
                {
                    "captchaToken": [
                        1
                    ],
                    "email": [
                        1,
                        "String!"
                    ],
                    "locale": [
                        1
                    ],
                    "password": [
                        1,
                        "String!"
                    ],
                    "verifyEmailRedirectPath": [
                        1
                    ]
                }
            ],
            "signOut": [
                4,
                {
                    "refreshToken": [
                        1
                    ]
                }
            ],
            "signUp": [
                88,
                {
                    "captchaToken": [
                        1
                    ],
                    "email": [
                        1,
                        "String!"
                    ],
                    "locale": [
                        1
                    ],
                    "password": [
                        1,
                        "String!"
                    ],
                    "verifyEmailRedirectPath": [
                        1
                    ]
                }
            ],
            "signUpInNewWorkspace": [
                485,
                {
                    "input": [
                        486
                    ]
                }
            ],
            "signUpInWorkspace": [
                485,
                {
                    "captchaToken": [
                        1
                    ],
                    "email": [
                        1,
                        "String!"
                    ],
                    "locale": [
                        1
                    ],
                    "password": [
                        1,
                        "String!"
                    ],
                    "verifyEmailRedirectPath": [
                        1
                    ],
                    "workspaceId": [
                        520
                    ],
                    "workspaceInviteHash": [
                        1
                    ],
                    "workspacePersonalInviteToken": [
                        1
                    ]
                }
            ],
            "skipSyncEmailOnboardingStep": [
                389,
                {
                    "isAutoSkipped": [
                        4,
                        "Boolean!"
                    ]
                }
            ],
            "snoozeAgentChatThreadInChannel": [
                4,
                {
                    "snoozedUntil": [
                        207,
                        "DateTime!"
                    ],
                    "threadId": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "startChannelSync": [
                138,
                {
                    "connectedAccountId": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "startWorkspaceSetupChat": [
                489,
                {
                    "companyContext": [
                        310
                    ],
                    "personContext": [
                        310
                    ]
                }
            ],
            "stopAgentChatStream": [
                4,
                {
                    "threadId": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "stopImpersonation": [
                490
            ],
            "switchBillingPlan": [
                122,
                {
                    "plan": [
                        106
                    ]
                }
            ],
            "switchSubscriptionInterval": [
                122
            ],
            "syncApplication": [
                666,
                {
                    "dryRun": [
                        4
                    ],
                    "inferDeletionFromMissingEntities": [
                        4
                    ],
                    "manifest": [
                        310,
                        "JSON!"
                    ]
                }
            ],
            "syncMarketplaceCatalog": [
                4
            ],
            "trackAnalytics": [
                33,
                {
                    "event": [
                        1
                    ],
                    "name": [
                        1
                    ],
                    "properties": [
                        310
                    ],
                    "type": [
                        34,
                        "AnalyticsType!"
                    ]
                }
            ],
            "transferApplicationRegistrationOwnership": [
                70,
                {
                    "applicationRegistrationId": [
                        1,
                        "String!"
                    ],
                    "targetWorkspaceSubdomain": [
                        1,
                        "String!"
                    ]
                }
            ],
            "triggerAddPeopleToMessageListJob": [
                505,
                {
                    "input": [
                        504,
                        "TriggerAddPeopleToMessageListJobInput!"
                    ]
                }
            ],
            "triggerInstallApplication": [
                509,
                {
                    "input": [
                        506,
                        "TriggerInstallApplicationInput!"
                    ]
                }
            ],
            "triggerInstallApplicationJob": [
                508,
                {
                    "input": [
                        507,
                        "TriggerInstallApplicationJobInput!"
                    ]
                }
            ],
            "triggerUninstallApplication": [
                513,
                {
                    "input": [
                        510,
                        "TriggerUninstallApplicationInput!"
                    ]
                }
            ],
            "triggerUninstallApplicationJob": [
                512,
                {
                    "input": [
                        511,
                        "TriggerUninstallApplicationJobInput!"
                    ]
                }
            ],
            "triggerUpgradeApplication": [
                515,
                {
                    "input": [
                        514,
                        "TriggerUpgradeApplicationInput!"
                    ]
                }
            ],
            "uninstallApplication": [
                4,
                {
                    "universalIdentifier": [
                        1,
                        "String!"
                    ]
                }
            ],
            "updateAgentChatChannel": [
                5,
                {
                    "channelId": [
                        520,
                        "UUID!"
                    ],
                    "input": [
                        525,
                        "UpdateAgentChatChannelInput!"
                    ]
                }
            ],
            "updateAgentChatThreadInboxState": [
                18,
                {
                    "action": [
                        14,
                        "AgentChatInboxAction!"
                    ],
                    "snoozedUntil": [
                        207
                    ],
                    "threadIds": [
                        520,
                        "[UUID!]!"
                    ]
                }
            ],
            "updateApiKey": [
                36,
                {
                    "input": [
                        527,
                        "UpdateApiKeyInput!"
                    ]
                }
            ],
            "updateAppMessageChannel": [
                339,
                {
                    "input": [
                        528,
                        "UpdateAppMessageChannelInput!"
                    ]
                }
            ],
            "updateApplication": [
                44,
                {
                    "id": [
                        520,
                        "UUID!"
                    ],
                    "input": [
                        529,
                        "UpdateApplicationInput!"
                    ]
                }
            ],
            "updateApplicationRegistration": [
                70,
                {
                    "input": [
                        530,
                        "UpdateApplicationRegistrationInput!"
                    ]
                }
            ],
            "updateApplicationRegistrationVariable": [
                74,
                {
                    "input": [
                        532,
                        "UpdateApplicationRegistrationVariableInput!"
                    ]
                }
            ],
            "updateCalendarChannel": [
                125,
                {
                    "input": [
                        534,
                        "UpdateCalendarChannelInput!"
                    ]
                }
            ],
            "updateCommandMenuItem": [
                152,
                {
                    "input": [
                        536,
                        "UpdateCommandMenuItemInput!"
                    ]
                }
            ],
            "updateEmailGroupChannel": [
                339,
                {
                    "input": [
                        537,
                        "UpdateEmailGroupChannelInput!"
                    ]
                }
            ],
            "updateFrontComponent": [
                282,
                {
                    "input": [
                        539,
                        "UpdateFrontComponentInput!"
                    ]
                }
            ],
            "updateLabPublicFeatureFlag": [
                260,
                {
                    "input": [
                        541,
                        "UpdateLabPublicFeatureFlagInput!"
                    ]
                }
            ],
            "updateManyNavigationMenuItems": [
                368,
                {
                    "inputs": [
                        552,
                        "[UpdateOneNavigationMenuItemInput!]!"
                    ]
                }
            ],
            "updateManyObjects": [
                371,
                {
                    "inputs": [
                        553,
                        "[UpdateOneObjectInput!]!"
                    ]
                }
            ],
            "updateManyViewGroups": [
                638,
                {
                    "inputs": [
                        575,
                        "[UpdateViewGroupInput!]!"
                    ]
                }
            ],
            "updateMessageChannel": [
                339,
                {
                    "input": [
                        544,
                        "UpdateMessageChannelInput!"
                    ]
                }
            ],
            "updateMessageFolder": [
                346,
                {
                    "input": [
                        546,
                        "UpdateMessageFolderInput!"
                    ]
                }
            ],
            "updateMessageFolders": [
                346,
                {
                    "input": [
                        548,
                        "UpdateMessageFoldersInput!"
                    ]
                }
            ],
            "updateMyUserApplicationVariable": [
                4,
                {
                    "applicationUniversalIdentifier": [
                        1,
                        "String!"
                    ],
                    "key": [
                        1,
                        "String!"
                    ],
                    "value": [
                        1,
                        "String!"
                    ]
                }
            ],
            "updateNavigationMenuItem": [
                368,
                {
                    "input": [
                        552,
                        "UpdateOneNavigationMenuItemInput!"
                    ]
                }
            ],
            "updateOneAgent": [
                3,
                {
                    "input": [
                        526,
                        "UpdateAgentInput!"
                    ]
                }
            ],
            "updateOneApplicationVariable": [
                4,
                {
                    "applicationId": [
                        520
                    ],
                    "key": [
                        1,
                        "String!"
                    ],
                    "value": [
                        1,
                        "String!"
                    ]
                }
            ],
            "updateOneField": [
                262,
                {
                    "input": [
                        551,
                        "UpdateOneFieldMetadataInput!"
                    ]
                }
            ],
            "updateOneLogicFunction": [
                4,
                {
                    "input": [
                        542,
                        "UpdateLogicFunctionFromSourceInput!"
                    ]
                }
            ],
            "updateOneObject": [
                371,
                {
                    "input": [
                        553,
                        "UpdateOneObjectInput!"
                    ]
                }
            ],
            "updateOneRole": [
                444,
                {
                    "updateRoleInput": [
                        560,
                        "UpdateRoleInput!"
                    ]
                }
            ],
            "updatePageLayout": [
                392,
                {
                    "id": [
                        1,
                        "String!"
                    ],
                    "input": [
                        554,
                        "UpdatePageLayoutInput!"
                    ]
                }
            ],
            "updatePageLayoutTab": [
                393,
                {
                    "id": [
                        1,
                        "String!"
                    ],
                    "input": [
                        555,
                        "UpdatePageLayoutTabInput!"
                    ]
                }
            ],
            "updatePageLayoutWidget": [
                396,
                {
                    "id": [
                        1,
                        "String!"
                    ],
                    "input": [
                        557,
                        "UpdatePageLayoutWidgetInput!"
                    ]
                }
            ],
            "updatePageLayoutWithTabsAndWidgets": [
                392,
                {
                    "id": [
                        1,
                        "String!"
                    ],
                    "input": [
                        559,
                        "UpdatePageLayoutWithTabsInput!"
                    ]
                }
            ],
            "updatePasswordViaResetToken": [
                308,
                {
                    "newPassword": [
                        1,
                        "String!"
                    ],
                    "passwordResetToken": [
                        1,
                        "String!"
                    ]
                }
            ],
            "updateSkill": [
                487,
                {
                    "input": [
                        562,
                        "UpdateSkillInput!"
                    ]
                }
            ],
            "updateTimelineActivityType": [
                498,
                {
                    "input": [
                        563,
                        "UpdateTimelineActivityTypeInput!"
                    ]
                }
            ],
            "updateUnsubscribeTopic": [
                523,
                {
                    "input": [
                        564,
                        "UpdateUnsubscribeTopicInput!"
                    ]
                }
            ],
            "updateUsageLimit": [
                604,
                {
                    "input": [
                        565,
                        "UpdateUsageLimitInput!"
                    ]
                }
            ],
            "updateUserCreditsFallback": [
                98,
                {
                    "userCreditsFallback": [
                        619,
                        "UserCreditsFallback!"
                    ]
                }
            ],
            "updateUserEmail": [
                4,
                {
                    "newEmail": [
                        1,
                        "String!"
                    ],
                    "verifyEmailRedirectPath": [
                        1
                    ]
                }
            ],
            "updateValidationRule": [
                624,
                {
                    "input": [
                        566,
                        "UpdateValidationRuleInput!"
                    ]
                }
            ],
            "updateView": [
                629,
                {
                    "id": [
                        1,
                        "String!"
                    ],
                    "input": [
                        577,
                        "UpdateViewInput!"
                    ]
                }
            ],
            "updateViewField": [
                632,
                {
                    "input": [
                        570,
                        "UpdateViewFieldInput!"
                    ]
                }
            ],
            "updateViewFieldGroup": [
                633,
                {
                    "input": [
                        568,
                        "UpdateViewFieldGroupInput!"
                    ]
                }
            ],
            "updateViewFilter": [
                634,
                {
                    "input": [
                        573,
                        "UpdateViewFilterInput!"
                    ]
                }
            ],
            "updateViewFilterGroup": [
                635,
                {
                    "id": [
                        1,
                        "String!"
                    ],
                    "input": [
                        572,
                        "UpdateViewFilterGroupInput!"
                    ]
                }
            ],
            "updateViewGroup": [
                638,
                {
                    "input": [
                        575,
                        "UpdateViewGroupInput!"
                    ]
                }
            ],
            "updateViewSort": [
                641,
                {
                    "input": [
                        578,
                        "UpdateViewSortInput!"
                    ]
                }
            ],
            "updateWebhook": [
                645,
                {
                    "input": [
                        580,
                        "UpdateWebhookInput!"
                    ]
                }
            ],
            "updateWorkspace": [
                652,
                {
                    "data": [
                        584,
                        "UpdateWorkspaceInput!"
                    ]
                }
            ],
            "updateWorkspaceAllowedIframeOrigins": [
                652,
                {
                    "data": [
                        582,
                        "UpdateWorkspaceAllowedIframeOriginsInput!"
                    ]
                }
            ],
            "updateWorkspaceIframeMediaPermissions": [
                652,
                {
                    "data": [
                        583,
                        "UpdateWorkspaceIframeMediaPermissionsInput!"
                    ]
                }
            ],
            "updateWorkspaceMemberRole": [
                661,
                {
                    "roleId": [
                        520,
                        "UUID!"
                    ],
                    "workspaceMemberId": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "updateWorkspaceMemberSettings": [
                4,
                {
                    "input": [
                        585,
                        "UpdateWorkspaceMemberSettingsInput!"
                    ]
                }
            ],
            "upgradeApplication": [
                4,
                {
                    "appRegistrationId": [
                        1,
                        "String!"
                    ],
                    "targetVersion": [
                        1,
                        "String!"
                    ]
                }
            ],
            "uploadAppTarball": [
                70,
                {
                    "file": [
                        586,
                        "Upload!"
                    ],
                    "universalIdentifier": [
                        1
                    ]
                }
            ],
            "uploadApplicationFile": [
                273,
                {
                    "applicationUniversalIdentifier": [
                        1,
                        "String!"
                    ],
                    "file": [
                        586,
                        "Upload!"
                    ],
                    "fileFolder": [
                        275,
                        "FileFolder!"
                    ],
                    "filePath": [
                        1,
                        "String!"
                    ]
                }
            ],
            "uploadFilesFieldFileByUniversalIdentifier": [
                277,
                {
                    "fieldMetadataUniversalIdentifier": [
                        1,
                        "String!"
                    ],
                    "file": [
                        586,
                        "Upload!"
                    ]
                }
            ],
            "uploadNewWorkspaceLogo": [
                277,
                {
                    "file": [
                        586,
                        "Upload!"
                    ],
                    "workspaceId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "uploadWorkspaceLogo": [
                277,
                {
                    "file": [
                        586,
                        "Upload!"
                    ]
                }
            ],
            "uploadWorkspaceMemberProfilePicture": [
                277,
                {
                    "file": [
                        586,
                        "Upload!"
                    ]
                }
            ],
            "upsertFieldPermissions": [
                269,
                {
                    "upsertFieldPermissionsInput": [
                        587,
                        "UpsertFieldPermissionsInput!"
                    ]
                }
            ],
            "upsertFieldsWidget": [
                629,
                {
                    "input": [
                        590,
                        "UpsertFieldsWidgetInput!"
                    ]
                }
            ],
            "upsertObjectPermissions": [
                379,
                {
                    "upsertObjectPermissionsInput": [
                        591,
                        "UpsertObjectPermissionsInput!"
                    ]
                }
            ],
            "upsertPermissionFlags": [
                445,
                {
                    "upsertPermissionFlagsInput": [
                        592,
                        "UpsertPermissionFlagsInput!"
                    ]
                }
            ],
            "upsertRowLevelPermissionPredicates": [
                594,
                {
                    "input": [
                        593,
                        "UpsertRowLevelPermissionPredicatesInput!"
                    ]
                }
            ],
            "upsertViewWidget": [
                629,
                {
                    "input": [
                        595,
                        "UpsertViewWidgetInput!"
                    ]
                }
            ],
            "validateApprovedAccessDomain": [
                78,
                {
                    "input": [
                        622,
                        "ValidateApprovedAccessDomainInput!"
                    ]
                }
            ],
            "verifyEmailAndGetLoginToken": [
                626,
                {
                    "captchaToken": [
                        1
                    ],
                    "email": [
                        1,
                        "String!"
                    ],
                    "emailVerificationToken": [
                        1,
                        "String!"
                    ],
                    "origin": [
                        1,
                        "String!"
                    ]
                }
            ],
            "verifyEmailAndGetWorkspaceAgnosticToken": [
                88,
                {
                    "captchaToken": [
                        1
                    ],
                    "email": [
                        1,
                        "String!"
                    ],
                    "emailVerificationToken": [
                        1,
                        "String!"
                    ]
                }
            ],
            "verifyEmailingDomain": [
                237,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "verifyTwoFactorAuthenticationMethodForAuthenticatedUser": [
                627,
                {
                    "otp": [
                        1,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "NativeModelCapabilities": {
            "twitterSearch": [
                4
            ],
            "webSearch": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "NavigationMenuItem": {
            "agentChatChannelId": [
                520
            ],
            "applicationId": [
                520
            ],
            "color": [
                1
            ],
            "createdAt": [
                207
            ],
            "folderId": [
                520
            ],
            "icon": [
                1
            ],
            "id": [
                520
            ],
            "link": [
                1
            ],
            "name": [
                1
            ],
            "pageLayoutId": [
                520
            ],
            "position": [
                6
            ],
            "targetObjectMetadataId": [
                520
            ],
            "targetRecordId": [
                520
            ],
            "targetRecordIdentifier": [
                424
            ],
            "type": [
                369
            ],
            "updatedAt": [
                207
            ],
            "userWorkspaceId": [
                520
            ],
            "viewId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "NavigationMenuItemType": {},
        "NotesConfiguration": {
            "configurationType": [
                647
            ],
            "__typename": [
                1
            ]
        },
        "Object": {
            "applicationId": [
                520
            ],
            "color": [
                1
            ],
            "createdAt": [
                207
            ],
            "description": [
                1
            ],
            "duplicateCriteria": [
                1
            ],
            "fields": [
                374,
                {
                    "filter": [
                        267,
                        "FieldFilter!"
                    ],
                    "paging": [
                        205,
                        "CursorPaging!"
                    ]
                }
            ],
            "fieldsList": [
                262
            ],
            "icon": [
                1
            ],
            "id": [
                520
            ],
            "imageIdentifierFieldMetadataId": [
                520
            ],
            "indexMetadataList": [
                299
            ],
            "indexMetadatas": [
                376,
                {
                    "filter": [
                        302,
                        "IndexFilter!"
                    ],
                    "paging": [
                        205,
                        "CursorPaging!"
                    ]
                }
            ],
            "isActive": [
                4
            ],
            "isLabelSyncedWithName": [
                4
            ],
            "isRemote": [
                4
            ],
            "isSearchable": [
                4
            ],
            "isSystem": [
                4
            ],
            "isUICreatable": [
                4
            ],
            "isUIEditable": [
                4
            ],
            "isUIReadOnly": [
                4
            ],
            "labelIdentifierFieldMetadataId": [
                520
            ],
            "labelPlural": [
                1
            ],
            "labelSingular": [
                1
            ],
            "namePlural": [
                1
            ],
            "nameSingular": [
                1
            ],
            "openRecordIn": [
                378
            ],
            "readability": [
                356
            ],
            "readabilityParentFieldUniversalIdentifiers": [
                520
            ],
            "searchFieldMetadataList": [
                463
            ],
            "sharingReach": [
                386
            ],
            "shortcut": [
                1
            ],
            "universalIdentifier": [
                1
            ],
            "updatedAt": [
                207
            ],
            "writability": [
                361
            ],
            "__typename": [
                1
            ]
        },
        "ObjectConnection": {
            "edges": [
                373
            ],
            "pageInfo": [
                391
            ],
            "__typename": [
                1
            ]
        },
        "ObjectEdge": {
            "cursor": [
                159
            ],
            "node": [
                371
            ],
            "__typename": [
                1
            ]
        },
        "ObjectFieldsConnection": {
            "edges": [
                266
            ],
            "pageInfo": [
                391
            ],
            "__typename": [
                1
            ]
        },
        "ObjectFilter": {
            "and": [
                375
            ],
            "id": [
                521
            ],
            "isActive": [
                124
            ],
            "isRemote": [
                124
            ],
            "isSearchable": [
                124
            ],
            "isSystem": [
                124
            ],
            "isUICreatable": [
                124
            ],
            "isUIEditable": [
                124
            ],
            "isUIReadOnly": [
                124
            ],
            "or": [
                375
            ],
            "universalIdentifier": [
                521
            ],
            "__typename": [
                1
            ]
        },
        "ObjectIndexMetadatasConnection": {
            "edges": [
                300
            ],
            "pageInfo": [
                391
            ],
            "__typename": [
                1
            ]
        },
        "ObjectMetadataCommandMenuItemPayload": {
            "objectMetadataItemId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "ObjectOpenRecordIn": {},
        "ObjectPermission": {
            "canDestroyObjectRecords": [
                4
            ],
            "canReadObjectRecords": [
                4
            ],
            "canSoftDeleteObjectRecords": [
                4
            ],
            "canUpdateObjectRecords": [
                4
            ],
            "objectMetadataId": [
                520
            ],
            "restrictedFields": [
                310
            ],
            "rowLevelPermissionPredicateGroups": [
                448
            ],
            "rowLevelPermissionPredicates": [
                447
            ],
            "__typename": [
                1
            ]
        },
        "ObjectPermissionInput": {
            "canDestroyObjectRecords": [
                4
            ],
            "canReadObjectRecords": [
                4
            ],
            "canSoftDeleteObjectRecords": [
                4
            ],
            "canUpdateObjectRecords": [
                4
            ],
            "objectMetadataId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "ObjectRecordCount": {
            "objectNamePlural": [
                1
            ],
            "totalCount": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "ObjectRecordEvent": {
            "action": [
                206
            ],
            "objectNameSingular": [
                1
            ],
            "properties": [
                383
            ],
            "recordId": [
                1
            ],
            "userId": [
                1
            ],
            "workspaceMemberId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ObjectRecordEventProperties": {
            "after": [
                310
            ],
            "before": [
                310
            ],
            "diff": [
                310
            ],
            "updatedFields": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ObjectRecordEventWithQueryIds": {
            "objectRecordEvent": [
                382
            ],
            "queryIds": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ObjectRecordGroupByDateGranularity": {},
        "ObjectSharingReach": {},
        "OnboardingStatus": {},
        "OnboardingStepNavigation": {
            "onboardingStatus": [
                387
            ],
            "previousOnboardingStatus": [
                387
            ],
            "__typename": [
                1
            ]
        },
        "OnboardingStepSuccess": {
            "success": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "OpenRecordIn": {},
        "PageInfo": {
            "endCursor": [
                159
            ],
            "hasNextPage": [
                4
            ],
            "hasPreviousPage": [
                4
            ],
            "startCursor": [
                159
            ],
            "__typename": [
                1
            ]
        },
        "PageLayout": {
            "applicationId": [
                520
            ],
            "createdAt": [
                207
            ],
            "defaultTabToFocusOnMobileAndSidePanelId": [
                520
            ],
            "deletedAt": [
                207
            ],
            "id": [
                520
            ],
            "isFirstTabPinned": [
                4
            ],
            "isSystemSideEffect": [
                4
            ],
            "name": [
                1
            ],
            "objectMetadataId": [
                520
            ],
            "tabs": [
                393
            ],
            "type": [
                395
            ],
            "universalIdentifier": [
                520
            ],
            "updatedAt": [
                207
            ],
            "__typename": [
                1
            ]
        },
        "PageLayoutTab": {
            "applicationId": [
                520
            ],
            "createdAt": [
                207
            ],
            "deletedAt": [
                207
            ],
            "icon": [
                1
            ],
            "id": [
                520
            ],
            "isActive": [
                4
            ],
            "isOverridden": [
                4
            ],
            "isSystemSideEffect": [
                4
            ],
            "layoutMode": [
                394
            ],
            "pageLayoutId": [
                520
            ],
            "position": [
                6
            ],
            "title": [
                1
            ],
            "universalIdentifier": [
                520
            ],
            "updatedAt": [
                207
            ],
            "widgets": [
                396
            ],
            "__typename": [
                1
            ]
        },
        "PageLayoutTabLayoutMode": {},
        "PageLayoutType": {},
        "PageLayoutWidget": {
            "applicationId": [
                520
            ],
            "conditionalAvailabilityExpression": [
                1
            ],
            "conditionalDisplay": [
                310
            ],
            "configuration": [
                646
            ],
            "createdAt": [
                207
            ],
            "deletedAt": [
                207
            ],
            "gridPosition": [
                291
            ],
            "id": [
                520
            ],
            "isActive": [
                4
            ],
            "isOverridden": [
                4
            ],
            "isSystemSideEffect": [
                4
            ],
            "objectMetadataId": [
                520
            ],
            "pageLayoutTabId": [
                520
            ],
            "position": [
                399
            ],
            "title": [
                1
            ],
            "type": [
                648
            ],
            "universalIdentifier": [
                520
            ],
            "updatedAt": [
                207
            ],
            "__typename": [
                1
            ]
        },
        "PageLayoutWidgetCanvasPosition": {
            "layoutMode": [
                394
            ],
            "__typename": [
                1
            ]
        },
        "PageLayoutWidgetGridPosition": {
            "column": [
                10
            ],
            "columnSpan": [
                10
            ],
            "layoutMode": [
                394
            ],
            "row": [
                10
            ],
            "rowSpan": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "PageLayoutWidgetPosition": {
            "on_PageLayoutWidgetCanvasPosition": [
                397
            ],
            "on_PageLayoutWidgetGridPosition": [
                398
            ],
            "on_PageLayoutWidgetVerticalListPosition": [
                401
            ],
            "__typename": [
                1
            ]
        },
        "PageLayoutWidgetVerticalListHeightBehavior": {},
        "PageLayoutWidgetVerticalListPosition": {
            "heightBehavior": [
                400
            ],
            "index": [
                10
            ],
            "layoutMode": [
                394
            ],
            "__typename": [
                1
            ]
        },
        "PathCommandMenuItemPayload": {
            "path": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PermissionFlag": {
            "applicationId": [
                520
            ],
            "createdAt": [
                207
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "id": [
                520
            ],
            "key": [
                1
            ],
            "label": [
                1
            ],
            "permissionType": [
                1
            ],
            "universalIdentifier": [
                520
            ],
            "updatedAt": [
                207
            ],
            "__typename": [
                1
            ]
        },
        "PermissionFlagType": {},
        "PieChartConfiguration": {
            "aggregateFieldMetadataId": [
                520
            ],
            "aggregateOperation": [
                26
            ],
            "color": [
                1
            ],
            "configurationType": [
                647
            ],
            "dateGranularity": [
                385
            ],
            "description": [
                1
            ],
            "displayDataLabel": [
                4
            ],
            "displayLegend": [
                4
            ],
            "filter": [
                310
            ],
            "firstDayOfTheWeek": [
                10
            ],
            "groupByFieldMetadataId": [
                520
            ],
            "groupBySubFieldName": [
                1
            ],
            "hideEmptyCategory": [
                4
            ],
            "manualSortOrder": [
                1
            ],
            "numberFormat": [
                139
            ],
            "orderBy": [
                290
            ],
            "showCenterMetric": [
                4
            ],
            "splitMultiValueFields": [
                4
            ],
            "timezone": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PieChartData": {
            "data": [
                408
            ],
            "formattedToRawLookup": [
                310
            ],
            "hasTooManyGroups": [
                4
            ],
            "showCenterMetric": [
                4
            ],
            "showDataLabels": [
                4
            ],
            "showLegend": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "PieChartDataInput": {
            "configuration": [
                310
            ],
            "objectMetadataId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "PieChartDataItem": {
            "key": [
                1
            ],
            "value": [
                6
            ],
            "__typename": [
                1
            ]
        },
        "PlaceDetailsResult": {
            "city": [
                1
            ],
            "country": [
                1
            ],
            "location": [
                321
            ],
            "postcode": [
                1
            ],
            "state": [
                1
            ],
            "street": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PreviewMessageCampaignAudienceInput": {
            "listId": [
                1
            ],
            "unsubscribeTopicId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PreviewMessageCampaignSendInput": {
            "campaignId": [
                1
            ],
            "scheduledAt": [
                207
            ],
            "__typename": [
                1
            ]
        },
        "PreviewMessageCampaignSendOutputDTO": {
            "audience": [
                133
            ],
            "blockers": [
                338
            ],
            "__typename": [
                1
            ]
        },
        "PublicApplicationRegistration": {
            "id": [
                520
            ],
            "logoUrl": [
                1
            ],
            "name": [
                1
            ],
            "oAuthScopes": [
                1
            ],
            "websiteUrl": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PublicConnectionParametersOutput": {
            "connectionSecurity": [
                234
            ],
            "host": [
                1
            ],
            "port": [
                6
            ],
            "username": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PublicDomain": {
            "applicationId": [
                520
            ],
            "createdAt": [
                207
            ],
            "domain": [
                1
            ],
            "id": [
                520
            ],
            "isValidated": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "PublicFeatureFlag": {
            "key": [
                261
            ],
            "metadata": [
                417
            ],
            "__typename": [
                1
            ]
        },
        "PublicFeatureFlagMetadata": {
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "imagePath": [
                1
            ],
            "label": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PublicImapSmtpCaldavConnectionParameters": {
            "CALDAV": [
                414
            ],
            "IMAP": [
                414
            ],
            "SMTP": [
                414
            ],
            "__typename": [
                1
            ]
        },
        "PublicWorkspaceData": {
            "authBypassProviders": [
                79
            ],
            "authProviders": [
                80
            ],
            "displayName": [
                1
            ],
            "id": [
                520
            ],
            "logo": [
                1
            ],
            "workspaceUrls": [
                670
            ],
            "__typename": [
                1
            ]
        },
        "PublicWorkspaceDataSummary": {
            "displayName": [
                1
            ],
            "id": [
                520
            ],
            "logo": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "Query": {
            "agentChatChannelRoles": [
                8
            ],
            "agentChatChannelSummaries": [
                9
            ],
            "agentChatChannelThreadIds": [
                11,
                {
                    "after": [
                        1
                    ],
                    "assignment": [
                        7
                    ],
                    "channelId": [
                        520,
                        "UUID!"
                    ],
                    "first": [
                        10
                    ],
                    "status": [
                        12
                    ]
                }
            ],
            "agentChatChannels": [
                5
            ],
            "agentChatOpenThreadsSummary": [
                15
            ],
            "agentRuns": [
                23,
                {
                    "agentId": [
                        520,
                        "UUID!"
                    ],
                    "limit": [
                        10,
                        "Int!"
                    ]
                }
            ],
            "aiChatUsage": [
                27
            ],
            "aiChatUserCreditsUsage": [
                28
            ],
            "apiKey": [
                36,
                {
                    "input": [
                        286,
                        "GetApiKeyInput!"
                    ]
                }
            ],
            "apiKeys": [
                36
            ],
            "appConnection": [
                39,
                {
                    "id": [
                        17,
                        "ID!"
                    ]
                }
            ],
            "appConnections": [
                39,
                {
                    "filter": [
                        319
                    ]
                }
            ],
            "appKeyValue": [
                40,
                {
                    "key": [
                        1,
                        "String!"
                    ],
                    "scope": [
                        41
                    ]
                }
            ],
            "appMessageChannels": [
                339,
                {
                    "filter": [
                        320
                    ]
                }
            ],
            "applicationConnectedAccounts": [
                47,
                {
                    "applicationId": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "applicationConnectionProviders": [
                48,
                {
                    "applicationId": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "applicationCoreGraphqlSchema": [
                1,
                {
                    "applicationUniversalIdentifier": [
                        1,
                        "String!"
                    ]
                }
            ],
            "applicationRegistrationTarballUrl": [
                1,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "applicationSdkClientChecksums": [
                462,
                {
                    "applicationId": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "barChartData": [
                91,
                {
                    "input": [
                        92,
                        "BarChartDataInput!"
                    ]
                }
            ],
            "billingPortalSession": [
                115,
                {
                    "forPaymentMethodUpdate": [
                        4
                    ],
                    "returnUrlPath": [
                        1
                    ]
                }
            ],
            "callRecordingIdForCalendarEvent": [
                520,
                {
                    "calendarEventId": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "chatMessages": [
                20,
                {
                    "threadId": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "chatStreamCatchupChunks": [
                141,
                {
                    "threadId": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "chatThread": [
                16,
                {
                    "id": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "checkUserExists": [
                144,
                {
                    "captchaToken": [
                        1
                    ],
                    "email": [
                        1,
                        "String!"
                    ]
                }
            ],
            "checkWorkspaceInviteHashIsValid": [
                660,
                {
                    "inviteHash": [
                        1,
                        "String!"
                    ]
                }
            ],
            "checkWorkspaceSubdomainAvailability": [
                491,
                {
                    "subdomain": [
                        1,
                        "String!"
                    ]
                }
            ],
            "commandMenuItem": [
                152,
                {
                    "id": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "commandMenuItems": [
                152
            ],
            "currentUser": [
                617
            ],
            "currentUserApplicationAuthorizations": [
                45
            ],
            "currentUserSessions": [
                620
            ],
            "currentWorkspace": [
                652
            ],
            "enterpriseCheckoutSession": [
                1,
                {
                    "billingInterval": [
                        1
                    ]
                }
            ],
            "enterprisePortalSession": [
                1,
                {
                    "returnUrlPath": [
                        1
                    ]
                }
            ],
            "enterpriseSubscriptionStatus": [
                248
            ],
            "eventLogs": [
                255,
                {
                    "input": [
                        254,
                        "EventLogQueryInput!"
                    ]
                }
            ],
            "exportApplication": [
                50,
                {
                    "universalIdentifier": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "field": [
                262,
                {
                    "id": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "fields": [
                264,
                {
                    "filter": [
                        267,
                        "FieldFilter!"
                    ],
                    "paging": [
                        205,
                        "CursorPaging!"
                    ]
                }
            ],
            "findApplicationRegistrationByClientId": [
                413,
                {
                    "clientId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "findApplicationRegistrationByUniversalIdentifier": [
                70,
                {
                    "universalIdentifier": [
                        1,
                        "String!"
                    ]
                }
            ],
            "findApplicationRegistrationMonitoring": [
                62,
                {
                    "id": [
                        1,
                        "String!"
                    ],
                    "periodEnd": [
                        207
                    ],
                    "periodStart": [
                        207
                    ]
                }
            ],
            "findApplicationRegistrationStats": [
                72,
                {
                    "id": [
                        1,
                        "String!"
                    ],
                    "periodEnd": [
                        207
                    ],
                    "periodStart": [
                        207
                    ]
                }
            ],
            "findApplicationRegistrationVariables": [
                74,
                {
                    "applicationRegistrationId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "findClaimableApplicationRegistration": [
                145,
                {
                    "sourcePackage": [
                        1
                    ],
                    "universalIdentifier": [
                        1
                    ]
                }
            ],
            "findInstallApplicationJobStatus": [
                313,
                {
                    "jobId": [
                        1
                    ],
                    "universalIdentifier": [
                        1,
                        "String!"
                    ]
                }
            ],
            "findManyAgents": [
                3
            ],
            "findManyApplicationRegistrations": [
                70
            ],
            "findManyApplications": [
                44
            ],
            "findManyLogicFunctions": [
                322
            ],
            "findManyMarketplaceApps": [
                330,
                {
                    "universalIdentifiers": [
                        1,
                        "[String!]"
                    ]
                }
            ],
            "findManyPublicDomains": [
                415
            ],
            "findMarketplaceAppDetail": [
                331,
                {
                    "universalIdentifier": [
                        1,
                        "String!"
                    ]
                }
            ],
            "findOneAgent": [
                3,
                {
                    "input": [
                        19,
                        "AgentIdInput!"
                    ]
                }
            ],
            "findOneApplication": [
                44,
                {
                    "id": [
                        520
                    ],
                    "universalIdentifier": [
                        520
                    ]
                }
            ],
            "findOneApplicationRegistration": [
                70,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "findOneLogicFunction": [
                322,
                {
                    "input": [
                        326,
                        "LogicFunctionIdInput!"
                    ]
                }
            ],
            "findUninstallApplicationJobStatus": [
                313,
                {
                    "jobId": [
                        1
                    ],
                    "universalIdentifier": [
                        1,
                        "String!"
                    ]
                }
            ],
            "findUpgradeApplicationJobStatus": [
                313,
                {
                    "jobId": [
                        1
                    ],
                    "universalIdentifier": [
                        1,
                        "String!"
                    ]
                }
            ],
            "findWorkspaceAiStats": [
                654
            ],
            "findWorkspaceFromInviteHash": [
                652,
                {
                    "inviteHash": [
                        1,
                        "String!"
                    ]
                }
            ],
            "findWorkspaceInvitations": [
                659
            ],
            "frontComponent": [
                282,
                {
                    "id": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "frontComponents": [
                282
            ],
            "getAddressDetails": [
                409,
                {
                    "placeId": [
                        1,
                        "String!"
                    ],
                    "token": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getAiSystemPromptPreview": [
                30
            ],
            "getApiKeyRoles": [
                444
            ],
            "getApprovedAccessDomains": [
                78
            ],
            "getAutoCompleteAddress": [
                85,
                {
                    "address": [
                        1,
                        "String!"
                    ],
                    "country": [
                        1
                    ],
                    "isFieldCity": [
                        4
                    ],
                    "token": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getAvailablePackages": [
                310,
                {
                    "input": [
                        326,
                        "LogicFunctionIdInput!"
                    ]
                }
            ],
            "getConnectedImapSmtpCaldavAccount": [
                158,
                {
                    "id": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "getEmailingDomains": [
                237
            ],
            "getInviteSuggestions": [
                309
            ],
            "getJobs": [
                313,
                {
                    "jobIds": [
                        1,
                        "[String!]!"
                    ]
                }
            ],
            "getLogicFunctionSourceCode": [
                1,
                {
                    "input": [
                        326,
                        "LogicFunctionIdInput!"
                    ]
                }
            ],
            "getPageLayout": [
                392,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getPageLayoutTab": [
                393,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getPageLayoutTabs": [
                393,
                {
                    "pageLayoutId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getPageLayoutWidget": [
                396,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getPageLayoutWidgets": [
                396,
                {
                    "pageLayoutTabId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getPageLayouts": [
                392,
                {
                    "objectMetadataId": [
                        1
                    ],
                    "pageLayoutType": [
                        395
                    ]
                }
            ],
            "getPermissionFlags": [
                403
            ],
            "getPublicWorkspaceDataByDomain": [
                419,
                {
                    "origin": [
                        1
                    ]
                }
            ],
            "getPublicWorkspaceDataById": [
                420,
                {
                    "id": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "getResourceCreditUsage": [
                114
            ],
            "getRole": [
                444,
                {
                    "id": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "getRoles": [
                444
            ],
            "getSSOIdentityProviders": [
                279
            ],
            "getToolIndex": [
                502
            ],
            "getToolInputSchema": [
                310,
                {
                    "toolName": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getUsageAnalytics": [
                601,
                {
                    "input": [
                        602
                    ]
                }
            ],
            "getView": [
                629,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getViewField": [
                632,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getViewFieldGroup": [
                633,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getViewFieldGroups": [
                633,
                {
                    "viewId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getViewFields": [
                632,
                {
                    "viewId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getViewFilter": [
                634,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getViewFilterGroup": [
                635,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getViewFilterGroups": [
                635,
                {
                    "viewId": [
                        1
                    ]
                }
            ],
            "getViewFilters": [
                634,
                {
                    "viewId": [
                        1
                    ]
                }
            ],
            "getViewGroup": [
                638,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getViewGroups": [
                638,
                {
                    "viewId": [
                        1
                    ]
                }
            ],
            "getViewSort": [
                641,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getViewSorts": [
                641,
                {
                    "viewId": [
                        1
                    ]
                }
            ],
            "getViews": [
                629,
                {
                    "objectMetadataId": [
                        1
                    ],
                    "viewTypes": [
                        643,
                        "[ViewType!]"
                    ]
                }
            ],
            "getWorkspaceCreationDefaults": [
                657
            ],
            "githubClaimAuthorizationUrl": [
                1,
                {
                    "applicationRegistrationId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "isApplicationStopped": [
                4,
                {
                    "applicationUniversalIdentifier": [
                        1,
                        "String!"
                    ]
                }
            ],
            "lineChartData": [
                315,
                {
                    "input": [
                        316,
                        "LineChartDataInput!"
                    ]
                }
            ],
            "listPlans": [
                105
            ],
            "messageSuppressions": [
                351,
                {
                    "input": [
                        280,
                        "FindMessageSuppressionsInput!"
                    ]
                }
            ],
            "metadataTranslations": [
                357,
                {
                    "input": [
                        360,
                        "MetadataTranslationsInput!"
                    ]
                }
            ],
            "minimalMetadata": [
                362
            ],
            "mostlyEmptyFieldMetadataIds": [
                520,
                {
                    "objectMetadataId": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "myApplicationPreferences": [
                69
            ],
            "myCalendarChannels": [
                125,
                {
                    "connectedAccountId": [
                        520
                    ]
                }
            ],
            "myConnectedAccounts": [
                156
            ],
            "myMessageChannels": [
                339,
                {
                    "connectedAccountId": [
                        520
                    ]
                }
            ],
            "myMessageFolders": [
                346,
                {
                    "messageChannelId": [
                        520
                    ]
                }
            ],
            "myUserApplicationVariables": [
                662
            ],
            "navigationMenuItem": [
                368,
                {
                    "id": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "navigationMenuItems": [
                368
            ],
            "object": [
                371,
                {
                    "id": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "objectRecordCounts": [
                381
            ],
            "objects": [
                372,
                {
                    "filter": [
                        375,
                        "ObjectFilter!"
                    ],
                    "paging": [
                        205,
                        "CursorPaging!"
                    ]
                }
            ],
            "pieChartData": [
                406,
                {
                    "input": [
                        407,
                        "PieChartDataInput!"
                    ]
                }
            ],
            "previewMessageCampaignAudience": [
                133,
                {
                    "input": [
                        410,
                        "PreviewMessageCampaignAudienceInput!"
                    ]
                }
            ],
            "previewMessageCampaignSend": [
                412,
                {
                    "input": [
                        411,
                        "PreviewMessageCampaignSendInput!"
                    ]
                }
            ],
            "publicMarketplaceAppDetail": [
                331,
                {
                    "universalIdentifier": [
                        1,
                        "String!"
                    ]
                }
            ],
            "publicMarketplaceApps": [
                330,
                {
                    "isVetted": [
                        4,
                        "Boolean!"
                    ]
                }
            ],
            "recordPermissions": [
                426,
                {
                    "targets": [
                        436,
                        "[RecordTargetInput!]!"
                    ]
                }
            ],
            "recordSharing": [
                431,
                {
                    "target": [
                        436,
                        "RecordTargetInput!"
                    ]
                }
            ],
            "skill": [
                487,
                {
                    "id": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "skills": [
                487
            ],
            "timelineActivityTypes": [
                498
            ],
            "twoFactorAuthenticationRecoveryStatus": [
                519,
                {
                    "userId": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "unsubscribeTopics": [
                523
            ],
            "usageLimits": [
                604
            ],
            "usageQuotaDefinitions": [
                608
            ],
            "usageQuotaScopeConsumption": [
                610,
                {
                    "input": [
                        611,
                        "UsageQuotaScopeInput!"
                    ]
                }
            ],
            "usageQuotasWithConsumption": [
                612
            ],
            "validatePasswordResetToken": [
                623,
                {
                    "passwordResetToken": [
                        1,
                        "String!"
                    ]
                }
            ],
            "validationRules": [
                624,
                {
                    "objectMetadataId": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "webhook": [
                645,
                {
                    "id": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "webhooks": [
                645
            ],
            "__typename": [
                1
            ]
        },
        "RatioAggregateConfig": {
            "fieldMetadataId": [
                520
            ],
            "optionValue": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RecordExport": {
            "downloadPath": [
                1
            ],
            "errorMessage": [
                1
            ],
            "filename": [
                1
            ],
            "id": [
                520
            ],
            "progress": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "RecordIdentifier": {
            "id": [
                520
            ],
            "imageIdentifier": [
                1
            ],
            "labelIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RecordPermissionsDTO": {
            "canDelete": [
                4
            ],
            "canRead": [
                4
            ],
            "canSoftDelete": [
                4
            ],
            "canUpdate": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "RecordPermissionsResult": {
            "objectMetadataId": [
                520
            ],
            "permissions": [
                425
            ],
            "recordId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "RecordShareAccessLevel": {},
        "RecordSharePrincipalInput": {
            "roleId": [
                520
            ],
            "workspaceMemberId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "RecordSharePrincipalType": {},
        "RecordShareRowCause": {},
        "RecordSharingDTO": {
            "canManageSharing": [
                4
            ],
            "defaultGeneralAccessLevel": [
                427
            ],
            "generalAccessLevel": [
                427
            ],
            "hasManagedGeneralAccess": [
                4
            ],
            "permissions": [
                425
            ],
            "roles": [
                434
            ],
            "shares": [
                432
            ],
            "sharingMode": [
                433
            ],
            "__typename": [
                1
            ]
        },
        "RecordSharingGrantDTO": {
            "accessLevel": [
                427
            ],
            "id": [
                17
            ],
            "principalId": [
                520
            ],
            "principalRoleId": [
                520
            ],
            "principalType": [
                429
            ],
            "rowCause": [
                430
            ],
            "__typename": [
                1
            ]
        },
        "RecordSharingMode": {},
        "RecordSharingRoleDTO": {
            "canRead": [
                4
            ],
            "canUpdate": [
                4
            ],
            "id": [
                520
            ],
            "label": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RecordTableConfiguration": {
            "configurationType": [
                647
            ],
            "isUIEditable": [
                4
            ],
            "recordLimit": [
                10
            ],
            "viewId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RecordTargetInput": {
            "objectMetadataId": [
                520
            ],
            "recordId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "Relation": {
            "sourceFieldMetadata": [
                262
            ],
            "sourceObjectMetadata": [
                371
            ],
            "targetFieldMetadata": [
                262
            ],
            "targetObjectMetadata": [
                371
            ],
            "type": [
                438
            ],
            "__typename": [
                1
            ]
        },
        "RelationType": {},
        "RemoveQueryFromEventStreamInput": {
            "eventStreamId": [
                1
            ],
            "queryId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ReportAppConnectionAuthFailureInput": {
            "id": [
                17
            ],
            "reason": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ResendEmailVerificationToken": {
            "success": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "RevokeApiKeyInput": {
            "id": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "RichTextBody": {
            "blocknote": [
                1
            ],
            "markdown": [
                1
            ],
            "tiptap": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "Role": {
            "agents": [
                3
            ],
            "apiKeys": [
                37
            ],
            "applicationId": [
                520
            ],
            "canAccessAllAgentChatChannels": [
                4
            ],
            "canAccessAllTools": [
                4
            ],
            "canBeAssignedToAgents": [
                4
            ],
            "canBeAssignedToApiKeys": [
                4
            ],
            "canBeAssignedToUsers": [
                4
            ],
            "canDestroyAllObjectRecords": [
                4
            ],
            "canReadAllObjectRecords": [
                4
            ],
            "canSoftDeleteAllObjectRecords": [
                4
            ],
            "canUpdateAllObjectRecords": [
                4
            ],
            "canUpdateAllSettings": [
                4
            ],
            "description": [
                1
            ],
            "fieldPermissions": [
                269
            ],
            "icon": [
                1
            ],
            "id": [
                520
            ],
            "isEditable": [
                4
            ],
            "label": [
                1
            ],
            "objectPermissions": [
                379
            ],
            "permissionFlags": [
                445
            ],
            "rowLevelPermissionPredicateGroups": [
                448
            ],
            "rowLevelPermissionPredicates": [
                447
            ],
            "universalIdentifier": [
                520
            ],
            "workspaceMembers": [
                661
            ],
            "__typename": [
                1
            ]
        },
        "RolePermissionFlag": {
            "flag": [
                1
            ],
            "id": [
                520
            ],
            "roleId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "RotateClientSecret": {
            "clientSecret": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RowLevelPermissionPredicate": {
            "fieldMetadataId": [
                1
            ],
            "id": [
                1
            ],
            "objectMetadataId": [
                1
            ],
            "operand": [
                452
            ],
            "positionInRowLevelPermissionPredicateGroup": [
                6
            ],
            "roleId": [
                1
            ],
            "rowLevelPermissionPredicateGroupId": [
                1
            ],
            "subFieldName": [
                1
            ],
            "value": [
                310
            ],
            "workspaceMemberFieldMetadataId": [
                1
            ],
            "workspaceMemberSubFieldName": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RowLevelPermissionPredicateGroup": {
            "id": [
                1
            ],
            "logicalOperator": [
                450
            ],
            "objectMetadataId": [
                1
            ],
            "parentRowLevelPermissionPredicateGroupId": [
                1
            ],
            "positionInRowLevelPermissionPredicateGroup": [
                6
            ],
            "roleId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RowLevelPermissionPredicateGroupInput": {
            "id": [
                520
            ],
            "logicalOperator": [
                450
            ],
            "objectMetadataId": [
                520
            ],
            "parentRowLevelPermissionPredicateGroupId": [
                520
            ],
            "positionInRowLevelPermissionPredicateGroup": [
                6
            ],
            "__typename": [
                1
            ]
        },
        "RowLevelPermissionPredicateGroupLogicalOperator": {},
        "RowLevelPermissionPredicateInput": {
            "fieldMetadataId": [
                520
            ],
            "id": [
                520
            ],
            "operand": [
                452
            ],
            "positionInRowLevelPermissionPredicateGroup": [
                6
            ],
            "rowLevelPermissionPredicateGroupId": [
                520
            ],
            "subFieldName": [
                1
            ],
            "value": [
                310
            ],
            "workspaceMemberFieldMetadataId": [
                1
            ],
            "workspaceMemberSubFieldName": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RowLevelPermissionPredicateOperand": {},
        "RunAgentInput": {
            "additionalInstructions": [
                1
            ],
            "agentUniversalIdentifier": [
                1
            ],
            "input": [
                455
            ],
            "messages": [
                455
            ],
            "prompt": [
                1
            ],
            "responseFormat": [
                310
            ],
            "runAsWorkspaceMemberId": [
                520
            ],
            "thread": [
                458
            ],
            "waitForCompletion": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "RunAgentMessageAttachmentInput": {
            "fileId": [
                520
            ],
            "filename": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RunAgentMessageInput": {
            "attachments": [
                454
            ],
            "content": [
                1
            ],
            "role": [
                456
            ],
            "__typename": [
                1
            ]
        },
        "RunAgentMessageRole": {},
        "RunAgentResult": {
            "error": [
                1
            ],
            "result": [
                310
            ],
            "status": [
                1
            ],
            "success": [
                4
            ],
            "threadId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "RunAgentThreadInput": {
            "key": [
                1
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SSOConnection": {
            "id": [
                520
            ],
            "issuer": [
                1
            ],
            "name": [
                1
            ],
            "status": [
                461
            ],
            "type": [
                292
            ],
            "__typename": [
                1
            ]
        },
        "SSOIdentityProvider": {
            "id": [
                520
            ],
            "issuer": [
                1
            ],
            "name": [
                1
            ],
            "status": [
                461
            ],
            "type": [
                292
            ],
            "__typename": [
                1
            ]
        },
        "SSOIdentityProviderStatus": {},
        "SdkClientChecksums": {
            "core": [
                1
            ],
            "metadata": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SearchField": {
            "createdAt": [
                207
            ],
            "fieldMetadataId": [
                520
            ],
            "id": [
                520
            ],
            "position": [
                6
            ],
            "tsVectorFieldMetadataId": [
                520
            ],
            "updatedAt": [
                207
            ],
            "__typename": [
                1
            ]
        },
        "SendAppChannelMessageInput": {
            "idempotencyKey": [
                520
            ],
            "messageChannelId": [
                520
            ],
            "messageThreadId": [
                520
            ],
            "text": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SendAppChannelMessageOutput": {
            "messageId": [
                520
            ],
            "messageThreadId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "SendChatMessageResult": {
            "mentionedParticipantWorkspaceMemberIds": [
                520
            ],
            "messageId": [
                1
            ],
            "queued": [
                4
            ],
            "streamId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SendEmailAttachmentInput": {
            "id": [
                1
            ],
            "name": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SendEmailInput": {
            "bcc": [
                1
            ],
            "body": [
                1
            ],
            "cc": [
                1
            ],
            "connectedAccountId": [
                1
            ],
            "draftMessageId": [
                1
            ],
            "files": [
                467
            ],
            "fromHandle": [
                1
            ],
            "inReplyTo": [
                1
            ],
            "subject": [
                1
            ],
            "targetRecord": [
                470
            ],
            "to": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SendEmailOutput": {
            "error": [
                1
            ],
            "messageThreadId": [
                1
            ],
            "success": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "SendEmailTargetRecordInput": {
            "objectNameSingular": [
                1
            ],
            "recordId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "SendEmailViaDomainOutput": {
            "messageId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SendInboxMessageInput": {
            "idempotencyKey": [
                1
            ],
            "text": [
                1
            ],
            "threadKey": [
                1
            ],
            "title": [
                1
            ],
            "toolCall": [
                310
            ],
            "workspaceMemberIds": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "SendInboxMessageResult": {
            "threadId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "SendInvitations": {
            "errors": [
                1
            ],
            "result": [
                659
            ],
            "success": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "SendMessageCampaignInput": {
            "campaignId": [
                1
            ],
            "scheduledAt": [
                207
            ],
            "__typename": [
                1
            ]
        },
        "SendMessageCampaignOutputDTO": {
            "audience": [
                133
            ],
            "campaignId": [
                1
            ],
            "queuedCount": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "SendMessageCampaignTestInput": {
            "body": [
                1
            ],
            "fromAddress": [
                1
            ],
            "subject": [
                1
            ],
            "toAddress": [
                1
            ],
            "unsubscribeTopicId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "Sentry": {
            "dsn": [
                1
            ],
            "environment": [
                1
            ],
            "release": [
                1
            ],
            "tracesSampleRate": [
                6
            ],
            "__typename": [
                1
            ]
        },
        "SetAppKeyValueInput": {
            "key": [
                1
            ],
            "scope": [
                41
            ],
            "value": [
                310
            ],
            "__typename": [
                1
            ]
        },
        "SettingsMenuItem": {
            "applicationId": [
                520
            ],
            "createdAt": [
                207
            ],
            "frontComponentId": [
                520
            ],
            "icon": [
                1
            ],
            "id": [
                520
            ],
            "position": [
                6
            ],
            "scope": [
                481
            ],
            "title": [
                1
            ],
            "universalIdentifier": [
                520
            ],
            "updatedAt": [
                207
            ],
            "__typename": [
                1
            ]
        },
        "SettingsMenuItemScope": {},
        "SetupOIDCSsoInput": {
            "clientID": [
                1
            ],
            "clientSecret": [
                1
            ],
            "issuer": [
                1
            ],
            "name": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SetupSAMLSsoInput": {
            "certificate": [
                1
            ],
            "fingerprint": [
                1
            ],
            "id": [
                520
            ],
            "issuer": [
                1
            ],
            "name": [
                1
            ],
            "ssoURL": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SetupSso": {
            "id": [
                520
            ],
            "issuer": [
                1
            ],
            "name": [
                1
            ],
            "status": [
                461
            ],
            "type": [
                292
            ],
            "__typename": [
                1
            ]
        },
        "SignUp": {
            "loginToken": [
                81
            ],
            "workspace": [
                671
            ],
            "__typename": [
                1
            ]
        },
        "SignUpInNewWorkspaceInput": {
            "displayName": [
                1
            ],
            "partner": [
                1
            ],
            "subdomain": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "Skill": {
            "applicationId": [
                520
            ],
            "content": [
                1
            ],
            "createdAt": [
                207
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "id": [
                520
            ],
            "isActive": [
                4
            ],
            "isCustom": [
                4
            ],
            "isSystem": [
                4
            ],
            "label": [
                1
            ],
            "name": [
                1
            ],
            "updatedAt": [
                207
            ],
            "__typename": [
                1
            ]
        },
        "StandaloneRichTextConfiguration": {
            "body": [
                443
            ],
            "configurationType": [
                647
            ],
            "__typename": [
                1
            ]
        },
        "StartWorkspaceSetupChatResult": {
            "outcome": [
                669
            ],
            "thread": [
                16
            ],
            "__typename": [
                1
            ]
        },
        "StopImpersonation": {
            "canRestoreImpersonatorSession": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "SubdomainAvailabilityDTO": {
            "available": [
                4
            ],
            "isValid": [
                4
            ],
            "suggestedSubdomain": [
                1
            ],
            "suggestedSubdomains": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "Subscription": {
            "eventLogsLive": [
                256,
                {
                    "fieldFilters": [
                        250,
                        "[EventLogFieldFilterInput!]"
                    ],
                    "table": [
                        257,
                        "EventLogTable!"
                    ]
                }
            ],
            "exportRecords": [
                423,
                {
                    "input": [
                        190,
                        "CreateRecordExportInput!"
                    ]
                }
            ],
            "logicFunctionLogs": [
                327,
                {
                    "input": [
                        328,
                        "LogicFunctionLogsInput!"
                    ]
                }
            ],
            "onAgentChatEvent": [
                13,
                {
                    "threadId": [
                        520,
                        "UUID!"
                    ]
                }
            ],
            "onEventSubscription": [
                258,
                {
                    "eventStreamId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "SubscriptionInterval": {},
        "SubscriptionStatus": {},
        "Support": {
            "supportDriver": [
                496
            ],
            "supportFrontChatId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SupportDriver": {},
        "TasksConfiguration": {
            "configurationType": [
                647
            ],
            "__typename": [
                1
            ]
        },
        "TimelineActivityType": {
            "action": [
                1
            ],
            "applicationId": [
                520
            ],
            "createdAt": [
                207
            ],
            "emit": [
                499
            ],
            "frontComponentUniversalIdentifier": [
                520
            ],
            "icon": [
                1
            ],
            "id": [
                520
            ],
            "isActive": [
                4
            ],
            "label": [
                1
            ],
            "name": [
                1
            ],
            "objectUniversalIdentifier": [
                520
            ],
            "replacesTimelineActivityTypeUniversalIdentifier": [
                520
            ],
            "universalIdentifier": [
                520
            ],
            "updatedAt": [
                207
            ],
            "__typename": [
                1
            ]
        },
        "TimelineActivityTypeEmit": {
            "objectUniversalIdentifier": [
                520
            ],
            "on": [
                1
            ],
            "through": [
                500
            ],
            "__typename": [
                1
            ]
        },
        "TimelineActivityTypeEmitThrough": {
            "happensAtFieldUniversalIdentifier": [
                520
            ],
            "relationFieldUniversalIdentifier": [
                520
            ],
            "triggerFieldUniversalIdentifiers": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "TimelineConfiguration": {
            "configurationType": [
                647
            ],
            "__typename": [
                1
            ]
        },
        "ToolIndexEntry": {
            "category": [
                1
            ],
            "description": [
                1
            ],
            "frontComponentId": [
                1
            ],
            "icon": [
                1
            ],
            "inputSchema": [
                310
            ],
            "label": [
                1
            ],
            "name": [
                1
            ],
            "objectName": [
                1
            ],
            "widgetName": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "TransientToken": {
            "transientToken": [
                81
            ],
            "__typename": [
                1
            ]
        },
        "TriggerAddPeopleToMessageListJobInput": {
            "messageListId": [
                520
            ],
            "personFilter": [
                310
            ],
            "__typename": [
                1
            ]
        },
        "TriggerAddPeopleToMessageListJobResult": {
            "jobId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "TriggerInstallApplicationInput": {
            "universalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "TriggerInstallApplicationJobInput": {
            "universalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "TriggerInstallApplicationJobResult": {
            "jobId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "TriggerInstallApplicationResult": {
            "jobId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "TriggerUninstallApplicationInput": {
            "universalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "TriggerUninstallApplicationJobInput": {
            "universalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "TriggerUninstallApplicationJobResult": {
            "jobId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "TriggerUninstallApplicationResult": {
            "jobId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "TriggerUpgradeApplicationInput": {
            "targetVersion": [
                1
            ],
            "universalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "TriggerUpgradeApplicationResult": {
            "jobId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "TwoFactorAuthenticationMethodSummary": {
            "status": [
                1
            ],
            "strategy": [
                1
            ],
            "twoFactorAuthenticationMethodId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "TwoFactorAuthenticationRecoveryCode": {
            "expiresAt": [
                207
            ],
            "recoveryCode": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "TwoFactorAuthenticationRecoveryCodeRedemption": {
            "provisioningUri": [
                1
            ],
            "tokens": [
                82
            ],
            "__typename": [
                1
            ]
        },
        "TwoFactorAuthenticationRecoveryStatus": {
            "hasVerifiedTwoFactorAuthenticationMethod": [
                4
            ],
            "isAwaitingRecoveryEnrollment": [
                4
            ],
            "pendingRecoveryCodeExpiresAt": [
                207
            ],
            "__typename": [
                1
            ]
        },
        "UUID": {},
        "UUIDFilterComparison": {
            "eq": [
                520
            ],
            "gt": [
                520
            ],
            "gte": [
                520
            ],
            "iLike": [
                520
            ],
            "in": [
                520
            ],
            "is": [
                4
            ],
            "isNot": [
                4
            ],
            "like": [
                520
            ],
            "lt": [
                520
            ],
            "lte": [
                520
            ],
            "neq": [
                520
            ],
            "notILike": [
                520
            ],
            "notIn": [
                520
            ],
            "notLike": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "UnsubscribeHostnameStatus": {},
        "UnsubscribeTopic": {
            "createdAt": [
                207
            ],
            "description": [
                1
            ],
            "id": [
                520
            ],
            "name": [
                1
            ],
            "updatedAt": [
                207
            ],
            "visibility": [
                524
            ],
            "__typename": [
                1
            ]
        },
        "UnsubscribeTopicVisibility": {},
        "UpdateAgentChatChannelInput": {
            "color": [
                1
            ],
            "icon": [
                1
            ],
            "name": [
                1
            ],
            "position": [
                6
            ],
            "roleIds": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "UpdateAgentInput": {
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "id": [
                520
            ],
            "label": [
                1
            ],
            "modelConfiguration": [
                310
            ],
            "modelId": [
                1
            ],
            "name": [
                1
            ],
            "prompt": [
                1
            ],
            "responseFormat": [
                310
            ],
            "roleId": [
                520
            ],
            "triggers": [
                310
            ],
            "__typename": [
                1
            ]
        },
        "UpdateApiKeyInput": {
            "expiresAt": [
                1
            ],
            "id": [
                520
            ],
            "name": [
                1
            ],
            "revokedAt": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateAppMessageChannelInput": {
            "displayName": [
                1
            ],
            "id": [
                520
            ],
            "isSyncEnabled": [
                4
            ],
            "messagingProviderUniversalIdentifier": [
                520
            ],
            "visibility": [
                345
            ],
            "__typename": [
                1
            ]
        },
        "UpdateApplicationInput": {
            "autoUpgrade": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "UpdateApplicationRegistrationInput": {
            "id": [
                1
            ],
            "update": [
                531
            ],
            "__typename": [
                1
            ]
        },
        "UpdateApplicationRegistrationPayload": {
            "name": [
                1
            ],
            "oAuthRedirectUris": [
                1
            ],
            "oAuthScopes": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateApplicationRegistrationVariableInput": {
            "id": [
                1
            ],
            "update": [
                533
            ],
            "__typename": [
                1
            ]
        },
        "UpdateApplicationRegistrationVariablePayload": {
            "description": [
                1
            ],
            "resetValue": [
                4
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateCalendarChannelInput": {
            "id": [
                520
            ],
            "update": [
                535
            ],
            "__typename": [
                1
            ]
        },
        "UpdateCalendarChannelInputUpdates": {
            "contactAutoCreationPolicy": [
                126
            ],
            "excludePrivateEvents": [
                4
            ],
            "isContactAutoCreationEnabled": [
                4
            ],
            "isSyncEnabled": [
                4
            ],
            "visibility": [
                129
            ],
            "__typename": [
                1
            ]
        },
        "UpdateCommandMenuItemInput": {
            "availabilityObjectMetadataId": [
                520
            ],
            "availabilityType": [
                153
            ],
            "engineComponentKey": [
                241
            ],
            "hotKeys": [
                1
            ],
            "icon": [
                1
            ],
            "id": [
                520
            ],
            "isPinned": [
                4
            ],
            "label": [
                1
            ],
            "pageLayoutId": [
                520
            ],
            "position": [
                6
            ],
            "shortLabel": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEmailGroupChannelInput": {
            "displayName": [
                1
            ],
            "id": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "UpdateFieldInput": {
            "defaultValue": [
                310
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "isActive": [
                4
            ],
            "isAuditLogged": [
                4
            ],
            "isLabelSyncedWithName": [
                4
            ],
            "isNullable": [
                4
            ],
            "isSearchable": [
                4
            ],
            "isSystem": [
                4
            ],
            "isUIEditable": [
                4
            ],
            "isUIReadOnly": [
                4
            ],
            "isUnique": [
                4
            ],
            "label": [
                1
            ],
            "morphRelationsUpdatePayload": [
                310
            ],
            "name": [
                1
            ],
            "objectMetadataId": [
                520
            ],
            "options": [
                310
            ],
            "settings": [
                310
            ],
            "translations": [
                358
            ],
            "universalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateFrontComponentInput": {
            "id": [
                520
            ],
            "update": [
                540
            ],
            "__typename": [
                1
            ]
        },
        "UpdateFrontComponentInputUpdates": {
            "description": [
                1
            ],
            "name": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateLabPublicFeatureFlagInput": {
            "publicFeatureFlag": [
                1
            ],
            "value": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "UpdateLogicFunctionFromSourceInput": {
            "id": [
                520
            ],
            "update": [
                543
            ],
            "__typename": [
                1
            ]
        },
        "UpdateLogicFunctionFromSourceInputUpdates": {
            "cronTriggerSettings": [
                310
            ],
            "databaseEventTriggerSettings": [
                310
            ],
            "description": [
                1
            ],
            "handlerName": [
                1
            ],
            "httpRouteTriggerSettings": [
                310
            ],
            "name": [
                1
            ],
            "sourceHandlerCode": [
                1
            ],
            "sourceHandlerPath": [
                1
            ],
            "timeoutSeconds": [
                6
            ],
            "toolTriggerSettings": [
                310
            ],
            "workflowActionTriggerSettings": [
                310
            ],
            "__typename": [
                1
            ]
        },
        "UpdateMessageChannelInput": {
            "id": [
                520
            ],
            "update": [
                545
            ],
            "__typename": [
                1
            ]
        },
        "UpdateMessageChannelInputUpdates": {
            "contactAutoCreationPolicy": [
                340
            ],
            "excludeGroupEmails": [
                4
            ],
            "excludeNonProfessionalEmails": [
                4
            ],
            "isContactAutoCreationEnabled": [
                4
            ],
            "isSyncEnabled": [
                4
            ],
            "messageFolderImportPolicy": [
                347
            ],
            "visibility": [
                345
            ],
            "__typename": [
                1
            ]
        },
        "UpdateMessageFolderInput": {
            "id": [
                520
            ],
            "update": [
                547
            ],
            "__typename": [
                1
            ]
        },
        "UpdateMessageFolderInputUpdates": {
            "isSynced": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "UpdateMessageFoldersInput": {
            "ids": [
                520
            ],
            "update": [
                547
            ],
            "__typename": [
                1
            ]
        },
        "UpdateNavigationMenuItemInput": {
            "color": [
                1
            ],
            "folderId": [
                520
            ],
            "icon": [
                1
            ],
            "link": [
                1
            ],
            "name": [
                1
            ],
            "pageLayoutId": [
                520
            ],
            "position": [
                6
            ],
            "__typename": [
                1
            ]
        },
        "UpdateObjectPayload": {
            "color": [
                1
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "imageIdentifierFieldMetadataId": [
                520
            ],
            "isActive": [
                4
            ],
            "isLabelSyncedWithName": [
                4
            ],
            "isSearchable": [
                4
            ],
            "labelIdentifierFieldMetadataId": [
                520
            ],
            "labelPlural": [
                1
            ],
            "labelSingular": [
                1
            ],
            "namePlural": [
                1
            ],
            "nameSingular": [
                1
            ],
            "openRecordIn": [
                378
            ],
            "readability": [
                356
            ],
            "sharingReach": [
                386
            ],
            "shortcut": [
                1
            ],
            "translations": [
                358
            ],
            "__typename": [
                1
            ]
        },
        "UpdateOneFieldMetadataInput": {
            "id": [
                520
            ],
            "update": [
                538
            ],
            "__typename": [
                1
            ]
        },
        "UpdateOneNavigationMenuItemInput": {
            "id": [
                520
            ],
            "update": [
                549
            ],
            "__typename": [
                1
            ]
        },
        "UpdateOneObjectInput": {
            "id": [
                520
            ],
            "update": [
                550
            ],
            "__typename": [
                1
            ]
        },
        "UpdatePageLayoutInput": {
            "name": [
                1
            ],
            "objectMetadataId": [
                520
            ],
            "type": [
                395
            ],
            "__typename": [
                1
            ]
        },
        "UpdatePageLayoutTabInput": {
            "icon": [
                1
            ],
            "layoutMode": [
                394
            ],
            "position": [
                6
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdatePageLayoutTabWithWidgetsInput": {
            "icon": [
                1
            ],
            "id": [
                520
            ],
            "layoutMode": [
                394
            ],
            "position": [
                6
            ],
            "title": [
                1
            ],
            "widgets": [
                558
            ],
            "__typename": [
                1
            ]
        },
        "UpdatePageLayoutWidgetInput": {
            "conditionalAvailabilityExpression": [
                1
            ],
            "conditionalDisplay": [
                310
            ],
            "configuration": [
                310
            ],
            "isActive": [
                4
            ],
            "objectMetadataId": [
                520
            ],
            "pageLayoutTabId": [
                520
            ],
            "position": [
                310
            ],
            "title": [
                1
            ],
            "type": [
                648
            ],
            "__typename": [
                1
            ]
        },
        "UpdatePageLayoutWidgetWithIdInput": {
            "conditionalAvailabilityExpression": [
                1
            ],
            "conditionalDisplay": [
                310
            ],
            "configuration": [
                310
            ],
            "id": [
                520
            ],
            "objectMetadataId": [
                520
            ],
            "pageLayoutTabId": [
                520
            ],
            "position": [
                310
            ],
            "title": [
                1
            ],
            "type": [
                648
            ],
            "__typename": [
                1
            ]
        },
        "UpdatePageLayoutWithTabsInput": {
            "isFirstTabPinned": [
                4
            ],
            "name": [
                1
            ],
            "objectMetadataId": [
                520
            ],
            "tabs": [
                556
            ],
            "type": [
                395
            ],
            "__typename": [
                1
            ]
        },
        "UpdateRoleInput": {
            "id": [
                520
            ],
            "update": [
                561
            ],
            "__typename": [
                1
            ]
        },
        "UpdateRolePayload": {
            "canAccessAllAgentChatChannels": [
                4
            ],
            "canAccessAllTools": [
                4
            ],
            "canBeAssignedToAgents": [
                4
            ],
            "canBeAssignedToApiKeys": [
                4
            ],
            "canBeAssignedToUsers": [
                4
            ],
            "canDestroyAllObjectRecords": [
                4
            ],
            "canReadAllObjectRecords": [
                4
            ],
            "canSoftDeleteAllObjectRecords": [
                4
            ],
            "canUpdateAllObjectRecords": [
                4
            ],
            "canUpdateAllSettings": [
                4
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "label": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateSkillInput": {
            "content": [
                1
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "id": [
                520
            ],
            "isActive": [
                4
            ],
            "label": [
                1
            ],
            "name": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateTimelineActivityTypeInput": {
            "icon": [
                1
            ],
            "id": [
                520
            ],
            "isActive": [
                4
            ],
            "label": [
                1
            ],
            "translations": [
                358
            ],
            "__typename": [
                1
            ]
        },
        "UpdateUnsubscribeTopicInput": {
            "description": [
                1
            ],
            "id": [
                1
            ],
            "name": [
                1
            ],
            "visibility": [
                524
            ],
            "__typename": [
                1
            ]
        },
        "UpdateUsageLimitInput": {
            "id": [
                520
            ],
            "payload": [
                194
            ],
            "__typename": [
                1
            ]
        },
        "UpdateValidationRuleInput": {
            "id": [
                520
            ],
            "update": [
                567
            ],
            "__typename": [
                1
            ]
        },
        "UpdateValidationRuleInputUpdates": {
            "description": [
                1
            ],
            "errorFieldMetadataId": [
                520
            ],
            "expression": [
                1
            ],
            "icon": [
                1
            ],
            "isActive": [
                4
            ],
            "message": [
                1
            ],
            "name": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateViewFieldGroupInput": {
            "id": [
                520
            ],
            "update": [
                569
            ],
            "__typename": [
                1
            ]
        },
        "UpdateViewFieldGroupInputUpdates": {
            "deletedAt": [
                1
            ],
            "isVisible": [
                4
            ],
            "name": [
                1
            ],
            "position": [
                6
            ],
            "__typename": [
                1
            ]
        },
        "UpdateViewFieldInput": {
            "id": [
                520
            ],
            "update": [
                571
            ],
            "__typename": [
                1
            ]
        },
        "UpdateViewFieldInputUpdates": {
            "aggregateOperation": [
                26
            ],
            "isVisible": [
                4
            ],
            "position": [
                6
            ],
            "size": [
                6
            ],
            "viewFieldGroupId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "UpdateViewFilterGroupInput": {
            "id": [
                520
            ],
            "logicalOperator": [
                636
            ],
            "parentViewFilterGroupId": [
                520
            ],
            "positionInViewFilterGroup": [
                6
            ],
            "viewId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "UpdateViewFilterInput": {
            "id": [
                520
            ],
            "update": [
                574
            ],
            "__typename": [
                1
            ]
        },
        "UpdateViewFilterInputUpdates": {
            "fieldMetadataId": [
                520
            ],
            "operand": [
                637
            ],
            "positionInViewFilterGroup": [
                6
            ],
            "relationTargetFieldMetadataId": [
                520
            ],
            "subFieldName": [
                1
            ],
            "value": [
                310
            ],
            "viewFilterGroupId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "UpdateViewGroupInput": {
            "id": [
                520
            ],
            "update": [
                576
            ],
            "__typename": [
                1
            ]
        },
        "UpdateViewGroupInputUpdates": {
            "fieldMetadataId": [
                520
            ],
            "fieldValue": [
                1
            ],
            "isVisible": [
                4
            ],
            "position": [
                6
            ],
            "__typename": [
                1
            ]
        },
        "UpdateViewInput": {
            "anyFieldFilterValue": [
                1
            ],
            "calendarEndFieldMetadataId": [
                520
            ],
            "calendarFieldMetadataId": [
                520
            ],
            "calendarLayout": [
                630
            ],
            "groupLoadLimit": [
                10
            ],
            "icon": [
                1
            ],
            "id": [
                520
            ],
            "isCompact": [
                4
            ],
            "kanbanAggregateOperation": [
                26
            ],
            "kanbanAggregateOperationFieldMetadataId": [
                520
            ],
            "kanbanColumnWidth": [
                10
            ],
            "mainGroupByFieldMetadataId": [
                520
            ],
            "name": [
                1
            ],
            "openRecordIn": [
                640
            ],
            "position": [
                6
            ],
            "shouldHideEmptyGroups": [
                4
            ],
            "type": [
                643
            ],
            "visibility": [
                644
            ],
            "__typename": [
                1
            ]
        },
        "UpdateViewSortInput": {
            "id": [
                520
            ],
            "update": [
                579
            ],
            "__typename": [
                1
            ]
        },
        "UpdateViewSortInputUpdates": {
            "direction": [
                642
            ],
            "subFieldName": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateWebhookInput": {
            "id": [
                520
            ],
            "update": [
                581
            ],
            "__typename": [
                1
            ]
        },
        "UpdateWebhookInputUpdates": {
            "description": [
                1
            ],
            "operations": [
                1
            ],
            "secret": [
                1
            ],
            "targetUrl": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateWorkspaceAllowedIframeOriginsInput": {
            "operation": [
                1
            ],
            "origin": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateWorkspaceIframeMediaPermissionsInput": {
            "camera": [
                4
            ],
            "microphone": [
                4
            ],
            "origin": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateWorkspaceInput": {
            "aiAdditionalInstructions": [
                1
            ],
            "aiAgentModelTier": [
                29
            ],
            "aiChatModelTier": [
                29
            ],
            "aiEvaluationModelId": [
                1
            ],
            "aiModelIdByTier": [
                310
            ],
            "allowImpersonation": [
                4
            ],
            "customDomain": [
                1
            ],
            "defaultRoleId": [
                520
            ],
            "displayName": [
                1
            ],
            "editableProfileFields": [
                1
            ],
            "eventLogRetentionDays": [
                6
            ],
            "inviteHash": [
                1
            ],
            "isAutoModelSelectionEnabled": [
                4
            ],
            "isCampaignClickTrackingEnabled": [
                4
            ],
            "isCampaignOpenTrackingEnabled": [
                4
            ],
            "isGoogleAuthBypassEnabled": [
                4
            ],
            "isGoogleAuthEnabled": [
                4
            ],
            "isInternalMessagesImportEnabled": [
                4
            ],
            "isMicrosoftAuthBypassEnabled": [
                4
            ],
            "isMicrosoftAuthEnabled": [
                4
            ],
            "isPasswordAuthBypassEnabled": [
                4
            ],
            "isPasswordAuthEnabled": [
                4
            ],
            "isPublicInviteLinkEnabled": [
                4
            ],
            "isTwoFactorAuthenticationEnforced": [
                4
            ],
            "logo": [
                1
            ],
            "subdomain": [
                1
            ],
            "trashRetentionDays": [
                6
            ],
            "workspaceDiscoverability": [
                658
            ],
            "__typename": [
                1
            ]
        },
        "UpdateWorkspaceMemberSettingsInput": {
            "update": [
                310
            ],
            "workspaceMemberId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "Upload": {},
        "UpsertFieldPermissionsInput": {
            "fieldPermissions": [
                270
            ],
            "roleId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "UpsertFieldsWidgetFieldInput": {
            "fieldMetadataId": [
                520
            ],
            "isVisible": [
                4
            ],
            "position": [
                6
            ],
            "viewFieldId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "UpsertFieldsWidgetGroupInput": {
            "fields": [
                588
            ],
            "id": [
                520
            ],
            "isVisible": [
                4
            ],
            "name": [
                1
            ],
            "position": [
                6
            ],
            "__typename": [
                1
            ]
        },
        "UpsertFieldsWidgetInput": {
            "fields": [
                588
            ],
            "groups": [
                589
            ],
            "widgetId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "UpsertObjectPermissionsInput": {
            "objectPermissions": [
                380
            ],
            "roleId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "UpsertPermissionFlagsInput": {
            "permissionFlagKeys": [
                1
            ],
            "roleId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "UpsertRowLevelPermissionPredicatesInput": {
            "objectMetadataId": [
                520
            ],
            "predicateGroups": [
                449
            ],
            "predicates": [
                451
            ],
            "roleId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "UpsertRowLevelPermissionPredicatesResult": {
            "predicateGroups": [
                448
            ],
            "predicates": [
                447
            ],
            "__typename": [
                1
            ]
        },
        "UpsertViewWidgetInput": {
            "view": [
                599
            ],
            "viewFields": [
                596
            ],
            "viewFilterGroups": [
                597
            ],
            "viewFilters": [
                598
            ],
            "viewSorts": [
                600
            ],
            "widgetId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "UpsertViewWidgetViewFieldInput": {
            "aggregateOperation": [
                26
            ],
            "fieldMetadataId": [
                520
            ],
            "isVisible": [
                4
            ],
            "position": [
                6
            ],
            "size": [
                6
            ],
            "viewFieldId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "UpsertViewWidgetViewFilterGroupInput": {
            "id": [
                520
            ],
            "logicalOperator": [
                636
            ],
            "parentViewFilterGroupId": [
                520
            ],
            "positionInViewFilterGroup": [
                6
            ],
            "__typename": [
                1
            ]
        },
        "UpsertViewWidgetViewFilterInput": {
            "fieldMetadataId": [
                520
            ],
            "id": [
                520
            ],
            "operand": [
                637
            ],
            "positionInViewFilterGroup": [
                6
            ],
            "relationTargetFieldMetadataId": [
                520
            ],
            "subFieldName": [
                1
            ],
            "value": [
                310
            ],
            "viewFilterGroupId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "UpsertViewWidgetViewSettingsInput": {
            "calendarEndFieldMetadataId": [
                520
            ],
            "calendarFieldMetadataId": [
                520
            ],
            "calendarLayout": [
                630
            ],
            "kanbanAggregateOperation": [
                26
            ],
            "kanbanAggregateOperationFieldMetadataId": [
                520
            ],
            "kanbanColumnWidth": [
                10
            ],
            "mainGroupByFieldMetadataId": [
                520
            ],
            "openRecordIn": [
                640
            ],
            "shouldHideEmptyGroups": [
                4
            ],
            "type": [
                643
            ],
            "__typename": [
                1
            ]
        },
        "UpsertViewWidgetViewSortInput": {
            "direction": [
                642
            ],
            "fieldMetadataId": [
                520
            ],
            "id": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "UsageAnalytics": {
            "periodEnd": [
                207
            ],
            "periodStart": [
                207
            ],
            "timeSeries": [
                614
            ],
            "usageByApplication": [
                603
            ],
            "usageByModel": [
                603
            ],
            "usageByOperationType": [
                603
            ],
            "usageByUser": [
                603
            ],
            "userDailyUsage": [
                616
            ],
            "__typename": [
                1
            ]
        },
        "UsageAnalyticsInput": {
            "operationTypes": [
                606
            ],
            "periodEnd": [
                207
            ],
            "periodStart": [
                207
            ],
            "userWorkspaceId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UsageBreakdownItem": {
            "creditsUsed": [
                6
            ],
            "key": [
                1
            ],
            "label": [
                1
            ],
            "userCreditsUsed": [
                6
            ],
            "workspaceCreditsUsed": [
                6
            ],
            "__typename": [
                1
            ]
        },
        "UsageLimit": {
            "burstValue": [
                96
            ],
            "createdAt": [
                207
            ],
            "id": [
                520
            ],
            "limitKind": [
                1
            ],
            "limitValue": [
                96
            ],
            "operationType": [
                606
            ],
            "periodCount": [
                10
            ],
            "periodUnit": [
                1
            ],
            "resourceType": [
                613
            ],
            "spenderId": [
                1
            ],
            "spenderType": [
                1
            ],
            "unit": [
                615
            ],
            "updatedAt": [
                207
            ],
            "__typename": [
                1
            ]
        },
        "UsageLimitOperationDefinition": {
            "allowedUnits": [
                615
            ],
            "operationType": [
                606
            ],
            "__typename": [
                1
            ]
        },
        "UsageOperationType": {},
        "UsageQuotaDefinition": {
            "allowedOperations": [
                605
            ],
            "allowedSpenderTypes": [
                1
            ],
            "limitKind": [
                1
            ],
            "operatorOnlyScopes": [
                609
            ],
            "resourceType": [
                613
            ],
            "__typename": [
                1
            ]
        },
        "UsageQuotaDefinitions": {
            "definitions": [
                607
            ],
            "hasAllowancePeriod": [
                4
            ],
            "isIntraWorkspaceLimitEntitled": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "UsageQuotaOperatorOnlyScope": {
            "operationType": [
                606
            ],
            "periodUnit": [
                1
            ],
            "spenderType": [
                1
            ],
            "unit": [
                615
            ],
            "__typename": [
                1
            ]
        },
        "UsageQuotaScopeConsumption": {
            "consumedValue": [
                96
            ],
            "periodEnd": [
                207
            ],
            "periodStart": [
                207
            ],
            "__typename": [
                1
            ]
        },
        "UsageQuotaScopeInput": {
            "operationType": [
                606
            ],
            "periodUnit": [
                1
            ],
            "resourceType": [
                613
            ],
            "spenderId": [
                1
            ],
            "spenderType": [
                1
            ],
            "unit": [
                615
            ],
            "__typename": [
                1
            ]
        },
        "UsageQuotaWithConsumption": {
            "consumedValue": [
                96
            ],
            "id": [
                520
            ],
            "isEnforced": [
                4
            ],
            "limitValue": [
                96
            ],
            "operationType": [
                606
            ],
            "periodEnd": [
                207
            ],
            "periodStart": [
                207
            ],
            "periodUnit": [
                1
            ],
            "remainingValue": [
                96
            ],
            "resourceType": [
                613
            ],
            "spenderId": [
                1
            ],
            "spenderLabel": [
                1
            ],
            "spenderType": [
                1
            ],
            "unit": [
                615
            ],
            "__typename": [
                1
            ]
        },
        "UsageResourceType": {},
        "UsageTimeSeries": {
            "creditsUsed": [
                6
            ],
            "date": [
                1
            ],
            "workspaceCreditsUsed": [
                6
            ],
            "__typename": [
                1
            ]
        },
        "UsageUnit": {},
        "UsageUserDaily": {
            "dailyUsage": [
                614
            ],
            "userWorkspaceId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "User": {
            "availableWorkspaces": [
                87
            ],
            "canAccessFullAdminPanel": [
                4
            ],
            "canImpersonate": [
                4
            ],
            "createdAt": [
                207
            ],
            "currentUserWorkspace": [
                621
            ],
            "currentWorkspace": [
                652
            ],
            "deletedAt": [
                207
            ],
            "deletedWorkspaceMembers": [
                220
            ],
            "disabled": [
                4
            ],
            "email": [
                1
            ],
            "firstName": [
                1
            ],
            "hasPassword": [
                4
            ],
            "id": [
                520
            ],
            "isEmailVerified": [
                4
            ],
            "isWorkspaceCreator": [
                4
            ],
            "lastName": [
                1
            ],
            "locale": [
                1
            ],
            "onboardingStatus": [
                387
            ],
            "previousOnboardingStatus": [
                387
            ],
            "supportUserHash": [
                1
            ],
            "updatedAt": [
                207
            ],
            "userVars": [
                311
            ],
            "userWorkspaces": [
                621
            ],
            "workspaceMember": [
                661
            ],
            "workspaceMembers": [
                661
            ],
            "workspaces": [
                621
            ],
            "__typename": [
                1
            ]
        },
        "UserApplicationVariableValue": {
            "description": [
                1
            ],
            "isDeprecated": [
                4
            ],
            "isRequired": [
                4
            ],
            "isSecret": [
                4
            ],
            "key": [
                1
            ],
            "label": [
                1
            ],
            "options": [
                310
            ],
            "type": [
                1
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UserCreditsFallback": {},
        "UserSession": {
            "authProvider": [
                1
            ],
            "createdAt": [
                207
            ],
            "expiresAt": [
                207
            ],
            "id": [
                520
            ],
            "ipAddress": [
                1
            ],
            "isCurrent": [
                4
            ],
            "isImpersonating": [
                4
            ],
            "lastActiveAt": [
                207
            ],
            "userAgent": [
                1
            ],
            "workspaceId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "UserWorkspace": {
            "createdAt": [
                207
            ],
            "deletedAt": [
                207
            ],
            "id": [
                520
            ],
            "isImpersonating": [
                4
            ],
            "locale": [
                1
            ],
            "objectPermissions": [
                379
            ],
            "objectsPermissions": [
                379
            ],
            "permissionFlags": [
                404
            ],
            "twoFactorAuthenticationMethodSummary": [
                516
            ],
            "updatedAt": [
                207
            ],
            "user": [
                617
            ],
            "userId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "ValidateApprovedAccessDomainInput": {
            "approvedAccessDomainId": [
                520
            ],
            "validationToken": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ValidatePasswordResetToken": {
            "email": [
                1
            ],
            "hasPassword": [
                4
            ],
            "id": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "ValidationRule": {
            "description": [
                1
            ],
            "errorFieldMetadataId": [
                520
            ],
            "expression": [
                1
            ],
            "icon": [
                1
            ],
            "id": [
                520
            ],
            "isActive": [
                4
            ],
            "message": [
                1
            ],
            "name": [
                1
            ],
            "objectMetadataId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "VerificationRecord": {
            "key": [
                1
            ],
            "priority": [
                6
            ],
            "status": [
                1
            ],
            "type": [
                1
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "VerifyEmailAndGetLoginToken": {
            "loginToken": [
                81
            ],
            "workspaceUrls": [
                670
            ],
            "__typename": [
                1
            ]
        },
        "VerifyTwoFactorAuthenticationMethod": {
            "success": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "VersionDistributionEntry": {
            "count": [
                10
            ],
            "version": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "View": {
            "anyFieldFilterValue": [
                1
            ],
            "applicationId": [
                520
            ],
            "calendarEndFieldMetadataId": [
                520
            ],
            "calendarFieldMetadataId": [
                520
            ],
            "calendarLayout": [
                630
            ],
            "createdAt": [
                207
            ],
            "createdByUserWorkspaceId": [
                520
            ],
            "deletedAt": [
                207
            ],
            "groupLoadLimit": [
                10
            ],
            "icon": [
                1
            ],
            "id": [
                520
            ],
            "isActive": [
                4
            ],
            "isCompact": [
                4
            ],
            "isCustom": [
                4
            ],
            "isSystemSideEffect": [
                4
            ],
            "kanbanAggregateOperation": [
                26
            ],
            "kanbanAggregateOperationFieldMetadataId": [
                520
            ],
            "kanbanColumnWidth": [
                10
            ],
            "key": [
                639
            ],
            "mainGroupByFieldMetadataId": [
                520
            ],
            "name": [
                1
            ],
            "objectMetadataId": [
                520
            ],
            "openRecordIn": [
                640
            ],
            "position": [
                6
            ],
            "shouldHideEmptyGroups": [
                4
            ],
            "type": [
                643
            ],
            "universalIdentifier": [
                520
            ],
            "updatedAt": [
                207
            ],
            "viewFieldGroups": [
                633
            ],
            "viewFields": [
                632
            ],
            "viewFilterGroups": [
                635
            ],
            "viewFilters": [
                634
            ],
            "viewGroups": [
                638
            ],
            "viewSorts": [
                641
            ],
            "visibility": [
                644
            ],
            "workspaceId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "ViewCalendarLayout": {},
        "ViewConfiguration": {
            "configurationType": [
                647
            ],
            "__typename": [
                1
            ]
        },
        "ViewField": {
            "aggregateOperation": [
                26
            ],
            "applicationId": [
                520
            ],
            "createdAt": [
                207
            ],
            "deletedAt": [
                207
            ],
            "fieldMetadataId": [
                520
            ],
            "id": [
                520
            ],
            "isActive": [
                4
            ],
            "isOverridden": [
                4
            ],
            "isSystemSideEffect": [
                4
            ],
            "isVisible": [
                4
            ],
            "position": [
                6
            ],
            "size": [
                6
            ],
            "universalIdentifier": [
                520
            ],
            "updatedAt": [
                207
            ],
            "viewFieldGroupId": [
                520
            ],
            "viewId": [
                520
            ],
            "workspaceId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "ViewFieldGroup": {
            "createdAt": [
                207
            ],
            "deletedAt": [
                207
            ],
            "id": [
                520
            ],
            "isActive": [
                4
            ],
            "isOverridden": [
                4
            ],
            "isVisible": [
                4
            ],
            "name": [
                1
            ],
            "position": [
                6
            ],
            "updatedAt": [
                207
            ],
            "viewFields": [
                632
            ],
            "viewId": [
                520
            ],
            "workspaceId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "ViewFilter": {
            "createdAt": [
                207
            ],
            "deletedAt": [
                207
            ],
            "fieldMetadataId": [
                520
            ],
            "id": [
                520
            ],
            "operand": [
                637
            ],
            "positionInViewFilterGroup": [
                6
            ],
            "relationTargetFieldMetadataId": [
                520
            ],
            "subFieldName": [
                1
            ],
            "updatedAt": [
                207
            ],
            "value": [
                310
            ],
            "viewFilterGroupId": [
                520
            ],
            "viewId": [
                520
            ],
            "workspaceId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "ViewFilterGroup": {
            "createdAt": [
                207
            ],
            "deletedAt": [
                207
            ],
            "id": [
                520
            ],
            "logicalOperator": [
                636
            ],
            "parentViewFilterGroupId": [
                520
            ],
            "positionInViewFilterGroup": [
                6
            ],
            "updatedAt": [
                207
            ],
            "viewId": [
                520
            ],
            "workspaceId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "ViewFilterGroupLogicalOperator": {},
        "ViewFilterOperand": {},
        "ViewGroup": {
            "createdAt": [
                207
            ],
            "deletedAt": [
                207
            ],
            "fieldValue": [
                1
            ],
            "id": [
                520
            ],
            "isVisible": [
                4
            ],
            "position": [
                6
            ],
            "updatedAt": [
                207
            ],
            "viewId": [
                520
            ],
            "workspaceId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "ViewKey": {},
        "ViewOpenRecordIn": {},
        "ViewSort": {
            "createdAt": [
                207
            ],
            "deletedAt": [
                207
            ],
            "direction": [
                642
            ],
            "fieldMetadataId": [
                520
            ],
            "id": [
                520
            ],
            "subFieldName": [
                1
            ],
            "updatedAt": [
                207
            ],
            "viewId": [
                520
            ],
            "workspaceId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "ViewSortDirection": {},
        "ViewType": {},
        "ViewVisibility": {},
        "Webhook": {
            "applicationId": [
                520
            ],
            "createdAt": [
                207
            ],
            "deletedAt": [
                207
            ],
            "description": [
                1
            ],
            "id": [
                520
            ],
            "operations": [
                1
            ],
            "secret": [
                1
            ],
            "targetUrl": [
                1
            ],
            "updatedAt": [
                207
            ],
            "__typename": [
                1
            ]
        },
        "WidgetConfiguration": {
            "on_AggregateChartConfiguration": [
                25
            ],
            "on_BarChartConfiguration": [
                90
            ],
            "on_CalendarConfiguration": [
                130
            ],
            "on_CallRecordingSummaryConfiguration": [
                131
            ],
            "on_CallRecordingTranscriptConfiguration": [
                132
            ],
            "on_ChatConfiguration": [
                140
            ],
            "on_ChatThreadsConfiguration": [
                143
            ],
            "on_EmailThreadConfiguration": [
                236
            ],
            "on_EmailsConfiguration": [
                240
            ],
            "on_FieldConfiguration": [
                263
            ],
            "on_FieldRichTextConfiguration": [
                271
            ],
            "on_FieldsConfiguration": [
                272
            ],
            "on_FilesConfiguration": [
                278
            ],
            "on_FormFieldConfiguration": [
                281
            ],
            "on_FrontComponentConfiguration": [
                283
            ],
            "on_IframeConfiguration": [
                293
            ],
            "on_LineChartConfiguration": [
                314
            ],
            "on_MessageCampaignBodyConfiguration": [
                336
            ],
            "on_MessageCampaignDetailsConfiguration": [
                337
            ],
            "on_NotesConfiguration": [
                370
            ],
            "on_PieChartConfiguration": [
                405
            ],
            "on_RecordTableConfiguration": [
                435
            ],
            "on_StandaloneRichTextConfiguration": [
                488
            ],
            "on_TasksConfiguration": [
                497
            ],
            "on_TimelineConfiguration": [
                501
            ],
            "on_ViewConfiguration": [
                631
            ],
            "on_WorkflowConfiguration": [
                649
            ],
            "on_WorkflowRunConfiguration": [
                650
            ],
            "on_WorkflowVersionConfiguration": [
                651
            ],
            "__typename": [
                1
            ]
        },
        "WidgetConfigurationType": {},
        "WidgetType": {},
        "WorkflowConfiguration": {
            "configurationType": [
                647
            ],
            "__typename": [
                1
            ]
        },
        "WorkflowRunConfiguration": {
            "configurationType": [
                647
            ],
            "__typename": [
                1
            ]
        },
        "WorkflowVersionConfiguration": {
            "configurationType": [
                647
            ],
            "__typename": [
                1
            ]
        },
        "Workspace": {
            "activationStatus": [
                653
            ],
            "aiAdditionalInstructions": [
                1
            ],
            "aiAgentModelTier": [
                29
            ],
            "aiChatModelTier": [
                29
            ],
            "aiEvaluationModelId": [
                1
            ],
            "aiModelIdByTier": [
                310
            ],
            "allowImpersonation": [
                4
            ],
            "allowedIframeOrigins": [
                1
            ],
            "billingCustomer": [
                98
            ],
            "billingEntitlements": [
                100
            ],
            "billingSubscriptions": [
                116
            ],
            "createdAt": [
                207
            ],
            "currentBillingSubscription": [
                116
            ],
            "customDomain": [
                1
            ],
            "databaseSchema": [
                1
            ],
            "defaultRole": [
                444
            ],
            "deletedAt": [
                207
            ],
            "displayName": [
                1
            ],
            "editableProfileFields": [
                1
            ],
            "eventLogRetentionDays": [
                6
            ],
            "featureFlags": [
                260
            ],
            "hasValidEnterpriseValidityToken": [
                4
            ],
            "hasValidSignedEnterpriseKey": [
                4
            ],
            "id": [
                520
            ],
            "iframeMediaPermissions": [
                294
            ],
            "installedApplications": [
                44
            ],
            "inviteHash": [
                1
            ],
            "isAutoModelSelectionEnabled": [
                4
            ],
            "isCampaignClickTrackingEnabled": [
                4
            ],
            "isCampaignOpenTrackingEnabled": [
                4
            ],
            "isCustomDomainEnabled": [
                4
            ],
            "isGoogleAuthBypassEnabled": [
                4
            ],
            "isGoogleAuthEnabled": [
                4
            ],
            "isInternalMessagesImportEnabled": [
                4
            ],
            "isMicrosoftAuthBypassEnabled": [
                4
            ],
            "isMicrosoftAuthEnabled": [
                4
            ],
            "isPasswordAuthBypassEnabled": [
                4
            ],
            "isPasswordAuthEnabled": [
                4
            ],
            "isPublicInviteLinkEnabled": [
                4
            ],
            "isTrialAvailable": [
                4
            ],
            "isTwoFactorAuthenticationEnforced": [
                4
            ],
            "logo": [
                1
            ],
            "logoFileId": [
                520
            ],
            "metadataVersion": [
                6
            ],
            "subdomain": [
                1
            ],
            "trashRetentionDays": [
                6
            ],
            "updatedAt": [
                207
            ],
            "viewFields": [
                632
            ],
            "viewFilterGroups": [
                635
            ],
            "viewFilters": [
                634
            ],
            "viewGroups": [
                638
            ],
            "viewSorts": [
                641
            ],
            "views": [
                629
            ],
            "workspaceCustomApplication": [
                44
            ],
            "workspaceCustomApplicationId": [
                1
            ],
            "workspaceDiscoverability": [
                658
            ],
            "workspaceMembersCount": [
                6
            ],
            "workspaceUrls": [
                670
            ],
            "__typename": [
                1
            ]
        },
        "WorkspaceActivationStatus": {},
        "WorkspaceAiStats": {
            "conversationsCount": [
                10
            ],
            "skillsCount": [
                10
            ],
            "toolsCount": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "WorkspaceCompanyEnrichmentOutcome": {},
        "WorkspaceCompanyEnrichmentResult": {
            "enrichment": [
                310
            ],
            "isBookCallOnboardingStepPending": [
                4
            ],
            "outcome": [
                655
            ],
            "personEnrichment": [
                310
            ],
            "personOutcome": [
                668
            ],
            "__typename": [
                1
            ]
        },
        "WorkspaceCreationDefaultsDTO": {
            "displayName": [
                1
            ],
            "subdomain": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "WorkspaceDiscoverability": {},
        "WorkspaceInvitation": {
            "email": [
                1
            ],
            "expiresAt": [
                207
            ],
            "id": [
                520
            ],
            "roleId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "WorkspaceInviteHashValid": {
            "isValid": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "WorkspaceMember": {
            "avatarUrl": [
                1
            ],
            "calendarStartDay": [
                10
            ],
            "colorScheme": [
                1
            ],
            "dateFormat": [
                663
            ],
            "id": [
                520
            ],
            "locale": [
                1
            ],
            "name": [
                285
            ],
            "numberFormat": [
                664
            ],
            "openRecordIn": [
                390
            ],
            "roles": [
                444
            ],
            "timeFormat": [
                665
            ],
            "timeZone": [
                1
            ],
            "uiScale": [
                1
            ],
            "userEmail": [
                1
            ],
            "userId": [
                520
            ],
            "userWorkspaceId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "WorkspaceMemberApplicationVariables": {
            "userWorkspaceId": [
                520
            ],
            "variables": [
                618
            ],
            "workspaceMemberId": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "WorkspaceMemberDateFormatEnum": {},
        "WorkspaceMemberNumberFormatEnum": {},
        "WorkspaceMemberTimeFormatEnum": {},
        "WorkspaceMigration": {
            "actions": [
                310
            ],
            "applicationUniversalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "WorkspaceNameAndId": {
            "displayName": [
                1
            ],
            "id": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "WorkspacePersonEnrichmentOutcome": {},
        "WorkspaceSetupChatOutcome": {},
        "WorkspaceUrls": {
            "customUrl": [
                1
            ],
            "subdomainUrl": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "WorkspaceUrlsAndId": {
            "id": [
                520
            ],
            "workspaceUrls": [
                670
            ],
            "__typename": [
                1
            ]
        }
    }
}