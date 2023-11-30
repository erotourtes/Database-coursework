import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AccessModule } from './access/access.module';
import { PostModule } from './post/post.module';
import { AuthMiddleware } from './auth/auth.middleware';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, AccessModule, PostModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*');
  }
}
