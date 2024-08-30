import * as bcrypt from "bcryptjs";
import { BadRequestException, HttpException, HttpStatus, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsOrder, FindOptionsWhere, MoreThanOrEqual, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { plainToInstance } from "class-transformer";
import { UserDto, UserLogin } from "./dto/user-dto";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepository.findOne({
      where: { username: createUserDto.username } as FindOptionsWhere<UserDto>,
    });

    if (user) throw new BadRequestException('User ya existe');

    try {
      // Inicializa el campo birthday como null por si no se proporciona
      let birthday: Date | null = null;

      // Solo convierte si el campo está presente y no es nulo
      if (createUserDto.birthday) {
        birthday = new Date(createUserDto.birthday);
        if (isNaN(birthday.getTime())) {
          throw new BadRequestException('Formato de Fecha de Nacimiento es Invalido');
        }
      }

      const password = await bcrypt.hash(createUserDto.password.toString(), 10);
      const newUser = { ...createUserDto, birthday, password };

      return await this.userRepository.save(newUser);
    } catch (error) {
      throw new HttpException('User no guardado', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findActives(offset: number): Promise<UserDto[]> {
    try {
      const users = await this.userRepository.find({
        take: offset || 0,
        order: { startDate: 'ASC' } as FindOptionsOrder<User>,
        where: {
          deletedAt: null,
          createAt: MoreThanOrEqual(new Date())
        } as FindOptionsWhere<User>
      });
      return plainToInstance(UserDto, users);
    } catch (error) {
      throw new BadRequestException(error.message, 'Users no encontrados')
    }
  }

  async findAll(offset: number): Promise<UserDto[]> {
    const users = await this.userRepository.find({
      take: offset || 0,
      order: { username: 'ASC' } as FindOptionsOrder<User>,
    });
    try {
      return plainToInstance(UserDto, users);
    } catch (error) {
      throw new BadRequestException(error.message, 'User no encontrados')
    }
  }

  async findOneByUsername(username: string): Promise<UserDto> {
    const users = await this.userRepository.findOne({
      where: { username: username }
    });
    try {
      return plainToInstance(UserDto, users);
    } catch (error) {
      throw new BadRequestException(error.message, 'User no encontrado')
    }
  }

  async findOne(id: number): Promise<UserDto> {
    const users = await this.userRepository.findOne({
      where: {
        deletedAt: null,
        id
      } as FindOptionsWhere<User>
    });
    try {
      return plainToInstance(UserDto, users);
    } catch (error) {
      throw new BadRequestException(error.message, 'Users no encontrados')
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<UserDto> {
    const user = await this.userRepository.preload({
      id,
      ...updateUserDto,
    });

    try {
      if (!user) {
        throw new NotFoundException('Usuario no encontrado');
      }
      return this.userRepository.save(user);
    } catch (error) {
      throw new NotFoundException(error.message, 'Usuario no encontrado')
    }
  }

  async remove(id: number): Promise<void> {
    try {
      const user = await this.userRepository.findOne({ where: { id } });
      if (!user) throw new NotFoundException('User no encontrado');

      await this.userRepository.delete(id);
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
