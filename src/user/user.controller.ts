import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async users() {
    return await this.userService.findAll();
  }

  @Get(':id')
  async user(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.findOne(id);
  }
}
