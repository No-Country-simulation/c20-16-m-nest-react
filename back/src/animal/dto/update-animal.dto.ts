import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/swagger';
import { CreateAnimalDto } from './create-animal.dto';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class UpdateAnimalDto extends PartialType(CreateAnimalDto) {
    @ApiProperty({ description: 'ID de la adopción asociada al animal', example: 1 })
    @IsOptional()
    @IsNumber()
    idAdoption?: number;
}
