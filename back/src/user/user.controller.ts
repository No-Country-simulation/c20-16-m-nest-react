import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, HttpException, HttpStatus, NotFoundException, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiForbiddenResponse } from '@nestjs/swagger';
import { User } from './entities/user.entity';
import { UserDto } from './dto/user-dto';

@ApiTags('Users')
@Controller('users')
@ApiCreatedResponse({ description: 'El Usuario ha sido creado' })
@ApiForbiddenResponse({ description: 'Usuario no autorizado' })
@ApiBadRequestResponse({ description: 'Los datos enviados son incorrectos' })
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    @ApiBody({ type: CreateUserDto })
    async create(@Body() createUserDto: CreateUserDto) {
        if (!createUserDto) {
            throw new BadRequestException()
        }
        try {
            return this.userService.create(createUserDto);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)

        }
    }

    @Get()
    @ApiResponse({ type: CreateUserDto })
    @ApiOperation({ summary: 'Lista los usuarios activos' })
    async findActives() {
        try {
            const user = await this.userService.findActives()
            if (user.length > 0) {
                return user
            } else {
                throw new Error
            }
        } catch (error) {
            throw new NotFoundException(error.message, 'Usuarios no encontrados')
        }
    }

    @Get('/all')
    @ApiBody({ type: User })
    @ApiOperation({ summary: 'Lista los usuarios activos e inactivos' })
    async findAll(): Promise<UserDto[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.userService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(id, updateUserDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.userService.remove(id);
    }
}
