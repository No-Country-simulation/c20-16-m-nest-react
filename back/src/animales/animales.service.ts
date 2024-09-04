import { Injectable } from '@nestjs/common';
import { CreateAnimaleDto } from './dto/create-animale.dto';
import { UpdateAnimaleDto } from './dto/update-animale.dto';

@Injectable()
export class AnimalesService {
  create(createAnimaleDto: CreateAnimaleDto) {
    return 'This action adds a new animale';
  }

  findAll() {
    return `This action returns all animales`;
  }

  findOne(id: number) {
    return `This action returns a #${id} animale`;
  }

  update(id: number, updateAnimaleDto: UpdateAnimaleDto) {
    return `This action updates a #${id} animale`;
  }

  remove(id: number) {
    return `This action removes a #${id} animale`;
  }
}
