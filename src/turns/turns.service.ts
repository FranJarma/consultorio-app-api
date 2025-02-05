import { Injectable } from '@nestjs/common';
import { CreateTurnDto } from './dto/create-turn.dto';
import { UpdateTurnDto } from './dto/update-turn.dto';
import { Turn } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { paginate } from 'src/common/utils/pagination.util';

@Injectable()
export class TurnsService {
  constructor(private prisma: PrismaService) {}

  async getAll(filter?: string, range?: string, sort?: string) {
    const parsedFilter = filter ? JSON.parse(filter) : {};
    const parsedRange = range ? JSON.parse(range) : [0, 9];
    const parsedSort = sort ? JSON.parse(sort) : ['id', 'ASC'];
  
    const result = await paginate(this.prisma.turn, parsedFilter, parsedRange, parsedSort);
  
    return {
      data: result.data ?? [],
      total: result.total ?? 0,
    };
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
