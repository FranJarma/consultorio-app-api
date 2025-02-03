import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TurnsService } from './turns.service';
import { CreateTurnDto } from './dto/create-turn.dto';
import { UpdateTurnDto } from './dto/update-turn.dto';

@Controller('turns')
export class TurnsController {
  constructor(private readonly turnsService: TurnsService) {}
  
  @Get()
  async findAll() {
    return this.turnsService.getAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.turnsService.getOne(id);
  }

  @Post()
  async create(@Body() createTurnDto: CreateTurnDto) {
    return this.turnsService.create(createTurnDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateTurnDto: UpdateTurnDto) {
    return this.turnsService.update(id, updateTurnDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.turnsService.delete(id);
  }
}
