import { Injectable } from '@nestjs/common';
import { CreateLocalityDto } from './dto/create-locality.dto';
import { UpdateLocalityDto } from './dto/update-locality.dto';
import { BaseService } from 'src/common/services/base.service';
import { Locality } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LocalitiesService extends BaseService<Locality> {
  constructor(private prisma: PrismaService) {
    super(
      prisma.locality,
      [],
      {},
      {}
    );
  }

  async getAll(filter?: string, range?: string, sort?: string) {
    const defaultSort = JSON.stringify([['name', 'ASC'], ['id', 'ASC']]);
    return super.getAll(filter, range, sort ?? defaultSort);
  }

  async getOne(id: string): Promise<Locality> {
    return this.prisma.locality.findUnique({
      where: { id },
    });
  }

  async create(data: CreateLocalityDto): Promise<Locality> {
    return this.prisma.locality.create({
      data,
    });
  }

  async update(id: string, data: UpdateLocalityDto): Promise<Locality> {
    return this.prisma.locality.update({
      where: { id },
      data
    });
  }
}
