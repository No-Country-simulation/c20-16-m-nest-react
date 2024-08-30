import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiForbiddenResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { AnimalTypesService } from './animaltypes.service';
import { CreateAnimalTypesDto } from './dto/create-animaltypes.dto';
import { AnimalTypesDto } from './dto/animaltypes.dto';
import { UpdateAnimalTypesDto } from './dto/update-animaltypes.dto';

const entityName = 'Tipo'

@ApiTags('Animal Types')
@Controller('animaltypes')
@ApiCreatedResponse({ description: `El ${entityName} ha sdio agregado` })
@ApiForbiddenResponse({ description: `${entityName} no autorizado` })
@ApiBadRequestResponse({ description: 'Los datos enviados son incorrectos' })
export class AnimalTypesController {
  constructor(private readonly animalTypesService: AnimalTypesService) { }

  @Post()
  create(@Body() createAnimalTypesDto: CreateAnimalTypesDto) {
    return this.animalTypesService.create(createAnimalTypesDto);
  }

  @Get()
  @ApiParam({ name: "offset", description: `Cantidad de registros a devolver, por defecto devuelve todos los ${entityName} activos`, type: 'number', required: false })
  findActives(@Query('offset') offset: number): Promise<AnimalTypesDto[]> {
    return this.animalTypesService.findActives(offset);
  }

  @Get('/all')
  findAll(@Query('offset') offset: number): Promise<AnimalTypesDto[]> {
    return this.animalTypesService.findAll(offset);
  }

  @Get(':id')
  @ApiParam({ name: "offset", description: 'Cantidad de registros a devolver, por defecto devuelve todos', type: 'number', required: false })
  findOne(@Param('id') id: number) {
    return this.animalTypesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateAnimalTypesDto: UpdateAnimalTypesDto) {
    return this.animalTypesService.update(id, updateAnimalTypesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animalTypesService.remove(+id);
  }

  @Post('restore/:id')
  async restore(@Param('id') id: number): Promise<AnimalTypesDto> {
    return this.animalTypesService.restore(id);
  }
}
