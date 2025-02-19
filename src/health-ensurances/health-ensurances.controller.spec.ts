import { Test, TestingModule } from '@nestjs/testing';
import { HealthEnsurancesController } from './health-ensurances.controller';
import { HealthEnsurancesService } from './health-ensurances.service';

describe('HealthEnsurancesController', () => {
  let controller: HealthEnsurancesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthEnsurancesController],
      providers: [HealthEnsurancesService],
    }).compile();

    controller = module.get<HealthEnsurancesController>(HealthEnsurancesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
