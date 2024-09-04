import { Test, TestingModule } from '@nestjs/testing';
import { RescatistaController } from './rescatista.controller';
import { RescatistaService } from './rescatista.service';

describe('RescatistaController', () => {
  let controller: RescatistaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RescatistaController],
      providers: [RescatistaService],
    }).compile();

    controller = module.get<RescatistaController>(RescatistaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
