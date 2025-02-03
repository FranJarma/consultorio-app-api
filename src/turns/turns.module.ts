import { Module } from '@nestjs/common';
import { TurnsService } from './turns.service';
import { TurnsController } from './turns.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [TurnsController],
  providers: [TurnsService, PrismaService],
})
export class TurnsModule {}
