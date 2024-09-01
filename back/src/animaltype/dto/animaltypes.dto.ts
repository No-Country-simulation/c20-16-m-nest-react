import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { CommonDto } from "src/common/entities/common.dto";

export class AnimalTypesDto extends CommonDto {
    @ApiProperty()
    @Expose()
    name: string
}
