import * as bcrypt from "bcryptjs";
import { BadRequestException, HttpException, HttpStatus, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
      where: { user: createUserDto.user },
    })
    if (user) throw new BadRequestException('User ya existe')
    try {
      const password = await bcrypt.hash(createUserDto.password.toString(), 10)
      const newUser = { ...createUserDto, password }
      return await this.userRepository.save(newUser);
    } catch (error) {
      throw new HttpException('User no guardado', HttpStatus.FOUND, error)

    }
  }
  async findActives(): Promise<UserDto[]> {

    const users = await this.userRepository.find({ where: { state: true } });
    try {
      if (users.length) {
        return plainToInstance(UserDto, users);
      }
    } catch (error) {
      throw new BadRequestException('Users no encontrados')
    }
  }

  async findAll(): Promise<UserDto[]> {
    const users = await this.userRepository.find();
    try {
      return plainToInstance(UserDto, users);
    } catch (error) {
      throw new BadRequestException(error.message, 'User no encontrados')
    }
  }

  async findOneByUsername(username: string): Promise<UserLogin> {
    const users = await this.userRepository.findOne({ where: { user: username } });
    try {
      return plainToInstance(UserLogin, users);
    } catch (error) {
      throw new BadRequestException(error.message, 'Users no encontrados')
    }
  }
  
  async findOne(id: number): Promise<UserDto> {
    const users = await this.userRepository.findOne({ where: { id: id } });
    try {
      return plainToInstance(UserDto, users);
    } catch (error) {
      throw new BadRequestException(error.message, 'Users no encontrados')
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<UserDto> {
    try {
      const user = await this.userRepository.findOne({ where: { id } });
      if (!user) throw new NotFoundException('User no encontrado');

      await this.userRepository.update(id, updateUserDto);
      const updatedUser = await this.userRepository.findOne({ where: { id } });
      return plainToInstance(UserDto, updatedUser);
    } catch (error) {
      throw new InternalServerErrorException(error.message, 'User no actualizado');
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
}
