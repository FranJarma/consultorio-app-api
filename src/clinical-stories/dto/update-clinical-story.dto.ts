import { PartialType } from '@nestjs/swagger';
import { CreateClinicalStoryDto } from './create-clinical-story.dto';

export class UpdateClinicalStoryDto extends PartialType(CreateClinicalStoryDto) {}
