import { Injectable } from '@nestjs/common';
import { CreateTurnDto } from './dto/create-turn.dto';
import { UpdateTurnDto } from './dto/update-turn.dto';
import { Turn } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TurnsService {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<Turn[]> {
    return this.prisma.turn.findMany();
  }

  async getOne(id: string): Promise<Turn> {
    return this.prisma.turn.findUnique({
      where: { id },
    });
  }

  async create(data: CreateTurnDto): Promise<Turn> {
    return this.prisma.turn.create({
      data,
    });
  }

  async update(id: string, data: UpdateTurnDto): Promise<Turn> {
    return this.prisma.turn.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.turn.delete({
      where: { id },
    });
  }
}
