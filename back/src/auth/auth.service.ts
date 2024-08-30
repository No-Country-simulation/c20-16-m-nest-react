import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcryptjs from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly usersService: UserService
    ) { }

    async register(registerUser: CreateUserDto) {
        const user = await this.usersService.findOneByUsername(registerUser.username);

        if (user) {
            throw new BadRequestException('Este Miembro ya tiene un usuario asignado');
        }

        const hashedPassword = await bcryptjs.hash(registerUser.password, 10);

        await this.usersService.create(registerUser);
    }

    async login({ username, password }: LoginDto) {
        try {
            const user = await this.usersService.findOneByUsername(username);
            const isValidPassword = await bcryptjs.compare(password, user.password);

            if (user && !isValidPassword) {
                throw new UnauthorizedException('Usuario no encontrado');
            } else {
                const payload = {
                    user: user.username,
                    avatarUrl: user.avatarUrl,
                    profileData: {
                        firstName: user.firstName,
                        lastName: user.lastName,
                    }
                };
                const token = await this.jwtService.signAsync(payload);
                return {
                    token: token,
                    username: user.username
                }
            };
        } catch (error) {
            throw new Error(error)

        }
    }

}
