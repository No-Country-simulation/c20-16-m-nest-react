import { BadRequestException, HttpException, HttpStatus, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { AnimalDto } from './dto/animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { Animal } from './entities/animal.entity';
import { plainToInstance } from 'class-transformer';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';

@Injectable()
export class AnimalService {
  constructor(
    @InjectRepository(Animal)
    private readonly animalRepository: Repository<Animal>
  ) { }

  async create(createAnimalDto: CreateAnimalDto) {
    const existingAnimal = await this.animalRepository.findOne({
      where: { name: createAnimalDto.name },
    });

    if (existingAnimal) throw new BadRequestException('Animal ya existe');
    
    try {
      const newAnimal = this.animalRepository.create(createAnimalDto);
      await this.animalRepository.save(newAnimal);
      return plainToInstance(AnimalDto, newAnimal);
    } catch (error) {
      throw new InternalServerErrorException('Error al guardar el animal', error.message);
    }
  }

  async findActives(options: IPaginationOptions): Promise<Pagination<AnimalDto>> {
    try {
      const queryBuilder = this.animalRepository.createQueryBuilder('animal');
      queryBuilder
        .leftJoinAndSelect('animal.idAnimalShelther', 'animalShelter')
        .leftJoinAndSelect('animal.idAnimalTypes', 'animalTypes')
        // .orderBy('animal.createdAt', 'ASC');

      const paginatedAnimal = await paginate<Animal>(queryBuilder, options);
      return new Pagination<AnimalDto>(
        plainToInstance(AnimalDto, paginatedAnimal.items),
        paginatedAnimal.meta,
        paginatedAnimal.links
      );
    } catch (error) {
      throw new BadRequestException('Error al buscar animales activos', error.message);
    }
  }

  async findAll(options: IPaginationOptions): Promise<Pagination<AnimalDto>> {
    try {
      const queryBuilder = this.animalRepository.createQueryBuilder('animal');
      queryBuilder
        .withDeleted()
        .leftJoinAndSelect('animal.idAnimalShelther', 'animalShelter')
        .leftJoinAndSelect('animal.idAnimalTypes', 'animalTypes')
        .orderBy('animal.createdAt', 'ASC');

      const paginatedAnimal = await paginate<Animal>(queryBuilder, options);
      return new Pagination<AnimalDto>(
        plainToInstance(AnimalDto, paginatedAnimal.items),
        paginatedAnimal.meta,
        paginatedAnimal.links
      );
    } catch (error) {
      throw new BadRequestException('Error al buscar animales', error.message);
    }
  }

  async findOne(id: number): Promise<AnimalDto> {
    try {
      const animal = await this.animalRepository.findOne({
        where: { id } as FindOptionsWhere<Animal>,
        relations: ['animaltypes']
      });

      if (!animal) {
        throw new NotFoundException('Animal no encontrado');
      }

      return plainToInstance(AnimalDto, animal);
    } catch (error) {
      throw new InternalServerErrorException('Error al buscar el animal', error.message);
    }
  }

  async update(id: number, updateAnimalDto: UpdateAnimalDto) {
    try {
      const updateResult = await this.animalRepository.update(id, updateAnimalDto);
  
      if (updateResult.affected === 0) {
        throw new NotFoundException('Animal no encontrado');
      }
  
      const updatedAnimal = await this.animalRepository.findOne({ where: { id } });
      return plainToInstance(AnimalDto, updatedAnimal);
    } catch (error) {
      throw new InternalServerErrorException('Error al actualizar el animal', error.message);
    }
  }
  

  async remove(id: number) {
    try {
      const deleteResult = await this.animalRepository.softDelete(id);

      if (deleteResult.affected === 0) {
        throw new NotFoundException('Animal no encontrado');
      }

      return deleteResult;
    } catch (error) {
      throw new InternalServerErrorException('Error al eliminar el animal', error.message);
    }
  }

  async restore(id: number): Promise<AnimalDto> {
    try {
      const restoreResult = await this.animalRepository.restore(id);

      if (restoreResult.affected === 0) {
        throw new NotFoundException('Animal no encontrado');
      }

      const restoredAnimal = await this.animalRepository.findOne({ where: { id } });
      return plainToInstance(AnimalDto, restoredAnimal);
    } catch (error) {
      throw new InternalServerErrorException('Error al restaurar el animal', error.message);
    }
  }
}
