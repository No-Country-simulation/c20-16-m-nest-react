import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsNumber, IsUrl } from 'class-validator';
import { AnimalShelter } from '../../animalshelter/entities/animalshelter.entity';
import { AnimalFeatures } from '../../animalfeatures/entities/animalfeatures.entity';
import { CommonDto } from '../../common/entities/common.dto';
import { AnimalTypesDto } from '../../animaltype/dto/animaltypes.dto';
import { Type } from 'class-transformer';
import { AnimalFeaturesDto } from '../../animalfeatures/dto/animalfeatures.dto';

export class AnimalDto extends CommonDto {
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
    idAnimalShelther: AnimalShelter;

    @ApiProperty({ description: 'ID del tipo de animal', example: 2 })
    @IsNotEmpty()
    @IsNumber()
    @Type(() => AnimalTypesDto)
    idAnimalTypes: AnimalTypesDto;

    @ApiProperty({ description: 'Lista de características del animal', example: [{ id: 1, name: 'Pelaje corto' }, { id: 2, name: 'Ojos azules' }] })
    @IsNotEmpty()
    @Type(() => AnimalFeaturesDto)
    animalFeatures: AnimalFeaturesDto[];

    @ApiProperty({ description: 'ID del estado del reporte asociado al animal', example: 1 })
    @IsNotEmpty()
    @IsNumber()
    reportstateId: number;
}
