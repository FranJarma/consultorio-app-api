import { Module } from '@nestjs/common';
import { ClinicalStoriesService } from './clinical-stories.service';
import { ClinicalStoriesController } from './clinical-stories.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ClinicalStoriesController],
  providers: [ClinicalStoriesService, PrismaService],
})
export class ClinicalStoriesModule {}
