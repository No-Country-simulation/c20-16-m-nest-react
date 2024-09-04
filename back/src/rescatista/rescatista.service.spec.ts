import { Test, TestingModule } from '@nestjs/testing';
import { RescatistaService } from './rescatista.service';

describe('RescatistaService', () => {
  let service: RescatistaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RescatistaService],
    }).compile();

    service = module.get<RescatistaService>(RescatistaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
