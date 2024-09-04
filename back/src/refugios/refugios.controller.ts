import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RefugiosService } from './refugios.service';
import { CreateRefugioDto } from './dto/create-refugio.dto';
import { UpdateRefugioDto } from './dto/update-refugio.dto';

@Controller('refugios')
export class RefugiosController {
  constructor(private readonly refugiosService: RefugiosService) {}

  @Post()
  create(@Body() createRefugioDto: CreateRefugioDto) {
    return this.refugiosService.create(createRefugioDto);
  }

  @Get()
  findAll() {
    return this.refugiosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.refugiosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRefugioDto: UpdateRefugioDto) {
    return this.refugiosService.update(+id, updateRefugioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.refugiosService.remove(+id);
  }
}
