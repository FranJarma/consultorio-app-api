import { Injectable } from '@nestjs/common';
import { CreateHealthEnsuranceDto } from './dto/create-health-ensurance.dto';
import { UpdateHealthEnsuranceDto } from './dto/update-health-ensurance.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { BaseService } from 'src/common/services/base.service';
import { HealthEnsurance } from '@prisma/client';

@Injectable()
export class HealthEnsurancesService extends BaseService<HealthEnsurance> {
  constructor(private prisma: PrismaService) {
    super(
      prisma.healthEnsurance,
      ["name"],
      {},
      {}
    );
  }

  async getAll(filter?: string, range?: string, sort?: string) {
    const defaultSort = JSON.stringify([['name', 'ASC'], ['id', 'ASC']]);
    return super.getAll(filter, range, sort ?? defaultSort);
  }

  async getOne(id: string): Promise<HealthEnsurance> {
    return this.prisma.healthEnsurance.findUnique({
      where: { id },
    });
  }

  async create(data: CreateHealthEnsuranceDto): Promise<HealthEnsurance> {
    return this.prisma.healthEnsurance.create({
      data,
    });
  }

  async update(id: string, data: UpdateHealthEnsuranceDto): Promise<HealthEnsurance> {
    return this.prisma.healthEnsurance.update({
      where: { id },
      data
    });
  }
}
