import { Test, TestingModule } from '@nestjs/testing';
import { RefugiosService } from './refugios.service';

describe('RefugiosService', () => {
  let service: RefugiosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RefugiosService],
    }).compile();

    service = module.get<RefugiosService>(RefugiosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
