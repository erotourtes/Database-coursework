import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { ServerUserDto } from 'src/user/dto/server-user.dto';

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request['user'] as ServerUserDto | undefined;

    return user;
  },
);
