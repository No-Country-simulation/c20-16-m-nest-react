import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query, NotFoundException } from '@nestjs/common';
import { AdoptionService } from './adoption.service';
import { CreateAdoptionDto } from './dto/create-adoption.dto';
import { UpdateAdoptionDto } from './dto/update-adoption.dto';
import { AdoptionDto } from './dto/adoption.dto';
import { ApiBadRequestResponse, ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiForbiddenResponse, ApiNotFoundResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Pagination } from 'nestjs-typeorm-paginate';

const entityName = 'Adoption';
const itemxpega = 10;

@ApiTags('Adoption')
@Controller('adoption')
@ApiForbiddenResponse({ description: `${entityName} no autorizado` })
@ApiBadRequestResponse({ description: 'Los datos enviados son incorrectos' })
export class AdoptionController {
  constructor(private readonly adoptionService: AdoptionService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  @ApiBody({ type: CreateAdoptionDto, description: 'Datos necesarios para crear una adopción' })
  @ApiCreatedResponse({ description: `El ${entityName} ha sido agregado`, type: AdoptionDto })
  @ApiBadRequestResponse({ description: 'Error al crear la adopción' })
  create(@Body() createAdoptionDto: CreateAdoptionDto) {
    return this.adoptionService.create(createAdoptionDto);
  }

  @Post('restore/:id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  @ApiOkResponse({ description: `El ${entityName} ha sido restaurado`, type: AdoptionDto })
  @ApiNotFoundResponse({ description: `El ${entityName} con el id proporcionado no fue encontrado` })
  restore(@Param('id') id: number) {
    return this.adoptionService.restore(id);
  }

  @Get()
  @ApiQuery({ name: "page", description: 'Número de página a devolver, por defecto es 1', type: 'number', required: false })
  @ApiQuery({ name: "limit", description: `Cantidad de registros por página, por defecto ${itemxpega}`, type: 'number', required: false })
  @ApiOkResponse({ description: `Lista de adopciones activas`, type: Pagination<AdoptionDto> })
  @ApiNotFoundResponse({ description: 'No se encontraron adopciones activas' })
  async findActives(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = itemxpega,
  ): Promise<Pagination<AdoptionDto>> {
    try {
      const options = {
        page,
        limit,
        route: '/adoption',
      };
      const adoption = await this.adoptionService.findActives(options);

      if (adoption.items.length > 0) {
        return adoption;
      } else {
        throw new Error();
      }
    } catch (error) {
      throw new NotFoundException('Adopciones no encontradas', error.message);
    }
  }

  @Get('/all')
  @ApiQuery({ name: "page", description: 'Número de página a devolver, por defecto es 1', type: 'number', required: false })
  @ApiQuery({ name: "limit", description: `Cantidad de registros por página, por defecto ${itemxpega}`, type: 'number', required: false })
  @ApiOkResponse({ description: `Lista de todas las adopciones`, type: Pagination<AdoptionDto> })
  @ApiNotFoundResponse({ description: 'No se encontraron adopciones' })
  async findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = itemxpega,
  ): Promise<Pagination<AdoptionDto>> {
    try {
      const options = {
        page,
        limit,
        route: '/adoption/all',
      };
      const adoption = await this.adoptionService.findAll(options);

      if (adoption.items.length > 0) {
        return adoption;
      } else {
        throw new Error();
      }
    } catch (error) {
      throw new NotFoundException('Adopciones no encontradas', error.message);
    }
  }

  @Get(':id')
  @ApiOkResponse({ description: `Detalles de la adopción con ID proporcionado`, type: AdoptionDto })
  @ApiNotFoundResponse({ description: `No se encontró la adopción con el ID proporcionado` })
  findOne(@Param('id') id: number) {
    return this.adoptionService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  @ApiBody({ type: UpdateAdoptionDto, description: 'Datos necesarios para modificar una adopción' })
  @ApiOkResponse({ description: `El ${entityName} ha sido modificado`, type: AdoptionDto })
  @ApiBadRequestResponse({ description: 'Error al modificar la adopción' })
  update(@Param('id') id: string, @Body() updateAdoptionDto: UpdateAdoptionDto) {
    return this.adoptionService.update(+id, updateAdoptionDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  @ApiOkResponse({ description: `El ${entityName} ha sido eliminado` })
  @ApiNotFoundResponse({ description: `No se encontró el ${entityName} con el ID proporcionado` })
  remove(@Param('id') id: string) {
    return this.adoptionService.remove(+id);
  }
}
