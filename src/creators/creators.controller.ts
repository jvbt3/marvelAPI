import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreatorsService } from './creators.service';
import { CreateCreatorDto } from './dto/create-creator.dto';

@Controller('creators')
export class CreatorsController {
  constructor(private readonly creatorsService: CreatorsService) {}

  @Post()
  create() {
    return this.creatorsService.create();
  }

  @Post('/create')
  createOne(@Body() createDTO: CreateCreatorDto) {
    return this.creatorsService.createOne(createDTO);
  }

  @Get()
  findAll() {
    return this.creatorsService.findAll();
  }

  @Patch(':id')
  updateOne(@Param('id') id: string, @Body() createDTO: CreateCreatorDto) {
    return this.creatorsService.update(id, createDTO);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.creatorsService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.creatorsService.remove(id);
  }
}
