import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AccessModule } from 'src/access/access.module';

@Module({
  controllers: [PostController],
  providers: [PostService],
  imports: [PrismaModule, AccessModule],
})
export class PostModule {}
