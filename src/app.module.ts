import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AppController } from './app.controller';
import { AccessModule } from './access/access.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, AccessModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
