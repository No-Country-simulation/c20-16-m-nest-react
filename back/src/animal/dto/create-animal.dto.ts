import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsNumber, IsUrl, ArrayNotEmpty } from 'class-validator';

export class CreateAnimalDto {
    @ApiProperty({ description: 'Nombre del animal', example: 'Firulais' })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ description: 'URL de la imagen de perfil del animal', example: 'https://example.com/firulais.jpg', required: false })
    @IsOptional()
    @IsUrl()
    profileUrlImage?: string;

    @ApiProperty({ description: 'Edad del animal en años', example: 3, required: false })
    @IsOptional()
    @IsNumber()
    age?: number;

    @ApiProperty({ description: 'Observaciones adicionales sobre el animal', example: 'Es muy amigable y le gusta correr.', required: false })
    @IsOptional()
    @IsString()
    observations?: string;

    @ApiProperty({ description: 'ID del refugio donde está el animal', example: 1 })
    @IsNotEmpty()
    @IsNumber()
    idAnimalShelther: number;

    @ApiProperty({ description: 'ID del tipo de animal', example: 2 })
    @IsNotEmpty()
    @IsNumber()
    idAnimalTypes: number;

    @ApiProperty({ description: 'Lista de IDs de las características del animal', example: [1, 2] })
    @ArrayNotEmpty()
    animalfeatures: number[];

    @ApiProperty({ description: 'ID del estado del reporte asociado al animal', example: 1 })
    @IsNotEmpty()
    @IsNumber()
    idReportState: number;
}
