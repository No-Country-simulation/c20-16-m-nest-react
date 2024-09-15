import { BadRequestException, HttpException, HttpStatus, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { CreateAdoptionDto } from './dto/create-adoption.dto';
import { AdoptionDto } from './dto/adoption.dto';
import { UpdateAdoptionDto } from './dto/update-adoption.dto';
import { Adoption } from './entities/adoption.entity';
import { plainToInstance } from 'class-transformer';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { User } from '../user/entities/user.entity';
import { Animal } from '../animal/entities/animal.entity';

@Injectable()
export class AdoptionService {
  constructor(
    @InjectRepository(Adoption)
    private readonly adoptionRepository: Repository<Adoption>,
    @InjectRepository(Animal)
    private readonly animalRepository: Repository<Animal>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  async create(createAdoptionDto: CreateAdoptionDto) {
    try {
      const adoption = new Adoption();

      // Asignar valores simples
      adoption.voucher = createAdoptionDto.voucher;
      adoption.observations = createAdoptionDto.observations;

      // Transformar los IDs en entidades
      adoption.animal = await this.animalRepository.findOneByOrFail({ id: createAdoptionDto.animal });
      adoption.user = await this.userRepository.findOneByOrFail({ id: createAdoptionDto.user });

      await this.adoptionRepository.save(adoption);
      return plainToInstance(AdoptionDto, adoption);
    } catch (error) {
      throw new HttpException('Adoption no guardado', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findActives(options: IPaginationOptions): Promise<Pagination<AdoptionDto>> {
    try {
      const queryBuilder = this.adoptionRepository.createQueryBuilder('adoption');
      queryBuilder
        .leftJoinAndSelect('adoption.idAdoptionAnimal', 'adoptionAnimal') // Se contemplan las realciones planteadas en la Entity
        .leftJoinAndSelect('adoption.idAdoptionTypes', 'adoptionTypes')
        .orderBy('adoption.createAt', 'ASC');

      const paginatedAdoption = await paginate<Adoption>(queryBuilder, options);
      return new Pagination<AdoptionDto>(
        plainToInstance(AdoptionDto, paginatedAdoption.items),
        paginatedAdoption.meta, paginatedAdoption.links
      );
    } catch (error) {
      throw new BadRequestException(error.message, 'Adoption no encontrados')
    }
  }

  async findAll(options: IPaginationOptions): Promise<Pagination<AdoptionDto>> {
    try {
      const queryBuilder = this.adoptionRepository.createQueryBuilder('adoption');
      queryBuilder
        .withDeleted()
        .leftJoinAndSelect('adoption.idAdoptionShelther', 'adoptionShelter')
        .leftJoinAndSelect('adoption.idAdoptionTypes', 'adoptionTypes')
        .orderBy('adoption.createAt', 'ASC');

      const paginatedAdoption = await paginate<Adoption>(queryBuilder, options);
      return new Pagination<AdoptionDto>(
        plainToInstance(AdoptionDto, paginatedAdoption.items),
        paginatedAdoption.meta, paginatedAdoption.links
      );
    } catch (error) {
      throw new BadRequestException(error.message, 'Adoption no encontrados')
    }
  }

  async findOne(id: number): Promise<AdoptionDto> {
    const adoption = await this.adoptionRepository.findOne({
      where: {
        id
      } as FindOptionsWhere<Adoption>
    })
    try {
      if (!adoption) throw new Error
      return plainToInstance(AdoptionDto, adoption);
    } catch (error) {
      throw new NotFoundException(error.message, 'Adoption no encontrado')
    }
  }

  async update(id: number, updateAdoptionDto: UpdateAdoptionDto) {
    try {
      const updateData: Partial<Adoption> = {};

      // Asigna valores simples
      if (updateAdoptionDto.voucher !== undefined) updateData.voucher = updateAdoptionDto.voucher;
      if (updateAdoptionDto.observations !== undefined) updateData.observations = updateAdoptionDto.observations;

      // Transforma IDs en entidades
      if (updateAdoptionDto.animal !== undefined) {
        updateData.animal = await this.animalRepository.findOneByOrFail({
          id: updateAdoptionDto.animal,
        });
      }

      if (updateAdoptionDto.user !== undefined) {
        updateData.user = await this.userRepository.findOneByOrFail({
          id: updateAdoptionDto.user,
        });
      }

      await this.adoptionRepository.update(id, updateData);
      return await this.adoptionRepository.findOneByOrFail({ id });
    } catch (error) {
      throw new NotFoundException(error.message, 'Adoption no encontrado');
    }
  }

  async remove(id: number) {
    try {
      const adoptionToDelete = await this.adoptionRepository.softDelete(id)
      if (adoptionToDelete.affected === 0) {
        throw new NotFoundException('Adoption no encontrado');
      } else {
        return adoptionToDelete
      }
    } catch (error) {
      throw new InternalServerErrorException(error.message, 'Adoption no eliminado');
    }
  }

  async restore(id: number): Promise<Adoption> {
    try {

      const result = await this.adoptionRepository.restore(id);
      if (result.affected === 0) {
        throw new NotFoundException('Adoption no encontrado');
      }

      return this.adoptionRepository.findOne({ where: { id: id } });
    } catch (error) {
      throw new InternalServerErrorException(error.message, 'Adoption no Restaurado');
    }
  }
}
