import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsEmail, IsInt } from 'class-validator';
import { HealthEnsuranceEnum } from 'src/types/health-ensurance';
import { LocalitiesEnum } from 'src/types/localities';

export class CreatePatientDto {
  @ApiProperty()
  @IsString()
  fullname: string;

  @ApiProperty()
  @IsString()
  dni: string;

  @ApiProperty()
  @IsString()
  healthEnsurance: HealthEnsuranceEnum;

  @ApiProperty()
  @IsString()
  locality: LocalitiesEnum;

  @ApiProperty()
  @IsString()
  profession: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  address?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty()
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty()
  @IsInt()
  age: number;
}
