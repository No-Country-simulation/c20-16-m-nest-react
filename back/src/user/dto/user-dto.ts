import { Exclude, Expose } from 'class-transformer';
import { IsString, IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class UserDto {
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
    readonly firstName: string;

    @Exclude() // Esta propiedad no será expuesta
    readonly password: string;
    
    @Expose()
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
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
