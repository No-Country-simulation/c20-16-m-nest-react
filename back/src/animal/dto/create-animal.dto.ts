import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsNumber, IsUrl, ArrayNotEmpty } from 'class-validator';
import { AnimalShelter } from '../../animalshelter/entities/animalshelter.entity';
import { AnimalShelterDto } from '../../animalshelter/dto/animalshelter.dto';
import { AnimalFeatures } from '../../animalfeatures/entities/animalfeatures.entity';

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

    @ApiProperty({ description: 'Refugio donde está el animal'})
    @IsNotEmpty()
    animalShelther: AnimalShelter;

    @ApiProperty({ description: 'Tipo de animal', example: 2 })
    @IsNotEmpty()
    @IsNumber()
    idAnimalTypes: number;

    @ApiProperty({ description: 'Lista de IDs de las características del animal', example: [1, 2] })
    @ArrayNotEmpty()
    animalFeatures: AnimalFeatures[];

    @ApiProperty({ description: 'Estado del reporte asociado al animal'})
    @IsNotEmpty()
    @IsNumber()
    idReportState: number;
}
