import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiForbiddenResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { AnimalShelterService } from './animalshelter.service';
import { CreateAnimalShelterDto } from './dto/create-animalshelter.dto';
import { AnimalShelterDto } from './dto/animalshelter.dto';
import { UpdateAnimalShelterDto } from './dto/update-animalshelter.dto';

@ApiTags('Animal Types')
@Controller('animalshelter')
@ApiCreatedResponse({ description: 'El Tipo ha sdio agregado' })
@ApiForbiddenResponse({ description: 'Tipo no autorizado' })
@ApiBadRequestResponse({ description: 'Los datos enviados son incorrectos' })
export class AnimalShelterController {
  constructor(private readonly eventsService: AnimalShelterService) { }

  @Post()
  create(@Body() createAnimalShlterDto: CreateAnimalShelterDto) {
    return this.eventsService.create(createAnimalShlterDto);
  }

  @Get()
  @ApiParam({ name: "offset", description: 'Cantidad de registros a devolver, por defecto devuelve todos los Tipos activos', type: 'number', required: false })
  async findActives(@Query('offset') offset: number): Promise<AnimalShelterDto[]> {
    return this.eventsService.findActives(offset);
  }

  @Get('/all')
  async findAll(@Query('offset') offset: number): Promise<AnimalShelterDto[]> {
    return this.eventsService.findAll(offset);
  }

  @Get(':id')
  @ApiParam({ name: "offset", description: 'Cantidad de registros a devolver, por defecto devuelve todos', type: 'number', required: false })
  findOne(@Param('id') id: number) {
    return this.eventsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateAnimalShlterDto: UpdateAnimalShelterDto) {
    return this.eventsService.update(id, updateAnimalShlterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventsService.remove(+id);
  }

  @Post('restore/:id')
  async restore(@Param('id') id: number): Promise<AnimalShelterDto> {
    return this.eventsService.restore(id);
  }
}
