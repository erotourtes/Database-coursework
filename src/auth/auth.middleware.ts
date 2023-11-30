import { Inject, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { UserService } from 'src/user/user.service';

export class AuthMiddleware implements NestMiddleware {
  constructor(@Inject(UserService) private readonly userService: UserService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    try {
      const { authorization } = req.headers;
      const token = authorization.split(' ')[1]; // Bearer <id>
      if (!token) throw new Error();

      const decoded = await this.userService.findUserInternal(+token);
      req['user'] = decoded;
    } catch (error) {
      req['user'] = null;
    }

    next();
  }
}
