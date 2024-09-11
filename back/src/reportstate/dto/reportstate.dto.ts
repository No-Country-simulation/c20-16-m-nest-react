import { ApiProperty } from "@nestjs/swagger";
import { Expose, Type } from "class-transformer";
import { CommonDto } from "../../common/dto/common.dto";
import { AnimalDto } from "../../animal/dto/animal.dto";

export class ReportStateDto extends CommonDto {
    @ApiProperty({
        description: 'Nombre del estado del reporte',
        example: 'Perdido',
    })
    @Expose()
    name: string;

    @ApiProperty({
        description: 'Lista de animales asociados a este estado del reporte',
        type: () => [AnimalDto], // Especifica que es un array de AnimalDto
        example: [
            { id: 1, name: 'Firulais', },
            { id: 2, name: 'Manchita' },
        ],
    })
    @Type(() => AnimalDto)
    animals: AnimalDto[];
}
