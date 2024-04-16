import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreatorsService } from './creators.service';

@Controller('creators')
export class CreatorsController {
  constructor(private readonly creatorsService: CreatorsService) {}

  @Get()
  create() {
    return this.creatorsService.create();
  }

  @Get()
  findAll() {
    return this.creatorsService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.creatorsService.findOne(name);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.creatorsService.remove(+id);
  }
}
