import { Controller, Get, Post, Body, Param, Query, Put } from '@nestjs/common';
import { LocalitiesService } from './localities.service';
import { CreateLocalityDto } from './dto/create-locality.dto';
import { UpdateLocalityDto } from './dto/update-locality.dto';
import { ApiQuery } from '@nestjs/swagger';
import { GetAllDto } from 'src/common/types/dto/query-dto';

@Controller('localities')
export class LocalitiesController {
  constructor(private readonly localitiesService: LocalitiesService) {}

  @Get()
  @ApiQuery({ name: 'filter', required: false, type: String, description: 'JSON filter, e.g. {"age":30}' })
  @ApiQuery({ name: 'range', required: false, type: String, description: 'Pagination range, e.g. [0,9]' })
  @ApiQuery({ name: 'sort', required: false, type: String, description: 'Sorting order, e.g. ["fullname","ASC"]' })
  async findAll(@Query() query: GetAllDto) {
    const { filter, range, sort } = query;
    return this.localitiesService.getAll(filter, range, sort);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.localitiesService.getOne(id);
  }

  @Post()
  async create(@Body() createLocalityDto: CreateLocalityDto) {
    return this.localitiesService.create(createLocalityDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateLocalityDto: UpdateLocalityDto) {
    return this.localitiesService.update(id, updateLocalityDto);
  }
}
