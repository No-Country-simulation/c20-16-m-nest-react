import { ApiProperty } from "@nestjs/swagger";
import { Expose, Type } from "class-transformer";
import { CommonDto } from "../../common/dto/common.dto";
import { AnimalShelterDto } from "../../animalshelter/dto/animalshelter.dto";

export class AnimalTypesDto extends CommonDto {
    @ApiProperty()
    @Expose()
    name: string

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