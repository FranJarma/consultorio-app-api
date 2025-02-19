import { Module } from '@nestjs/common';
import { HealthEnsurancesService } from './health-ensurances.service';
import { HealthEnsurancesController } from './health-ensurances.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [HealthEnsurancesController],
  providers: [HealthEnsurancesService, PrismaService],
})
export class HealthEnsurancesModule {}
