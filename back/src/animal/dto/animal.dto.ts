import { IsNotEmpty, IsOptional, IsString, IsNumber, IsUrl } from 'class-validator';
import { Type } from 'class-transformer';

export class AnimalDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional()
    @IsUrl()
    profileUrlImage?: string;

    @IsOptional()
    @IsNumber()
    @Type(() => Number)
    age?: number;

    @IsOptional()
    @IsString()
    observations?: string;

    @IsNotEmpty()
    @IsNumber()
    @Type(() => Number)
    idAnimalShelther: number;
}

