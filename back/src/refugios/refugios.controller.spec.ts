import { Test, TestingModule } from '@nestjs/testing';
import { RefugiosController } from './refugios.controller';
import { RefugiosService } from './refugios.service';

describe('RefugiosController', () => {
  let controller: RefugiosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RefugiosController],
      providers: [RefugiosService],
    }).compile();

    controller = module.get<RefugiosController>(RefugiosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
