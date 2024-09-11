import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalTypes } from './entities/animaltypes.entity';
import { AnimalTypesController } from './animaltypes.controller';
import { AnimalTypesService } from './animaltypes.service';
import { Animal } from '../animal/entities/animal.entity';
import { AnimalShelter } from '../animalshelter/entities/animalshelter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AnimalTypes, Animal, AnimalShelter])],
  controllers: [AnimalTypesController],
  providers: [AnimalTypesService],
  exports:[TypeOrmModule]
})
export class AnimalTypesModule {}
