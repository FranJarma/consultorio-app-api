import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ClinicalStoriesService } from './clinical-stories.service';
import { CreateClinicalStoryDto } from './dto/create-clinical-story.dto';
import { UpdateClinicalStoryDto } from './dto/update-clinical-story.dto';
import { ApiQuery } from '@nestjs/swagger';
import { GetAllDto } from 'src/common/types/dto/query-dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

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
  @UseInterceptors(
    FileInterceptor('odontogram', {
      storage: diskStorage({
        destination: './uploads/',
        filename: (req, file, callback) => {
          console.log(req.body);
          console.log({ file });
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const extension = extname(file.originalname);
          callback(null, `${file.fieldname}-${uniqueSuffix}${extension}`);
        },
      }),
    })
  )

  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() createClinicalStoryDto: CreateClinicalStoryDto
  ) {

    if (file) {
      createClinicalStoryDto.odontogramUrl = `/uploads/${file.filename}`;
    }

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