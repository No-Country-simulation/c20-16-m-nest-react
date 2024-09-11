import { IsNotEmpty, IsString, IsEmail, IsNumber, ArrayNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateAnimalShelterDto {
    @ApiProperty({
        description: 'Nombre del refugio de animales',
        example: 'Refugio de Animales San Roque',
    })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({
        description: 'URL de la imagen de perfil del refugio',
        example: 'https://example.com/profile.jpg',
        required: false,
    })
    @IsString()
    profileUrlImage?: string;

    @ApiProperty({
        description: 'Observaciones adicionales sobre el refugio',
        example: 'El refugio necesita más voluntarios.',
        required: false,
    })
    @IsString()
    observations?: string;

    @ApiProperty({
        description: 'Dirección física del refugio',
        example: 'Calle Falsa 123, Ciudad, País',
    })
    @IsNotEmpty()
    @IsString()
    address: string;

    @ApiProperty({
        description: 'Teléfono de contacto del refugio',
        example: '+123456789',
    })
    @IsNotEmpty()
    @IsString()
    phone: string;

    @ApiProperty({
        description: 'Correo electrónico de contacto del refugio',
        example: 'contacto@refugio.com',
    })
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({
        description: 'Latitud de la ubicación del refugio',
        example: -34.603722,
    })
    @IsNotEmpty()
    @IsNumber()
    latitude: number;

    @ApiProperty({
        description: 'Longitud de la ubicación del refugio',
        example: -58.381592,
    })
    @IsNotEmpty()
    @IsNumber()
    longitude: number;

    @ApiProperty({
        description: 'Capacidad máxima del refugio (opcional)',
        example: 50,
        required: false,
    })
    @IsNumber()
    capacity?: number;

    @ApiProperty({
        description: 'Horario de apertura del refugio (opcional)',
        example: 'Lunes a Viernes de 9:00 a 17:00',
        required: false,
    })
    @IsString()
    openingHours?: string;

    @ApiProperty({
        description: 'Lista de IDs de tipos de animales asociados al refugio',
        example: [1, 2],
        type: [Number], // Especifica que es un array de números
    })
    @ArrayNotEmpty()
    animalTypeIds: number[];
}
