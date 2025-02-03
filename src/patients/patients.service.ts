import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Patient } from '@prisma/client';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';

@Injectable()
export class PatientsService {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<Patient[]> {
    return this.prisma.patient.findMany();
  }

  async getOne(id: string): Promise<Patient> {
    return this.prisma.patient.findUnique({
      where: { id },
    });
  }

  async create(data: CreatePatientDto): Promise<Patient> {
    return this.prisma.patient.create({
      data,
    });
  }

  async update(id: string, data: UpdatePatientDto): Promise<Patient> {
    return this.prisma.patient.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.patient.delete({
      where: { id },
    });
  }
}
