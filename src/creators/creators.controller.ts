import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreatorsService } from './creators.service';
import { CreatorDto } from './dto/create-creator.dto';

@Controller('creators')
export class CreatorsController {
  constructor(private readonly creatorsService: CreatorsService) {}

  @Post()
  create(@Body() createCreatorDto: CreatorDto) {
    return this.creatorsService.create(createCreatorDto);
  }

  @Get()
  findAll() {
    return this.creatorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.creatorsService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.creatorsService.remove(+id);
  }
}
