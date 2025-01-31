import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Pacient } from '@prisma/client';

@Injectable()
export class PacientsService {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<Pacient[]> {
    return this.prisma.pacient.findMany();
  }

  async getOne(id: string): Promise<Pacient> {
    return this.prisma.pacient.findUnique({
      where: { id },
    });
  }

  async create(data: any): Promise<Pacient> {
    return this.prisma.pacient.create({
      data,
    });
  }

  async update(id: string, data: any): Promise<Pacient> {
    return this.prisma.pacient.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.pacient.delete({
      where: { id },
    });
  }
}
