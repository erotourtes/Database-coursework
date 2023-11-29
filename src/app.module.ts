import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AppController } from './app.controller';
import { AccessModule } from './access/access.module';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, AccessModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
