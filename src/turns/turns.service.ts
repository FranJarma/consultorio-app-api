import { Injectable } from '@nestjs/common';
import { CreateTurnDto } from './dto/create-turn.dto';
import { UpdateTurnDto } from './dto/update-turn.dto';
import { Turn } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { BaseService } from 'src/common/services/base.service';

@Injectable()
export class TurnsService extends BaseService<Turn> {
  constructor(private prisma: PrismaService) {
    super(
      prisma.turn,
      ['patient.fullname'],
      {},
      { patient: true }
    );
  }

  async getAll(filter?: string, range?: string, sort?: string) {
    const defaultSort = JSON.stringify([['date', 'ASC'], ['id', 'ASC']]);
    return super.getAll(filter, range, sort ?? defaultSort);
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
      data: {
        date: data.date,
        state: data.state
      }
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.turn.delete({
      where: { id },
    });
  }
}
