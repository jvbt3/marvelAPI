import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreatorsService } from './creators.service';

@Controller('creators')
export class CreatorsController {
  constructor(private readonly creatorsService: CreatorsService) {}

  @Post()
  async create() {
    return this.creatorsService.create();
  }

  @Get()
  findAll() {
    return this.creatorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.creatorsService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.creatorsService.remove(+id);
  }
}
