import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalShelter } from './entities/animalshelter.entity';
import { AnimalShelterController } from './animalshelter.controller';
import { AnimalShelterService } from './animalshelter.service';
import { AnimalTypes } from '../animaltype/entities/animaltypes.entity';
import { User } from '../user/entities/user.entity';
import { Donation } from '../danation/entities/donation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AnimalShelter, AnimalTypes, User, Donation])],
  controllers: [AnimalShelterController],
  providers: [AnimalShelterService],
  exports:[TypeOrmModule]
})
export class AnimalShelterModule {}
