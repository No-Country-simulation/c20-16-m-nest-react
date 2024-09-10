import { IsNotEmpty, IsOptional, IsString, IsNumber, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { CommonDto } from '../../common/entities/common.dto';
import { AdoptionStatus } from '../../adoption/entities/adoption.entity';

export class CreateAdoptionDto extends CommonDto {
    @ApiProperty({ 
        description: 'Estado de la adopción', 
        enum: AdoptionStatus, 
        example: AdoptionStatus.PENDIENTE
    })
    @IsNotEmpty()
    @IsEnum(AdoptionStatus)
    status: AdoptionStatus;

    @ApiProperty({
        description: 'Voucher de la adopción', 
        example: 'ABC12345XYZ'
    })
    @IsNotEmpty()
    @IsString()
    voucher: string;

    @ApiProperty({
        description: 'Observaciones adicionales sobre la adopción', 
        example: 'El adoptante tiene experiencia previa con animales.', 
        required: false
    })
    @IsOptional()
    @IsString()
    observations?: string;

    @ApiProperty({
        description: 'ID del animal que se está adoptando', 
        example: 101
    })
    @IsNotEmpty()
    @IsNumber()
    @Type(() => Number)
    idAnimal: number;

    @ApiProperty({
        description: 'ID del usuario que realiza la adopción', 
        example: 202
    })
    @IsNotEmpty()
    @IsNumber()
    @Type(() => Number)
    idUser: number;
}
