import { Field, InputType } from '@nestjs/graphql';
import { isString } from '@sniptt/guards';
import { IsBoolean, ValidateBy } from 'class-validator';
import { type IframeMediaPermission } from 'twenty-shared/types';
import {
  isDefined,
  normalizeIframeMediaPermissionOrigin,
} from 'twenty-shared/utils';

@InputType()
export class UpdateWorkspaceIframeMediaPermissionsInput implements IframeMediaPermission {
  @Field()
  @ValidateBy({
    name: 'iframeMediaPermissionOrigin',
    validator: {
      validate: (value: unknown) =>
        isString(value) &&
        isDefined(normalizeIframeMediaPermissionOrigin(value)),
      defaultMessage: () => 'Enter an HTTPS origin without a path or wildcard',
    },
  })
  origin: string;

  @Field()
  @IsBoolean()
  microphone: boolean;

  @Field()
  @IsBoolean()
  camera: boolean;
}
