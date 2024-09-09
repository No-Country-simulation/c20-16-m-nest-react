import { BadRequestException, HttpException, HttpStatus, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, In, Repository } from 'typeorm';
import { CreateAnimalShelterDto } from './dto/create-animalshelter.dto';
import { AnimalShelterDto } from './dto/animalshelter.dto';
import { UpdateAnimalShelterDto } from './dto/update-animalshelter.dto';
import { AnimalShelter } from './entities/animalshelter.entity';
import { plainToInstance } from 'class-transformer';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { AnimalTypes } from '../animaltype/entities/animaltypes.entity';

@Injectable()
export class AnimalShelterService {
  constructor(
    @InjectRepository(AnimalShelter) private readonly animalshelterRepository: Repository<AnimalShelter>,
    @InjectRepository(AnimalTypes) private readonly animalTypesRepository: Repository<AnimalTypes>
  ) { }

  async create(createAnimalShelterDto: CreateAnimalShelterDto) {
    try {
      const { animalTypeIds, ...shelterData } = createAnimalShelterDto;

      // Buscar los tipos de animales por sus IDs
      const animalTypes = await this.animalTypesRepository.find({
        where: {
            id: In(animalTypeIds),
        },
    });

      if (animalTypes.length !== animalTypeIds.length) {
          throw new Error('Algunos tipos de animales no fueron encontrados');
      }

      const newShelter = this.animalshelterRepository.create({
          ...shelterData,
          animalTypes,
      });

      await this.animalshelterRepository.save(newShelter);
      return plainToInstance(AnimalShelterDto, newShelter);
    } catch (error) {
      throw new HttpException('Tipo no guardado', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findActives(options: IPaginationOptions): Promise<Pagination<AnimalShelterDto>> {
    try {
      const queryBuilder = this.animalshelterRepository.createQueryBuilder('animalshelter');
      queryBuilder
      .leftJoinAndSelect('animalshelter.animalTypes', 'animalTypes')  
      .orderBy('animalshelter.createAt', 'ASC');

      const paginatedAnimalShelter = await paginate<AnimalShelter>(queryBuilder, options);
      return new Pagination<AnimalShelterDto>(
        plainToInstance(AnimalShelterDto, paginatedAnimalShelter.items),
        paginatedAnimalShelter.meta, paginatedAnimalShelter.links
      );
    } catch (error) {
      throw new BadRequestException(error.message, 'Tipos no encontrados')
    }
  }

  async findPendingAcceptance(options: IPaginationOptions): Promise<Pagination<AnimalShelterDto>> {
    try {
      const queryBuilder = this.animalshelterRepository.createQueryBuilder('animalshelter');
      queryBuilder
      .leftJoinAndSelect('animalshelter.animalTypes', 'animalTypes')  
      .where('animalshelter.state = :state', { state: false })
      .orderBy('animalshelter.createAt', 'ASC');

      const paginatedAnimalShelter = await paginate<AnimalShelter>(queryBuilder, options);
      return new Pagination<AnimalShelterDto>(
        plainToInstance(AnimalShelterDto, paginatedAnimalShelter.items),
        paginatedAnimalShelter.meta, paginatedAnimalShelter.links
      );
    } catch (error) {
      throw new BadRequestException(error.message, 'Tipos no encontrados')
    }
  }

  async findAll(options: IPaginationOptions): Promise<Pagination<AnimalShelterDto>> {
    try {
      const queryBuilder = this.animalshelterRepository.createQueryBuilder('animalshelter');
      queryBuilder
        .withDeleted()
        .leftJoinAndSelect('animalshelter.animalTypes', 'animalTypes')
        .orderBy('animalshelter.createAt', 'ASC');

      const paginatedAnimalShelter = await paginate<AnimalShelter>(queryBuilder, options);
      return new Pagination<AnimalShelterDto>(
        plainToInstance(AnimalShelterDto, paginatedAnimalShelter.items),
        paginatedAnimalShelter.meta, paginatedAnimalShelter.links
      );
    } catch (error) {
      throw new BadRequestException(error.message, 'Tipos no encontrados')
    }
  }

  async findOne(id: number): Promise<AnimalShelterDto> {
    const animalshelter = await this.animalshelterRepository.findOne({
      where: {
        id
      } as FindOptionsWhere<AnimalShelter>,
      relations: ['animalTypes']
    })
    try {
      if (!animalshelter) throw new Error
      return plainToInstance(AnimalShelterDto, animalshelter);
    } catch (error) {
      throw new NotFoundException(error.message, 'Tipo no encontrado')
    }
  }

  async update(id: number, updateAnimalShelterDto: UpdateAnimalShelterDto) {
    try {
      const animalshelterToUpdate = await this.animalshelterRepository.update(id, updateAnimalShelterDto);
      if (animalshelterToUpdate.affected === 0) {
        throw new NotFoundException('Tipo no encontrado');
      } else {
        return plainToInstance(AnimalShelterDto, animalshelterToUpdate);
      }
    } catch (error) {
      throw new InternalServerErrorException(error.message, 'Tipo no eliminado');
    }
  }

  async remove(id: number) {
    try {
      const animalshelterToDelete = await this.animalshelterRepository.softDelete(id)
      if (animalshelterToDelete.affected === 0) {
        throw new NotFoundException('Tipo no encontrado');
      } else {
        return animalshelterToDelete
      }
    } catch (error) {
      throw new InternalServerErrorException(error.message, 'Tipo no eliminado');
    }
  }

  async restore(id: number): Promise<AnimalShelter> {
    try {
      const result = await this.animalshelterRepository.restore(id);
      if (result.affected === 0) {
        throw new NotFoundException('Tipo no encontrado');
      }
      return this.animalshelterRepository.findOne({ where: { id: id } });
    } catch (error) {
      throw new InternalServerErrorException(error.message, 'Tipo no Restaurado');
    }
  }
}
