import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Donation } from './entities/donation.entity';
import { DonationController } from './donation.controller';
import { DonationService } from './donation.service';
import { AnimalShelter } from '../animalshelter/entities/animalshelter.entity';
import { User } from '../user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Donation, AnimalShelter, User])],
  controllers: [DonationController],
  providers: [DonationService],
  exports: [TypeOrmModule]
})
export class DonationModule {}
