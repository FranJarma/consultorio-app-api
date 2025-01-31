import { Module } from '@nestjs/common';
import { TurnsService } from './turns.service';
import { TurnsController } from './turns.controller';

@Module({
  controllers: [TurnsController],
  providers: [TurnsService],
})
export class TurnsModule {}
