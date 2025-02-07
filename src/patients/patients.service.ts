import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Patient } from '@prisma/client';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { patientFilters, PatientStateEnum } from './types/patient';
import { BaseService } from 'src/common/services/base.service';

@Injectable()
export class PatientsService extends BaseService<Patient> {
  constructor(private prisma: PrismaService) {
    super(prisma.patient, patientFilters, {
      state: { not: PatientStateEnum.DELETED },
    }, {});
  }

  async getOne(id: string): Promise<Patient> {
    return this.prisma.patient.findUnique({
      where: { id },
      include: {
        turns: {
          orderBy: {
            date: 'asc',
          },
        },
        clinicalStories: true,
      },
    });
  }

  async create(data: CreatePatientDto): Promise<Patient> {
    return this.prisma.patient.create({
      data,
    });
  }

  async update(id: string, data: UpdatePatientDto): Promise<Patient> {
    const { turns, clinicalStories, ...filteredData } = data;
    return this.prisma.patient.update({
      where: { id },
      data: filteredData,
    });
  }
  

  async delete(id: string): Promise<void> {
    await this.prisma.patient.update({
      where: { id },
      data: {
        state: PatientStateEnum.DELETED
      }
    });
  }
}
