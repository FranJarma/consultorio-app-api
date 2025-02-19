import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateLocalityDto {
    @ApiProperty()
    @IsString()
    name: string;
}

