import { Module } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { AnimalController } from './animal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Animal } from './entities/animal.entity';
import { AnimalTypes } from '../animaltype/entities/animaltypes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Animal, AnimalTypes])],
  controllers: [AnimalController],
  providers: [AnimalService],
  exports: [TypeOrmModule]
})
export class AnimalModule {}
