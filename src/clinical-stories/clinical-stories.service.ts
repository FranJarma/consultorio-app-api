import { Injectable } from '@nestjs/common';
import { CreateClinicalStoryDto } from './dto/create-clinical-story.dto';
import { UpdateClinicalStoryDto } from './dto/update-clinical-story.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ClinicalStory } from '@prisma/client';

@Injectable()
export class ClinicalStoriesService {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<ClinicalStory[]> {
    return this.prisma.clinicalStory.findMany();
  }

  async getOne(id: string): Promise<ClinicalStory> {
    return this.prisma.clinicalStory.findUnique({
      where: { id },
    });
  }

  async create(data: CreateClinicalStoryDto): Promise<ClinicalStory> {
    return this.prisma.clinicalStory.create({
      data,
    });
  }

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
