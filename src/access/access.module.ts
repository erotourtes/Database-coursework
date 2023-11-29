import { Module } from '@nestjs/common';
import { AccessService } from './access.service';
import { AccessController } from './access.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserModule } from 'src/user/user.module';

@Module({
  providers: [AccessService],
  controllers: [AccessController],
  imports: [PrismaModule, UserModule],
})
export class AccessModule {}
