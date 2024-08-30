import { Exclude, Expose } from 'class-transformer';
import { IsString, IsEmail, IsNumber } from 'class-validator';

export class UserDto {
    @IsNumber()
    @Expose()
    id: number;

    @IsString()
    @Expose()
    readonly username: string;

    @IsEmail()
    @Expose()
    readonly email: string;

    @IsString()
    @Expose()
    readonly lastName: string;

    @IsString()
    @Expose()
    readonly avatarUrl: string;

    @IsString()
    @Expose()
    readonly firstName: string;

    @Exclude() // Esta propiedad no será expuesta
    readonly password: string;
}

export class UserLogin {
    @IsNumber()
    @Expose()
    id: number;

    @IsString()
    @Expose()
    readonly username: string;

    @IsString()
    @Expose()
    readonly password: string;
}
