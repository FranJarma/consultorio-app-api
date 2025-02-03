import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';

@Controller('patients')
export class PatientsController {
  constructor(private readonly PatientsService: PatientsService) {}

  @Get()
  async findAll() {
    return this.PatientsService.getAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.PatientsService.getOne(id);
  }

  @Post()
  async create(@Body() CreatePatientDto: CreatePatientDto) {
    return this.PatientsService.create(CreatePatientDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updatePatientDto: UpdatePatientDto) {
    return this.PatientsService.update(id, updatePatientDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.PatientsService.delete(id);
  }
}
