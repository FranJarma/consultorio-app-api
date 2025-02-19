import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateHealthEnsuranceDto {
    @ApiProperty()
    @IsString()
    name: string;
}
