import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"
import { CommonDto } from "../../common/entities/common.dto"

export class CreateAnimalFeaturesDto extends CommonDto{
    @ApiProperty({ description: 'Caracteristica', example: 'Blanco' })
    @IsString()
    name: string
}
