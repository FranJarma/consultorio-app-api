import { Test, TestingModule } from '@nestjs/testing';
import { HealthEnsurancesService } from './health-ensurances.service';

describe('HealthEnsurancesService', () => {
  let service: HealthEnsurancesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HealthEnsurancesService],
    }).compile();

    service = module.get<HealthEnsurancesService>(HealthEnsurancesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
