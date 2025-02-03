import { IsString, IsDate } from 'class-validator';
import { TurnStateEnum } from '../types/turn';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTurnDto {
  @ApiProperty()
  @IsString()
  patientId: string;

  @ApiProperty()
  @IsString()
  state: TurnStateEnum;

  @ApiProperty()
  @IsDate()
  date: Date;
}
