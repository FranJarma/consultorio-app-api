import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClinicalStoriesService } from './clinical-stories.service';
import { CreateClinicalStoryDto } from './dto/create-clinical-story.dto';
import { UpdateClinicalStoryDto } from './dto/update-clinical-story.dto';

@Controller('clinical-stories')
export class ClinicalStoriesController {
  constructor(private readonly clinicalStoriesService: ClinicalStoriesService) {}

  @Post()
  create(@Body() createClinicalStoryDto: CreateClinicalStoryDto) {
    return this.clinicalStoriesService.create(createClinicalStoryDto);
  }

  @Get()
  findAll() {
    return this.clinicalStoriesService.getAll();
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