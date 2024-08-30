import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalShelter } from './entities/animalshelter.entity';
import { AnimalShelterController } from './animalshelter.controller';
import { AnimalShelterService } from './animalshelter.service';

@Module({
  imports: [TypeOrmModule.forFeature([AnimalShelter])],
  controllers: [AnimalShelterController],
  providers: [AnimalShelterService],
  exports:[AnimalShelterService]
})
export class AnimalShelterModule {}
