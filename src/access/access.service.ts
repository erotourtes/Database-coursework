import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from 'src/user/user.service';
import { UpdateAccessDto } from './dtos/access.dtos';

@Injectable()
export class AccessService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
  ) {}

  async create(userId: number, postId: number) {
    const isValid = this.userService.isUserValid(userId);
    if (!isValid) {
      throw new HttpException(
        "Can't create access for user",
        HttpStatus.BAD_REQUEST,
      );
    }

    await this.prisma.post
      .findUnique({ where: { id: postId } })
      .catch((err) => {
        throw new HttpException("Can't find post", HttpStatus.BAD_REQUEST, {
          cause: err,
        });
      });

    return await this.prisma.access.create({
      data: {
        time: new Date(),
        User_id: userId,
        Post_id: postId,
      },
    });
  }

  async findAll() {
    return await this.prisma.access.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.access.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: UpdateAccessDto) {
    return await this.prisma.access.update({
      where: { id },
      data: {
        time: data.time,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.access
      .delete({
        where: { id },
      })
      .catch((err) => {
        throw new HttpException(err.message, HttpStatus.BAD_REQUEST, {
          cause: err,
        });
      });
  }
}
