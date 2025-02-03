import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateClinicalStoryDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    patientId: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    observations?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    treatmentPlan?: string;
}