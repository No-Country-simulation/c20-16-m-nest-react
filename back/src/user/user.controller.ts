import { Controller, Get, Post, Body, Param, Delete, NotFoundException, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiForbiddenResponse } from '@nestjs/swagger';
import { UserDto } from './dto/user-dto';

const entityName = 'Usuario'
const itemxpega = 10

@ApiTags('Users')
@Controller('users')
@ApiCreatedResponse({ description: `El ${entityName} ha sdio agregado` })
@ApiForbiddenResponse({ description: `${entityName} no autorizado` })
@ApiBadRequestResponse({ description: 'Los datos enviados son incorrectos' })
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    @ApiBody({ type: CreateUserDto })
    async create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @Get()
    // @ApiParam({ name: "offset", description: `Cantidad de registros a devolver, por defecto devuelve todos los ${entityName} activos`, type: 'number', required: false })
    async findActives() {
        try {
            const user = await this.userService.findActives(itemxpega)
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
    // @ApiParam({ name: "offset", description: `Cantidad de registros a devolver, por defecto devuelve todos los ${entityName} activos`, type: 'number', required: false })
    findAll(): Promise<UserDto[]> {
        return this.userService.findAll(itemxpega);
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.userService.findOne(id);
    }

    @Get(':username')
    findOneByUsername(@Param('username') username: string) {
        return this.userService.findOneByUsername(username);
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
