import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportState } from './entities/reportstate.entity';
import { ReportStateController } from './reportstate.controller';
import { ReportStateService } from './reportstate.service';
import { Animal } from '../animal/entities/animal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReportState, Animal])],
  controllers: [ReportStateController],
  providers: [ReportStateService],
  exports:[TypeOrmModule]
})
export class ReportStateModule {}
