import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"
import { CommonDto } from "../../common/dto/common.dto"

export class CreateAnimalTypesDto extends CommonDto {
    @ApiProperty()
    @IsString()
    name: string
}
