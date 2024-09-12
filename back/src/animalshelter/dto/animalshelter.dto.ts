import { ApiProperty } from "@nestjs/swagger";
import { AnimalTypesDto } from "../../animaltype/dto/animaltypes.dto";
import { Type } from "class-transformer";
import { CommonDto } from "../../common/dto/common.dto";

export class AnimalShelterDto extends CommonDto {
    @ApiProperty({
        description: 'ID único del refugio de animales',
        example: 1,
    })
    id: number;

    @ApiProperty({
        description: 'Nombre del refugio de animales',
        example: 'Refugio de Animales San Roque',
    })
    name: string;

    @ApiProperty({
        description: 'URL de la imagen de perfil del refugio de animales',
        example: 'https://example.com/profile.jpg',
        required: false,
    })
    profileUrlImage: string;

    @ApiProperty({
        description: 'Observaciones sobre el refugio de animales',
        example: 'Este refugio necesita más voluntarios.',
        required: false,
    })
    observations: string;

    @ApiProperty({
        description: 'Dirección física del refugio de animales',
        example: 'Calle Falsa 123, Ciudad, País',
    })
    address: string;

    @ApiProperty({
        description: 'Número de teléfono del refugio de animales',
        example: '+123456789',
    })
    phone: string;

    @ApiProperty({
        description: 'Correo electrónico del refugio de animales',
        example: 'contacto@refugio.com',
    })
    email: string;

    @ApiProperty({
        description: 'Latitud geográfica del refugio de animales',
        example: -34.603722,
    })
    latitude: number;

    @ApiProperty({
        description: 'Longitud geográfica del refugio de animales',
        example: -58.381592,
    })
    longitude: number;

    @ApiProperty({
        description: 'Capacidad máxima del refugio de animales',
        example: 50,
        required: false,
    })
    capacity: number;

    @ApiProperty({
        description: 'Horario de apertura del refugio de animales',
        example: 'Lunes a Viernes de 9:00 a 17:00',
        required: false,
    })
    openingHours: string;

    @ApiProperty({
        description: 'Lista de tipos de animales asociados al refugio',
        type: () => [AnimalTypesDto], // Array de AnimalTypesDto
        example: [
            { id: 1, name: 'Perros' },
            { id: 2, name: 'Gatos' }
        ],
    })
    @Type(() => AnimalTypesDto)
    animalTypes: AnimalTypesDto[];
}
