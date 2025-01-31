import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacientsModule } from './pacients/pacients.module';
import { TurnsModule } from './turns/turns.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PacientsModule, TurnsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
