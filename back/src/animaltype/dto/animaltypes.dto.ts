import { ApiProperty } from "@nestjs/swagger";
import { Expose, Type } from "class-transformer";
import { CommonDto } from "src/common/entities/common.dto";
import { AnimalDto } from "../../animal/dto/animal.dto";
import { AnimalShelterDto } from "../../animalshelter/dto/animalshelter.dto";

export class AnimalTypesDto extends CommonDto {
    @ApiProperty()
    @Expose()
    name: string

    // Relación con Animal
    @ApiProperty({
        description: 'Lista de Animales (No estan todos los datos en el Ejemplo)',
        type: () => [AnimalDto],
        example: [
            { id: 1, name: 'Firulais' },
            { id: 2, name: 'Manchita' }
        ],
    })
    @Type(() => AnimalDto)
    animals: AnimalDto[]

    @ApiProperty({
        description: 'Lista de Refugios (No estan todos los datos en el Ejemplo)',
        type: () => [AnimalShelterDto], // Array de AnimalTypesDto
        example: [
            { id: 1, name: 'Mi Hogarcitp' },
            { id: 2, name: 'Los Rescataditos' }
        ],
    })
    @Type(() => AnimalShelterDto)
    animalShelter: AnimalShelterDto[];
}