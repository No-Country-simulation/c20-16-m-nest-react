import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsString, IsOptional, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty()
    @IsOptional()
    @IsString()
    avatarUrl?: string;

    @ApiProperty()
    @IsBoolean()
    userState: boolean;

    @ApiProperty()
    @IsBoolean()
    updatePassword: boolean;
}