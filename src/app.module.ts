import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TurnsModule } from './turns/turns.module';
import { PatientsModule } from './patients/patients.module';
import { PrismaModule } from './prisma/prisma.module';
import { ClinicalStoriesModule } from './clinical-stories/clinical-stories.module';

@Module({
  imports: [PatientsModule, TurnsModule, PrismaModule, ClinicalStoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
