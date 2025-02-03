import { Test, TestingModule } from '@nestjs/testing';
import { ClinicalStoriesService } from './clinical-stories.service';

describe('ClinicalStoriesService', () => {
  let service: ClinicalStoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClinicalStoriesService],
    }).compile();

    service = module.get<ClinicalStoriesService>(ClinicalStoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
