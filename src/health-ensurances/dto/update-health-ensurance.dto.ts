import { PartialType } from '@nestjs/swagger';
import { CreateHealthEnsuranceDto } from './create-health-ensurance.dto';

export class UpdateHealthEnsuranceDto extends PartialType(CreateHealthEnsuranceDto) {}
