import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RescatistaService } from './rescatista.service';
import { CreateRescatistaDto } from './dto/create-rescatista.dto';
import { UpdateRescatistaDto } from './dto/update-rescatista.dto';

@Controller('rescatista')
export class RescatistaController {
  constructor(private readonly rescatistaService: RescatistaService) {}

  @Post()
  create(@Body() createRescatistaDto: CreateRescatistaDto) {
    return this.rescatistaService.create(createRescatistaDto);
  }

  @Get()
  findAll() {
    return this.rescatistaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rescatistaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRescatistaDto: UpdateRescatistaDto) {
    return this.rescatistaService.update(+id, updateRescatistaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rescatistaService.remove(+id);
  }
}
