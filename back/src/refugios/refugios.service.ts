import { Injectable } from '@nestjs/common';
import { CreateRefugioDto } from './dto/create-refugio.dto';
import { UpdateRefugioDto } from './dto/update-refugio.dto';

@Injectable()
export class RefugiosService {
  create(createRefugioDto: CreateRefugioDto) {
    return 'This action adds a new refugio';
  }

  findAll() {
    return `This action returns all refugios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} refugio`;
  }

  update(id: number, updateRefugioDto: UpdateRefugioDto) {
    return `This action updates a #${id} refugio`;
  }

  remove(id: number) {
    return `This action removes a #${id} refugio`;
  }
}
