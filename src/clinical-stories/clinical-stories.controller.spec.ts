import { Test, TestingModule } from '@nestjs/testing';
import { ClinicalStoriesController } from './clinical-stories.controller';
import { ClinicalStoriesService } from './clinical-stories.service';

describe('ClinicalStoriesController', () => {
  let controller: ClinicalStoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClinicalStoriesController],
      providers: [ClinicalStoriesService],
    }).compile();

    controller = module.get<ClinicalStoriesController>(ClinicalStoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
