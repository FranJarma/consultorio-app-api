import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsEmail, IsInt } from 'class-validator';

export class CreatePatientDto {
  @ApiProperty()
  @IsString()
  fullname: string;

  @ApiProperty()
  @IsString()
  dni: string;

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

  @ApiProperty()
  @IsString()
  healthEnsuranceId: string;

  @ApiProperty()
  @IsString()
  localityId: string;
}
