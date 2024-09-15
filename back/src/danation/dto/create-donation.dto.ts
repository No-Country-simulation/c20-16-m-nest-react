import { IsNotEmpty, IsOptional, IsString, IsNumber, IsUrl, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { CommonDto } from '../../common/dto/common.dto';
import { AnimalShelterDto } from '../../animalshelter/dto/animalshelter.dto';
import { UserDto } from '../../user/dto/user-dto';

export class CreateDonationDto extends CommonDto{
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    @Type(() => Number)
    amount: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    voucher: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    observations?: string;

    @ApiProperty()
    @IsNotEmpty()
    @Type(() => AnimalShelterDto)
    animalShelther: AnimalShelterDto;

    @ApiProperty()
    @IsNotEmpty()
    @Type(() => UserDto)
    user: UserDto;
}

