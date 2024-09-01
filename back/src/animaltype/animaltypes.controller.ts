import { Controller, Get, Post, Body, Param, Delete, Query, UseGuards, NotFoundException, Put } from '@nestjs/common';
import { AnimalTypesService } from './animaltypes.service';
import { CreateAnimalTypesDto } from './dto/create-animaltypes.dto';
import { AnimalTypesDto } from './dto/animaltypes.dto';
import { UpdateAnimalTypesDto } from './dto/update-animaltypes.dto';
import { ApiBadRequestResponse, ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiForbiddenResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Pagination } from 'nestjs-typeorm-paginate';

const entityName = 'Tipo'
const itemxpega = 10

@ApiTags('Animal Types')
@Controller('animaltypes')
@ApiCreatedResponse({ description: `El ${entityName} ha sdio agregado` })
@ApiForbiddenResponse({ description: `${entityName} no autorizado` })
@ApiBadRequestResponse({ description: 'Los datos enviados son incorrectos' })
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth('access-token')
export class AnimalTypesController {
  constructor(private readonly animalTypesService: AnimalTypesService) { }

  @Post()
  @ApiBody({ type: AnimalTypesDto })
  create(@Body() createAnimalTypesDto: CreateAnimalTypesDto) {
    return this.animalTypesService.create(createAnimalTypesDto);
  }

  @Post('restore/:id')
  async restore(@Param('id') id: number): Promise<AnimalTypesDto> {
    return this.animalTypesService.restore(id);
  }

  @Get()
  @ApiQuery({ name: "page", description: 'Numero de la pagina que quiero que me devuelva, por defecto es la pagina 1', type: 'number', required: false })
  @ApiQuery({ name: "limit", description: `Cantidad de registros a devolver, por pagina devuelve ${itemxpega} sino se envia`, type: 'number', required: false })
  async findActives(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = itemxpega,
  ): Promise<Pagination<AnimalTypesDto>> {
    try {
      const options = {
        page,
        limit,
        route: '/animaltypes',
      };
      const users = await this.animalTypesService.findActives(options);

      if (users.items.length > 0) {
        return users;
      } else {
        throw new Error();
      }
    } catch (error) {
      throw new NotFoundException('Usuarios no encontrados', error.message);
    }
  }

  @Get('/all')
  @ApiQuery({ name: "page", description: 'Numero de la pagina que quiero que me devuelva, por defecto es la pagina 1', type: 'number', required: false })
  @ApiQuery({ name: "limit", description: `Cantidad de registros a devolver, por pagina devuelve ${itemxpega} sino se envia`, type: 'number', required: false })
  async findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = itemxpega,
  ): Promise<Pagination<AnimalTypesDto>> {
    try {
      const options = {
        page,
        limit,
        route: '/animaltypes/all',
      };
      const users = await this.animalTypesService.findAll(options);

      if (users.items.length > 0) {
        return users;
      } else {
        throw new Error();
      }
    } catch (error) {
      throw new NotFoundException('Usuarios no encontrados', error.message);
    }
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.animalTypesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateAnimalTypesDto: UpdateAnimalTypesDto) {
    return this.animalTypesService.update(id, updateAnimalTypesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animalTypesService.remove(+id);
  }
}
