import { Module } from '@nestjs/common';
import { RescatistaService } from './rescatista.service';
import { RescatistaController } from './rescatista.controller';

@Module({
  controllers: [RescatistaController],
  providers: [RescatistaService],
})
export class RescatistaModule {}
