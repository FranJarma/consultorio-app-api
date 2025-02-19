import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { HealthEnsurancesService } from './health-ensurances.service';
import { CreateHealthEnsuranceDto } from './dto/create-health-ensurance.dto';
import { UpdateHealthEnsuranceDto } from './dto/update-health-ensurance.dto';
import { ApiQuery } from '@nestjs/swagger';
import { GetAllDto } from 'src/common/types/dto/query-dto';

@Controller('health-ensurances')
export class HealthEnsurancesController {
  constructor(private readonly healthEnsurancesService: HealthEnsurancesService) {}

  @Get()
  @ApiQuery({ name: 'filter', required: false, type: String, description: 'JSON filter, e.g. {"age":30}' })
  @ApiQuery({ name: 'range', required: false, type: String, description: 'Pagination range, e.g. [0,9]' })
  @ApiQuery({ name: 'sort', required: false, type: String, description: 'Sorting order, e.g. ["fullname","ASC"]' })
  async findAll(@Query() query: GetAllDto) {
    const { filter, range, sort } = query;
    return this.healthEnsurancesService.getAll(filter, range, sort);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.healthEnsurancesService.getOne(id);
  }

  @Post()
  async create(@Body() createHealthEnsuranceDto: CreateHealthEnsuranceDto) {
    return this.healthEnsurancesService.create(createHealthEnsuranceDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateHealthEnsuranceDto: UpdateHealthEnsuranceDto) {
    return this.healthEnsurancesService.update(id, updateHealthEnsuranceDto);
  }
}
