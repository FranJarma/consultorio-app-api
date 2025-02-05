import { Controller, Get, Post, Body, Param, Put, Delete, Query } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { GetAllDto } from 'src/common/types/dto/query-dto';
import { ApiQuery } from '@nestjs/swagger';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Get()
  @ApiQuery({ name: 'filter', required: false, type: String, description: 'JSON filter, e.g. {"age":30}' })
  @ApiQuery({ name: 'range', required: false, type: String, description: 'Pagination range, e.g. [0,9]' })
  @ApiQuery({ name: 'sort', required: false, type: String, description: 'Sorting order, e.g. ["fullname","ASC"]' })
  async findAll(@Query() query: GetAllDto) {
    const { filter, range, sort } = query;
    return this.patientsService.getAll(filter, range, sort);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.patientsService.getOne(id);
  }

  @Post()
  async create(@Body() CreatePatientDto: CreatePatientDto) {
    return this.patientsService.create(CreatePatientDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updatePatientDto: UpdatePatientDto) {
    return this.patientsService.update(id, updatePatientDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.patientsService.delete(id);
  }
}
