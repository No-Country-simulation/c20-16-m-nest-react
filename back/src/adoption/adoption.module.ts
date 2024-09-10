import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Adoption } from './entities/adoption.entity';
import { AdoptionController } from './adoption.controller';
import { AdoptionService } from './adoption.service';
import { Animal } from '../animal/entities/animal.entity';
import { User } from '../user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Adoption, Animal, User])],
  controllers: [AdoptionController],
  providers: [AdoptionService],
  exports: [TypeOrmModule]
})
export class AdoptionModule {}
