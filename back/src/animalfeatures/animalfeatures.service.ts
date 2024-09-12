import { BadRequestException, HttpException, HttpStatus, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { CreateAnimalFeaturesDto } from './dto/create-animalfeatures.dto';
import { AnimalFeaturesDto } from './dto/animalfeatures.dto';
import { UpdateAnimalFeaturesDto } from './dto/update-animalfeatures.dto';
import { AnimalFeatures } from './entities/animalfeatures.entity';
import { plainToInstance } from 'class-transformer';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';

@Injectable()
export class AnimalFeaturesService {
  constructor(
    @InjectRepository(AnimalFeatures)
    private readonly animalfeaturesRepository: Repository<AnimalFeatures>
  ) { }

  async create(createAnimalFeaturesDto: CreateAnimalFeaturesDto) {
    try {
      const resanimalfeatures = await this.animalfeaturesRepository.findOne({
        where: { name: createAnimalFeaturesDto.name },
      });

      if (resanimalfeatures) throw new BadRequestException('Tipo ya existe');
      const animalfeatures = this.animalfeaturesRepository.create(createAnimalFeaturesDto);
      await this.animalfeaturesRepository.save(animalfeatures);
      return plainToInstance(AnimalFeaturesDto, animalfeatures);
    } catch (error) {
      throw new HttpException('Tipo no guardado', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findActives(options: IPaginationOptions): Promise<Pagination<AnimalFeaturesDto>> {
    try {
      const queryBuilder = this.animalfeaturesRepository.createQueryBuilder('animalfeatures');
      queryBuilder.orderBy('animalfeatures.createAt', 'ASC');

      const paginatedAnimalFeatures = await paginate<AnimalFeatures>(queryBuilder, options);
      return new Pagination<AnimalFeaturesDto>(
        plainToInstance(AnimalFeaturesDto, paginatedAnimalFeatures.items),
        paginatedAnimalFeatures.meta, paginatedAnimalFeatures.links
      );
    } catch (error) {
      throw new BadRequestException(error.message, 'Tipos no encontrados')
    }
  }

  async findAll(options: IPaginationOptions): Promise<Pagination<AnimalFeaturesDto>> {
    try {
      const queryBuilder = this.animalfeaturesRepository.createQueryBuilder('animalfeatures');
      queryBuilder
        .withDeleted()
        .leftJoinAndSelect('animalfeatures.idAnimalShelther', 'animalShelter')
        .orderBy('animalfeatures.createdAt', 'ASC');
      
      const paginatedAnimalFeatures = await paginate<AnimalFeatures>(queryBuilder, options);
      return new Pagination<AnimalFeaturesDto>(
        plainToInstance(AnimalFeaturesDto, paginatedAnimalFeatures.items),
        paginatedAnimalFeatures.meta, paginatedAnimalFeatures.links
      );
    } catch (error) {
      throw new BadRequestException(error.message, 'Tipos no encontrados')
    }
  }

  async findOne(id: number): Promise<AnimalFeaturesDto> {
    const animalfeatures = await this.animalfeaturesRepository.findOne({
      where: {
        id,
      } as FindOptionsWhere<AnimalFeatures>,
      relations: ['animal'], // Asegúrate de cargar las relaciones necesarias
    });
  
    if (!animalfeatures) {
      throw new NotFoundException('Característica animal no encontrada', 'Tipo no encontrado');
    }
  
    // Transformar la entidad al DTO usando plainToInstance
    return plainToInstance(AnimalFeaturesDto, animalfeatures, {
      excludeExtraneousValues: true, // Excluir valores no expuestos en el DTO
    });
  }

  async update(id: number, updateAnimalFeaturesDto: UpdateAnimalFeaturesDto) {
    try {
      return this.animalfeaturesRepository.update(id, updateAnimalFeaturesDto);
    } catch (error) {
      throw new NotFoundException(error.message, 'Tipo no encontrado')
    }
  }

  async remove(id: number) {
    try {
      const animalfeaturesToDelete = await this.animalfeaturesRepository.softDelete(id)
      if (animalfeaturesToDelete.affected === 0) {
        throw new NotFoundException('Tipo no encontrado');
      } else {
        return animalfeaturesToDelete
      }
    } catch (error) {
      throw new InternalServerErrorException(error.message, 'Tipo no eliminado');
    }
  }

  async restore(id: number): Promise<AnimalFeatures> {
    try {
      const result = await this.animalfeaturesRepository.restore(id);
      if (result.affected === 0) {
        throw new NotFoundException('Tipo no encontrado');
      }
      return this.animalfeaturesRepository.findOne({ where: { id: id } });
    } catch (error) {
      throw new InternalServerErrorException(error.message, 'Tipo no Restaurado');
    }
  }
}
