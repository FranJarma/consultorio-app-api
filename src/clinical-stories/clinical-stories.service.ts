import { Injectable, UsePipes } from '@nestjs/common';
import { CreateClinicalStoryDto } from './dto/create-clinical-story.dto';
import { UpdateClinicalStoryDto } from './dto/update-clinical-story.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ClinicalStory } from '@prisma/client';
import { BaseService } from 'src/common/services/base.service';
import { DniValidationPipe } from 'src/patients/pipes/DniValidationPipe';

@Injectable()
export class ClinicalStoriesService extends BaseService<ClinicalStory>{
  constructor(private prisma: PrismaService) {
    super(
      prisma.clinicalStory,
      ['patient.fullname'],
      {},
      { patient: true }
    );
  }

  async getOne(id: string): Promise<ClinicalStory> {
    return this.prisma.clinicalStory.findUnique({
      where: { id },
    });
  }

  @UsePipes(DniValidationPipe)
  async create(data: CreateClinicalStoryDto) {
    return this.prisma.clinicalStory.create({
      data
    });
  }
  
  @UsePipes(DniValidationPipe)
  async update(id: string, data: UpdateClinicalStoryDto): Promise<ClinicalStory> {
    return this.prisma.clinicalStory.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.clinicalStory.delete({
      where: { id },
    });
  }

  async findByUserId(userId: string): Promise<ClinicalStory[]> {
    return this.prisma.clinicalStory.findMany({
      where: {
        patientId: userId,
      },
    });
  }
}
