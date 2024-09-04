import { Module } from '@nestjs/common';
import { AnimalesService } from './animales.service';
import { AnimalesController } from './animales.controller';

@Module({
  controllers: [AnimalesController],
  providers: [AnimalesService],
})
export class AnimalesModule {}
