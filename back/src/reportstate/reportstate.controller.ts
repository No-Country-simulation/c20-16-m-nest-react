import { Controller, Get, Post, Body, Param, Delete, Query, UseGuards, NotFoundException, Patch } from '@nestjs/common';
import { ReportStateService } from './reportstate.service';
import { CreateReportStateDto } from './dto/create-reportstate.dto';
import { ReportStateDto } from './dto/reportstate.dto';
import { UpdateReportStateDto } from './dto/update-reportstate.dto';
import { ApiBadRequestResponse, ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiForbiddenResponse, ApiNotFoundResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Pagination } from 'nestjs-typeorm-paginate';

const entityName = 'Reporte de Estado';
const itemxpega = 10;

@ApiTags('Report State')
@Controller('reportstate')
@ApiForbiddenResponse({ description: `${entityName} no autorizado` })
@ApiBadRequestResponse({ description: 'Los datos enviados son incorrectos' })
export class ReportStateController {
  constructor(private readonly reportStateService: ReportStateService) { }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  @ApiBody({ type: ReportStateDto })
  @ApiOkResponse({ description: `El ${entityName} ha sido creado con éxito`, type: ReportStateDto })
  @ApiBadRequestResponse({ description: `Error al crear el ${entityName}` })
    async create(@Body() createReportStateDto: CreateReportStateDto) {
    return this.reportStateService.create(createReportStateDto);
  }

  @Post('restore/:id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  @ApiOkResponse({ description: `El ${entityName} ha sido restaurado con éxito`, type: ReportStateDto })
  @ApiNotFoundResponse({ description: `El ${entityName} no se encontró para restaurar` })
  async restore(@Param('id') id: number) {
    return this.reportStateService.restore(id);
  }

  @Get()
  @ApiQuery({ name: "page", description: 'Numero de la pagina que quiero que me devuelva, por defecto es la pagina 1', type: 'number', required: false })
  @ApiQuery({ name: "limit", description: `Cantidad de registros a devolver, por pagina devuelve ${itemxpega} sino se envia`, type: 'number', required: false })
  @ApiOkResponse({ description: `Lista paginada de ${entityName}`, type: [ReportStateDto] })
  @ApiNotFoundResponse({ description: `No se encontraron registros activos de ${entityName}` })
    async findActives(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = itemxpega,
  ): Promise<Pagination<ReportStateDto>> {
    try {
      const options = {
        page,
        limit,
        route: '/reportstate',
      };
      const reportstate = await this.reportStateService.findActives(options);

      if (reportstate.items.length > 0) {
        return reportstate;
      } else {
        throw new Error();
      }
    } catch (error) {
      throw new NotFoundException('Reporte Estado  no encontrados', error.message);
    }
  }

  @Get('/all')
  @ApiQuery({ name: "page", description: 'Numero de la pagina que quiero que me devuelva, por defecto es la pagina 1', type: 'number', required: false })
  @ApiQuery({ name: "limit", description: `Cantidad de registros a devolver, por pagina devuelve ${itemxpega} sino se envia`, type: 'number', required: false })
  @ApiOkResponse({ description: `Lista paginada de todos los registros de ${entityName}`, type: [ReportStateDto] })
  @ApiNotFoundResponse({ description: `No se encontraron registros de ${entityName}` })
  async findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = itemxpega,
  ): Promise<Pagination<ReportStateDto>> {
    try {
      const options = {
        page,
        limit,
        route: '/reportstate/all',
      };
      const reportstate = await this.reportStateService.findAll(options);

      if (reportstate.items.length > 0) {
        return reportstate;
      } else {
        throw new Error();
      }
    } catch (error) {
      throw new NotFoundException('Reporte Estado no encontrados', error.message);
    }
  }

  @Get(':id')
  @ApiOkResponse({ description: `Detalles del ${entityName} encontrado`, type: ReportStateDto })
  @ApiNotFoundResponse({ description: `El ${entityName} con el ID especificado no se encontró` })
    async findOne(@Param('id') id: number) {
    return this.reportStateService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  @ApiOkResponse({ description: `El ${entityName} ha sido modificado con éxito`, type: ReportStateDto })
  @ApiNotFoundResponse({ description: `El ${entityName} con el ID especificado no se encontró para modificar` })
  @ApiBadRequestResponse({ description: 'Los datos enviados son incorrectos' })
  async update(@Param('id') id: number, @Body() updateReportStateDto: UpdateReportStateDto) {
    return this.reportStateService.update(id, updateReportStateDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  @ApiOkResponse({ description: `El ${entityName} ha sido eliminado con éxito` })
  @ApiNotFoundResponse({ description: `El ${entityName} con el ID especificado no se encontró para eliminar` })
    async remove(@Param('id') id: number) {
    return this.reportStateService.remove(id);
  }
}
