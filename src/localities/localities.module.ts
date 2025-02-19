import { Module } from '@nestjs/common';
import { LocalitiesService } from './localities.service';
import { LocalitiesController } from './localities.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [LocalitiesController],
  providers: [LocalitiesService, PrismaService],
})
export class LocalitiesModule {}
