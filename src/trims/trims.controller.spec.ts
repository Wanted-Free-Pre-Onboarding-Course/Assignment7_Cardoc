import { Test, TestingModule } from '@nestjs/testing';
import { TrimsController } from './trims.controller';

describe('TrimsController', () => {
  let controller: TrimsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrimsController],
    }).compile();

    controller = module.get<TrimsController>(TrimsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
