import {
  CanActivate,
  ExecutionContext,
  Inject,
  SetMetadata,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { ServerUserDto } from 'src/user/dto/server-user.dto';
import { ALLOW_OWNER_KEY } from './auth.decorator';

export const ROLES_KEY = Symbol('roles');

export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);

export class RolesGuard implements CanActivate {
  constructor(@Inject(Reflector) private readonly reflector: Reflector) {}

  canActivate(
    ctx: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('RolesGuard');
    const roles = this.reflector.get<string[]>(ROLES_KEY, ctx.getHandler());
    if (!roles) return true;

    const req = ctx.switchToHttp().getRequest();
    const user = req.user as ServerUserDto;
    const hasRole = () => roles.includes(user.Role.name);

    const allowOwner = this.reflector.get<boolean>(
      ALLOW_OWNER_KEY,
      ctx.getHandler(),
    );

    const userOwnsResource = () => {
      const params = req.params;
      const userId = user.id;
      return +params.id === userId;
    };

    console.log(
      `hasRole(): ${hasRole()} & (allowOwner: ${allowOwner}) | userOwnsResource(): ${userOwnsResource()}`,
    );

    return user && (hasRole() || (allowOwner && userOwnsResource()));
  }
}
