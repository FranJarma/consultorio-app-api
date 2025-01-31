import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PacientsService } from './pacients.service';
import { CreatePacientDto } from './dto/create-pacient.dto';
import { UpdatePacientDto } from './dto/update-pacient.dto';

@Controller('pacients')
export class PacientsController {
  constructor(private readonly pacientsService: PacientsService) {}

  @Get()
  async findAll() {
    return this.pacientsService.getAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.pacientsService.getOne(id);
  }

  @Post()
  async create(@Body() createPacientDto: CreatePacientDto) {
    return this.pacientsService.create(createPacientDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updatePacientDto: UpdatePacientDto) {
    return this.pacientsService.update(id, updatePacientDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.pacientsService.delete(id);
  }
}
