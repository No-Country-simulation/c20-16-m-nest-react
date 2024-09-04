import { Injectable } from '@nestjs/common';
import { CreateRescatistaDto } from './dto/create-rescatista.dto';
import { UpdateRescatistaDto } from './dto/update-rescatista.dto';

@Injectable()
export class RescatistaService {
  create(createRescatistaDto: CreateRescatistaDto) {
    return 'This action adds a new rescatista';
  }

  findAll() {
    return `This action returns all rescatista`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rescatista`;
  }

  update(id: number, updateRescatistaDto: UpdateRescatistaDto) {
    return `This action updates a #${id} rescatista`;
  }

  remove(id: number) {
    return `This action removes a #${id} rescatista`;
  }
}
