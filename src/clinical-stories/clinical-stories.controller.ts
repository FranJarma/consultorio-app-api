import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ClinicalStoriesService } from './clinical-stories.service';
import { CreateClinicalStoryDto } from './dto/create-clinical-story.dto';
import { UpdateClinicalStoryDto } from './dto/update-clinical-story.dto';
import { ApiQuery } from '@nestjs/swagger';
import { GetAllDto } from 'src/common/types/dto/query-dto';

@Controller('clinical-stories')
export class ClinicalStoriesController {
  constructor(private readonly clinicalStoriesService: ClinicalStoriesService) {}

  @Get()
  @ApiQuery({ name: 'filter', required: false, type: String, description: 'JSON filter, e.g. {"age":30}' })
  @ApiQuery({ name: 'range', required: false, type: String, description: 'Pagination range, e.g. [0,9]' })
  @ApiQuery({ name: 'sort', required: false, type: String, description: 'Sorting order, e.g. ["fullname","ASC"]' })
  async findAll(@Query() query: GetAllDto) {
    const { filter, range, sort } = query;
    return this.clinicalStoriesService.getAll(filter, range, sort);
  }


  @Post()
  create(@Body() createClinicalStoryDto: CreateClinicalStoryDto) {
    return this.clinicalStoriesService.create(createClinicalStoryDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clinicalStoriesService.getOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClinicalStoryDto: UpdateClinicalStoryDto) {
    return this.clinicalStoriesService.update(id, updateClinicalStoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clinicalStoriesService.delete(id);
  }

  @Get('user/:userId')
  findByUserId(@Param('userId') userId: string) {
    return this.clinicalStoriesService.findByUserId(userId);
  }
}