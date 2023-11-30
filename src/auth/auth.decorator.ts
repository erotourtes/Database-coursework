import { SetMetadata, UseGuards, applyDecorators } from '@nestjs/common';

import { ROLES_KEY, RolesGuard } from './roles.guard';
import { AuthGuard } from './auth.guard';

export const ALLOW_OWNER_KEY = Symbol('allowOwner');

export function Auth(roles: string[], allowOwner = false) {
  return applyDecorators(
    SetMetadata(ROLES_KEY, roles),
    SetMetadata(ALLOW_OWNER_KEY, allowOwner),
    UseGuards(AuthGuard, RolesGuard),
  );
}
