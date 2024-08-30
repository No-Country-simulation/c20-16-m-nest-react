import { BadRequestException, HttpException, HttpStatus, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsOrder, FindOptionsWhere, MoreThanOrEqual, Repository } from 'typeorm';
import { CreateAnimalTypesDto } from './dto/create-animaltypes.dto';
import { AnimalTypesDto } from './dto/animaltypes.dto';
import { UpdateAnimalTypesDto } from './dto/update-animaltypes.dto';
import { AnimalTypes } from './entities/animaltypes.entity';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class AnimalTypesService {
  constructor(
    @InjectRepository(AnimalTypes)
    private readonly animaltypesRepository: Repository<AnimalTypes>
  ) { }

  async create(createAnimalTypesDto: CreateAnimalTypesDto) {
    try {
      const animaltypes = this.animaltypesRepository.create(createAnimalTypesDto);
      return await this.animaltypesRepository.save(animaltypes);
    } catch (error) {
      throw new HttpException('Tipo no guardado', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findActives(offset: number): Promise<AnimalTypesDto[]> {
    try {
      const animaltypes = await this.animaltypesRepository.find({
        take: offset || 0,
        order: { startDate: 'ASC' } as FindOptionsOrder<AnimalTypes>,
        where: {
          deletedAt: null,
          createAt: MoreThanOrEqual(new Date())
        } as FindOptionsWhere<AnimalTypes>
      });
      return plainToInstance(AnimalTypesDto, animaltypes);
    } catch (error) {
      throw new BadRequestException(error.message, 'Tipos no encontrados')
    }
  }

  async findAll(offset: number): Promise<AnimalTypesDto[]> {
    try {
      const animaltypes = await this.animaltypesRepository.find({
        take: offset || 0,
        order: { name: 'ASC' } as FindOptionsOrder<AnimalTypes>,
      });
      return plainToInstance(AnimalTypesDto, animaltypes);
    } catch (error) {
      throw new BadRequestException(error.message, 'Tipos no encontrados')
    }
  }

  async findOne(id: number): Promise<AnimalTypesDto> {
    const animaltypes = await this.animaltypesRepository.findOne({
      where: {
        deletedAt: null,
        id
      } as FindOptionsWhere<AnimalTypes>
    })
    try {
      if (!animaltypes) throw new Error
      return animaltypes;
    } catch (error) {
      throw new NotFoundException(error.message, 'Tipo no encontrado')
    }
  }

  async update(id: number, updateAnimalTypesDto: UpdateAnimalTypesDto): Promise<AnimalTypesDto> {
    const animaltypes = await this.animaltypesRepository.preload({
      id,
      ...updateAnimalTypesDto,
    });

    try {
      if (!animaltypes) {
        throw new NotFoundException('Tipo no encontrado');
      }
      return this.animaltypesRepository.save(animaltypes);
    } catch (error) {
      throw new NotFoundException(error.message, 'Tipo no encontrado')
    }
  }

  async remove(id: number) {
    const animaltypesToDelete = await this.animaltypesRepository.softDelete(id)
    if (animaltypesToDelete.affected === 0) {
      throw new NotFoundException('Tipo no encontrado');
    } else {
      return animaltypesToDelete
    }
  }

  async restore(id: number): Promise<AnimalTypes> {
    try {

      const result = await this.animaltypesRepository.restore(id);
      if (result.affected === 0) {
        throw new NotFoundException('Tipo no encontrado');
      }

      return this.animaltypesRepository.findOne({ where: { id: id } });
    } catch (error) {
      throw new InternalServerErrorException(error.message, 'Tipo no Restaurado');
    }
  }
}
