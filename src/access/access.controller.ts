import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AccessService } from './access.service';
import { UpdateAccessDto } from './dto/access.dto';

@Controller('accesses')
export class AccessController {
  constructor(private readonly accessService: AccessService) {}

  @Post()
  async create(@Body() data: { postId: number; userId: number }) {
    return await this.accessService.create(data.userId, data.postId);
  }

  @Get()
  async findAll() {
    return await this.accessService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.accessService.findOne(id);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateAccessDto,
  ) {
    return await this.accessService.update(id, data);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.accessService.remove(id);
  }
}
