import { Controller, Get, Post, Body, Param, Delete, Put, Query } from '@nestjs/common';
import { TurnsService } from './turns.service';
import { CreateTurnDto } from './dto/create-turn.dto';
import { UpdateTurnDto } from './dto/update-turn.dto';
import { ApiQuery } from '@nestjs/swagger';
import { GetAllDto } from 'src/common/types/dto/query-dto';

@Controller('turns')
export class TurnsController {
  constructor(private readonly turnsService: TurnsService) {}
  
  @Get()
  @ApiQuery({ name: 'filter', required: false, type: String, description: 'JSON filter, e.g. {"age":30}' })
  @ApiQuery({ name: 'range', required: false, type: String, description: 'Pagination range, e.g. [0,9]' })
  @ApiQuery({ name: 'sort', required: false, type: String, description: 'Sorting order, e.g. ["fullname","ASC"]' })
  async findAll(@Query() query: GetAllDto) {
    const { filter, range, sort } = query;
    return this.turnsService.getAll(filter, range, sort);
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
