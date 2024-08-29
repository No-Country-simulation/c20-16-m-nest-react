import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsEmail, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateUserDto {
    @ApiProperty()
    @IsString()
    @IsOptional()
    user: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    password: string;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    userState: boolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    updatePassword: boolean;

    @ApiProperty({ nullable: true })
    @IsString()
    @IsOptional()
    avatarUrl: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    profileUrl: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    firstName: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    lastName: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    address: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    city: string;

    @ApiProperty()
    @IsDate()
    @IsOptional()
    birthday: Date;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    zipCode: number;

    @ApiProperty()
    @IsString()
    @IsOptional()
    phoneNumber: string;

    @ApiProperty()
    @IsEmail()
    @IsOptional()
    email: string;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    state: boolean;

    @ApiProperty()
    @IsString()
    @IsOptional()
    observations: string;

}
