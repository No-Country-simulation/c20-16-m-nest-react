import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsOrder, FindOptionsWhere, MoreThanOrEqual, Repository } from 'typeorm';
import { CreateAnimalShelterDto } from './dto/create-animalshelter.dto';
import { AnimalShelterDto } from './dto/animalshelter.dto';
import { UpdateAnimalShelterDto } from './dto/update-animalshelter.dto';
import { plainToInstance } from 'class-transformer';
import { AnimalShelter } from './entities/animalshelter.entity';

@Injectable()
export class AnimalShelterService {
  constructor(
    @InjectRepository(AnimalShelter)
    private readonly animalshelterRepository: Repository<AnimalShelter>
  ) { }

  async create(createAnimalShelterDto: CreateAnimalShelterDto) {
    try {
      const animalshelter = this.animalshelterRepository.create(createAnimalShelterDto);
      return await this.animalshelterRepository.save(animalshelter);
    } catch (error) {
      console.error('Error guardando el Tipo:', error);
      throw new InternalServerErrorException('Tipo no guardado');
    }
  }

  async findActives(offset: number): Promise<AnimalShelterDto[]> {
    try {
      const animalshelter = await this.animalshelterRepository.find({
        take: offset || 0,
        order: { startDate: 'ASC' } as FindOptionsOrder<AnimalShelter>,
        where: {
          deletedAt: null,
          createAt: MoreThanOrEqual(new Date())
        } as FindOptionsWhere<AnimalShelter>
      });
      return plainToInstance(AnimalShelterDto, animalshelter);
    } catch (error) {
      throw new BadRequestException(error.message, 'Tipos no encontrados')
    }
  }

  async findAll(offset: number): Promise<AnimalShelterDto[]> {
    try {
      const animalshelter = await this.animalshelterRepository.find({
        take: offset || 0,
        order: { name: 'ASC' } as FindOptionsOrder<AnimalShelter>,
      });
      return plainToInstance(AnimalShelterDto, animalshelter);
    } catch (error) {
      throw new BadRequestException(error.message, 'Tipos no encontrados')
    }
  }

  async findOne(id: number) {
    const animalshelter = await this.animalshelterRepository.findOne({
      where: {
        deletedAt: null,
        id
      } as FindOptionsWhere<AnimalShelter>
    })
    try {
      if (!animalshelter) throw new Error
      return animalshelter;
    } catch (error) {
      throw new NotFoundException(error.message, 'Tipo no encontrado')
    }
  }

  async update(id: number, updateAnimalShelterDto: UpdateAnimalShelterDto) {
    const animalshelter = await this.animalshelterRepository.preload({
      id,
      ...updateAnimalShelterDto,
    });

    if (!animalshelter) {
      throw new NotFoundException('Tipo no encontrado');
    }

    return this.animalshelterRepository.save(animalshelter);
  }

  async remove(id: number) {
    const animalshelterToDelete = await this.animalshelterRepository.softDelete(id)
    if (animalshelterToDelete.affected === 0) {
      throw new NotFoundException('Tipo no encontrado');
    } else {
      return animalshelterToDelete
    }
  }

  async restore(id: number): Promise<AnimalShelter> {
    const result = await this.animalshelterRepository.restore(id);
    if (result.affected === 0) {
      throw new NotFoundException('Tipo no encontrado');
    }

    return this.animalshelterRepository.findOne({ where: { id: id } });
  }
}
