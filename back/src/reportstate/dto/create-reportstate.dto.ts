import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"
import { CommonDto } from "../../common/dto/common.dto"

export class CreateReportStateDto extends CommonDto {
    @ApiProperty({ description: 'Nombre del estado del reporte', example: 'Perdido' })
    @IsString()
    name: string
}
