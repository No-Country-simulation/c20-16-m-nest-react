import { IsNotEmpty, IsOptional, IsString, IsNumber, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { Animal } from '../../animal/entities/animal.entity';
import { User } from '../../user/entities/user.entity';
import { CommonDto } from '../../common/dto/common.dto';
import { AdoptionStatus } from '../entities/adoption.entity';

export class AdoptionDto extends CommonDto {
    @ApiProperty({ 
        description: 'Estado de la adopción', 
        enum: AdoptionStatus, 
        example: AdoptionStatus.APROBADA
    })
    @IsNotEmpty()
    @IsEnum(AdoptionStatus)
    status: AdoptionStatus;

    @ApiProperty({
        description: 'Voucher de la adopción', 
        example: 'XYZ987654321'
    })
    @IsNotEmpty()
    @IsString()
    voucher: string;

    @ApiProperty({
        description: 'Observaciones adicionales sobre la adopción', 
        example: 'El adoptante ha cumplido con todos los requisitos.', 
        required: false
    })
    @IsOptional()
    @IsString()
    observations?: string;

    @ApiProperty({
        description: 'Detalles del animal que se está adoptando', 
        type: Animal, 
        example: { id: 101, name: 'Max', breed: 'Labrador', age: 3 }
    })
    @IsNotEmpty()
    @IsNumber()
    @Type(() => Animal)
    idAnimal: Animal;

    @ApiProperty({
        description: 'Detalles del usuario que realiza la adopción', 
        type: User, 
        example: { id: 202, name: 'Juan Pérez', email: 'juanperez@example.com' }
    })
    @IsNotEmpty()
    @IsNumber()
    @Type(() => User)
    idUser: User;
}
