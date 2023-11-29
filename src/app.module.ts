import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AccessModule } from './access/access.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, AccessModule, PostModule],
})
export class AppModule {}
