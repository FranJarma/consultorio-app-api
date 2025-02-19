import { Module } from '@nestjs/common';
import { ClinicalStoriesService } from './clinical-stories.service';
import { ClinicalStoriesController } from './clinical-stories.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { FileUploadService } from 'src/file-upload/file-upload.service';
import { FileUploadModule } from 'src/file-upload/file-upload.module';

@Module({
  imports: [FileUploadModule],
  controllers: [ClinicalStoriesController],
  providers: [ClinicalStoriesService, FileUploadService, PrismaService],
})
export class ClinicalStoriesModule {}
