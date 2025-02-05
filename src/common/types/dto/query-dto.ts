import { IsOptional, IsString } from 'class-validator';

export class GetAllDto {
  @IsOptional()
  @IsString()
  filter?: string;

  @IsOptional()
  @IsString()
  range?: string;

  @IsOptional()
  @IsString()
  sort?: string;
}