import { Controller, Get, Post, Body, Param, Delete, Query, UseGuards, NotFoundException, Patch } from '@nestjs/common';
import { AnimalFeaturesService } from './animalfeatures.service';
import { CreateAnimalFeaturesDto } from './dto/create-animalfeatures.dto';
import { AnimalFeaturesDto } from './dto/animalfeatures.dto';
import { UpdateAnimalFeaturesDto } from './dto/update-animalfeatures.dto';
import { ApiBadRequestResponse, ApiBearerAuth, ApiBody, ApiForbiddenResponse, ApiOkResponse, ApiQuery, ApiTags, ApiResponse, ApiNotFoundResponse } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Pagination } from 'nestjs-typeorm-paginate';

const entityName = 'Tipo de Caracteristica';
const itemxpega = 10;

@ApiTags('Animal Features')
@Controller('animalfeatures')
@ApiForbiddenResponse({ description: `${entityName} no autorizado` })
@ApiBadRequestResponse({ description: 'Los datos enviados son incorrectos' })
export class AnimalFeaturesController {
  constructor(private readonly animalFeaturesService: AnimalFeaturesService) { }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  @ApiBody({ type: CreateAnimalFeaturesDto })
  @ApiOkResponse({ description: `El ${entityName} ha sido creado con éxito`, type: AnimalFeaturesDto })
  @ApiBadRequestResponse({ description: `Error al crear el ${entityName}` })
  async create(@Body() createAnimalFeaturesDto: CreateAnimalFeaturesDto) {
    return this.animalFeaturesService.create(createAnimalFeaturesDto);
  }

  @Post('restore/:id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  @ApiOkResponse({ description: `El ${entityName} ha sido restaurado con éxito`, type: AnimalFeaturesDto })
  @ApiNotFoundResponse({ description: `El ${entityName} no se encontró para restaurar` })
  async restore(@Param('id') id: number) {
    return this.animalFeaturesService.restore(id);
  }

  @Get()
  @ApiQuery({ name: "page", description: 'Número de la página que quiero que me devuelva, por defecto es la página 1', type: 'number', required: false })
  @ApiQuery({ name: "limit", description: `Cantidad de registros a devolver, por página devuelve ${itemxpega} sino se envía`, type: 'number', required: false })
  @ApiOkResponse({ description: `Lista paginada de ${entityName}`, type: [AnimalFeaturesDto] })
  @ApiNotFoundResponse({ description: `No se encontraron registros activos de ${entityName}` })
  async findActives(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = itemxpega,
  ): Promise<Pagination<AnimalFeaturesDto>> {
    try {
      const options = {
        page,
        limit,
        route: '/animalfeatures',
      };
      const animalfeatures = await this.animalFeaturesService.findActives(options);

      if (animalfeatures.items.length > 0) {
        return animalfeatures;
      } else {
        throw new Error();
      }
    } catch (error) {
      throw new NotFoundException('Usuarios no encontrados', error.message);
    }
  }

  @Get('/all')
  @ApiQuery({ name: "page", description: 'Número de la página que quiero que me devuelva, por defecto es la página 1', type: 'number', required: false })
  @ApiQuery({ name: "limit", description: `Cantidad de registros a devolver, por página devuelve ${itemxpega} sino se envía`, type: 'number', required: false })
  @ApiOkResponse({ description: `Lista paginada de todos los registros de ${entityName}`, type: [AnimalFeaturesDto] })
  @ApiNotFoundResponse({ description: `No se encontraron registros de ${entityName}` })
  async findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = itemxpega,
  ): Promise<Pagination<AnimalFeaturesDto>> {
    try {
      const options = {
        page,
        limit,
        route: '/animalfeatures/all',
      };
      const animalfeatures = await this.animalFeaturesService.findAll(options);

      if (animalfeatures.items.length > 0) {
        return animalfeatures;
      } else {
        throw new Error();
      }
    } catch (error) {
      throw new NotFoundException('Usuarios no encontrados', error.message);
    }
  }

  @Get(':id')
  @ApiOkResponse({ description: `Detalles del ${entityName} encontrado`, type: AnimalFeaturesDto })
  @ApiNotFoundResponse({ description: `El ${entityName} con el ID especificado no se encontró` })
  async findOne(@Param('id') id: number) {
    return this.animalFeaturesService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  @ApiOkResponse({ description: `El ${entityName} ha sido modificado con éxito`, type: AnimalFeaturesDto })
  @ApiNotFoundResponse({ description: `El ${entityName} con el ID especificado no se encontró para modificar` })
  @ApiBadRequestResponse({ description: 'Los datos enviados son incorrectos' })
  async update(@Param('id') id: number, @Body() updateAnimalFeaturesDto: UpdateAnimalFeaturesDto) {
    return this.animalFeaturesService.update(id, updateAnimalFeaturesDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  @ApiOkResponse({ description: `El ${entityName} ha sido eliminado con éxito` })
  @ApiNotFoundResponse({ description: `El ${entityName} con el ID especificado no se encontró para eliminar` })
  async remove(@Param('id') id: number) {
    return this.animalFeaturesService.remove(id);
  }
}
