import { ApiProperty } from "@nestjs/swagger";
import { Expose, Type } from "class-transformer";
import { CommonDto } from "src/common/entities/common.dto";
import { AnimalDto } from "../../animal/dto/animal.dto";

export class AnimalFeaturesDto extends CommonDto {
    @ApiProperty({ description: 'Caracteristica', example: 'Blanco // Negro // Pequeño' })
    @Expose()
    name: string

    @ApiProperty({
        description: 'Lista de animales asociados',
        type: () => [AnimalDto], // Array de AnimalDto
        example: [
            { id: 1, name: 'Firulais' },
            { id: 2, name: 'Manchita' }
        ],
    })
    @Type(() => AnimalDto)
    animal: AnimalDto[];
}