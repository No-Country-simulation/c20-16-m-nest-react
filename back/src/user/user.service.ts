import * as bcrypt from "bcryptjs";
import { BadRequestException, HttpException, HttpStatus, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { plainToInstance } from "class-transformer";
import { UserDto } from "./dto/user-dto";
import { IPaginationOptions, paginate, Pagination } from "nestjs-typeorm-paginate";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepository.findOne({
      where: { username: createUserDto.username },
    });

    if (user) throw new BadRequestException('User ya existe');

    try {
      const password = await bcrypt.hash(createUserDto.password.toString(), 10);
      const newUser = { ...createUserDto, password };
      await this.userRepository.save(newUser);
      return plainToInstance(UserDto, newUser);
    } catch (error) {
      throw new HttpException('User no guardado', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findPendingAcceptance(options: IPaginationOptions): Promise<Pagination<UserDto>> {
    try {
      const queryBuilder = this.userRepository.createQueryBuilder('user');
      queryBuilder
      .where('user.state = :state', { state: false })
      .orderBy('user.createAt', 'ASC');


      // Añadir las relaciones necesarias para cargar los datos
      queryBuilder.leftJoinAndSelect('user.donation', 'donation');
      queryBuilder.leftJoinAndSelect('user.adoption', 'adoption');
      queryBuilder.leftJoinAndSelect('user.animalShelter', 'animalshelter');

      // Paginar los resultados
      const paginatedUsers = await paginate<User>(queryBuilder, options);

      // Transformar los usuarios a UserDto
      const userDtos = plainToInstance(UserDto, paginatedUsers.items, {
        excludeExtraneousValues: true, // Excluye campos que no están en el DTO
      });

      return new Pagination<UserDto>(userDtos, paginatedUsers.meta);
    } catch (error) {
      throw new BadRequestException(error.message, 'Usuarios no encontrados');
    }
  }

  async findActives(options: IPaginationOptions): Promise<Pagination<UserDto>> {
    try {
      // Crear el query builder para los usuarios
      const queryBuilder = this.userRepository.createQueryBuilder('user');
      queryBuilder.orderBy('user.createAt', 'ASC');

      // Añadir las relaciones necesarias para cargar los datos
      queryBuilder.leftJoinAndSelect('user.donation', 'donation');
      queryBuilder.leftJoinAndSelect('user.adoption', 'adoption');
      queryBuilder.leftJoinAndSelect('user.animalShelter', 'animalshelter');

      // Paginar los resultados
      const paginatedUsers = await paginate<User>(queryBuilder, options);

      // Transformar los usuarios a UserDto
      const userDtos = plainToInstance(UserDto, paginatedUsers.items, {
        excludeExtraneousValues: true, // Excluye campos que no están en el DTO
      });

      return new Pagination<UserDto>(userDtos, paginatedUsers.meta);
    } catch (error) {
      throw new BadRequestException(error.message, 'Usuarios no encontrados');
    }
  }

  async findAll(options: IPaginationOptions): Promise<Pagination<UserDto>> {
    try {
      // Crear el query builder para los usuarios
      const queryBuilder = this.userRepository.createQueryBuilder('user');
      queryBuilder.withDeleted();
      queryBuilder.orderBy('user.createAt', 'ASC');

      // Añadir las relaciones necesarias para cargar los datos
      queryBuilder.leftJoinAndSelect('user.donation', 'donation');
      queryBuilder.leftJoinAndSelect('user.adoption', 'adoption');
      queryBuilder.leftJoinAndSelect('user.animalShelter', 'animalshelter');

      // Paginar los resultados
      const paginatedUsers = await paginate<User>(queryBuilder, options);

      // Transformar los usuarios a UserDto
      const userDtos = plainToInstance(UserDto, paginatedUsers.items, {
        excludeExtraneousValues: true, // Excluye campos que no están en el DTO
      });

      return new Pagination<UserDto>(userDtos, paginatedUsers.meta);
    } catch (error) {
      throw new BadRequestException(error.message, 'Usuarios no encontrados');
    }
  }

  async findOneByUsername(username: string): Promise<UserDto> {
    const users = await this.userRepository.findOne({
      where: { username: username },
      relations: ['donation', 'adoption', 'animalshelter'], // Carga las relaciones necesarias
    });

    // Si no encuentra al usuario, lanza una excepción
    if (!users) {
      throw new BadRequestException('Usuario no encontrado');
    }

    try {
      // Transforma la entidad User a UserDto
      return plainToInstance(UserDto, users, {
        excludeExtraneousValues: true, // Excluye campos que no están definidos en el DTO
      });
    } catch (error) {
      throw new BadRequestException(error.message, 'Error al transformar los datos del usuario');
    }
  }

  async findOne(id: number): Promise<UserDto> {
    // Busca el usuario con las relaciones necesarias
    const user = await this.userRepository.findOne({
      where: { id },
      relations: ['donation', 'adoption', 'animalshelter'], // Carga las relaciones necesarias
    });

    // Si no encuentra al usuario, lanza una excepción
    if (!user) {
      throw new BadRequestException('Usuario no encontrado');
    }

    try {
      // Transforma la entidad User a UserDto
      return plainToInstance(UserDto, user, {
        excludeExtraneousValues: true, // Excluye campos que no están definidos en el DTO
      });
    } catch (error) {
      throw new BadRequestException(error.message, 'Error al transformar los datos del usuario');
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      return await this.userRepository.update(id, updateUserDto);
    } catch (error) {
      throw new NotFoundException(error.message, 'Usuario no encontrado')
    }
  }

  async remove(id: number) {
    try {
      const user = await this.userRepository.softDelete(id);
      if (user.affected === 0) {
        throw new NotFoundException('User no encontrado');
      } else {
        return user
      }
    } catch (error) {
      throw new InternalServerErrorException(error.message, 'User no eliminado');
    }
  }

  async restore(id: number): Promise<UserDto> {
    try {
      const result = await this.userRepository.restore(id);
      if (result.affected === 0) {
        throw new NotFoundException('User no encontrado');
      }
      return this.userRepository.findOne({ where: { id: id } });
    } catch (error) {
      throw new InternalServerErrorException(error.message, 'User no Restaurado');
    }
  }
}
