import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPostDto: CreatePostDto) {
    const newRating = await this.prisma.rating.create({
      data: {
        value: 0,
      },
    });

    const newData = await this.prisma.data.create({
      data: {
        size: '0mb',
        format: 'txt',
        name: createPostDto.name,
        uploadedAt: new Date(),
      },
    });

    return await this.prisma.post.create({
      data: {
        name: createPostDto.name,
        title: createPostDto.title,
        description: createPostDto.description,
        uploadedAt: new Date(),
        updatedAt: new Date(),
        Rating_id: newRating.id,
        Data_id: newData.id,
      },
    });
  }

  async findAll() {
    return await this.prisma.post.findMany({
      include: {
        Rating: true,
        Data: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.post.findUnique({
      where: {
        id: id,
      },
      include: {
        Rating: true,
        Data: true,
      },
    });
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    return await this.prisma.post.update({
      where: {
        id: id,
      },
      data: {
        name: updatePostDto.name,
        title: updatePostDto.title,
        description: updatePostDto.description,
        updatedAt: new Date(),
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.post.delete({
      where: {
        id: id,
      },
    });
  }
}
