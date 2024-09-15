import { IsNotEmpty, IsOptional, IsString, IsNumber, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { AnimalShelter } from '../../animalshelter/entities/animalshelter.entity';
import { User } from '../../user/entities/user.entity';
import { CommonDto } from '../../common/dto/common.dto';

export class DonationDto extends CommonDto{
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    @Type(() => Number)
    amount: number;

    @ApiProperty({ description: 'Posible comprobante asociado'})
    @IsNotEmpty()
    @IsString()
    voucher: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    observations?: string;
    
    @ApiProperty()
    @IsNotEmpty()
    @Type(() => AnimalShelter)
    animalShelther: AnimalShelter;

    @ApiProperty()
    @IsNotEmpty()
    @Type(() => User)
    user: User;
}

