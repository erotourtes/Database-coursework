import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dtos/create-user.input';
import { UpdateUserDto } from './dtos/update-user.input';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.user.findUnique({
      where: { id },
    });
  }

  async create(user: CreateUserDto) {
    const userRole = await this.prisma.role.findFirst({
      where: { name: 'User' },
    });

    return await this.prisma.user
      .create({
        include: { Role: true, Organization_list: true },
        data: {
          name: user.name,
          mail: user.email,
          login: user.login,
          password: user.password,
          Organization_list_id: user.organizationListId,
          Role_id: userRole.id,
        },
      })
      .catch((error) => {
        throw new HttpException("Can't create user", HttpStatus.CONFLICT, {
          cause: error,
        });
      });
  }

  async delete(id: number) {
    return await this.prisma.user
      .delete({
        where: { id },
      })
      .catch((error) => {
        throw new HttpException("Can't delete user", HttpStatus.CONFLICT, {
          cause: error,
        });
      });
  }

  async update(id: number, user: UpdateUserDto) {
    return await this.prisma.user
      .update({
        include: { Role: true, Organization_list: true },
        where: { id },
        data: {
          name: user.name,
          mail: user.email,
          login: user.login,
          password: user.password,
          Organization_list_id: user.organizationListId,
        },
      })
      .catch((error) => {
        throw new HttpException("Can't update user", 409, { cause: error });
      });
  }
}
