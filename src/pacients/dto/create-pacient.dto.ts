import { IsString, IsOptional, IsEmail, IsDate } from 'class-validator';

export class CreatePacientDto {
  @IsString()
  name: string;

  @IsString()
  surname: string;

  @IsString()
  dni: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsDate()
  birthDate: Date;

  @IsOptional()
  @IsString()
  address?: string;
}
