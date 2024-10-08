import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalFeatures } from './entities/animalfeatures.entity';
import { AnimalFeaturesController } from './animalfeatures.controller';
import { AnimalFeaturesService } from './animalfeatures.service';
import { Animal } from '../animal/entities/animal.entity';
import { AnimalShelter } from '../animalshelter/entities/animalshelter.entity';
import { ReportState } from '../reportstate/entities/reportstate.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AnimalFeatures, Animal, AnimalShelter, ReportState ])],
  controllers: [AnimalFeaturesController],
  providers: [AnimalFeaturesService],
  exports:[TypeOrmModule]
})
export class AnimalFeaturesModule {}
