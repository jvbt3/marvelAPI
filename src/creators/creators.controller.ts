import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { CreatorsService } from './creators.service';
import { CreateCreatorDto } from './dto/create-creator.dto';
import { ValidationPipe } from 'src/pipes/validation.pipe';

@Controller('creators')
export class CreatorsController {
  constructor(private readonly creatorsService: CreatorsService) {}

  @Post('/create')
  create() {
    return this.creatorsService.create();
  }

  @Post()
  createOne(@Body(new ValidationPipe()) createDTO: CreateCreatorDto) {
    return this.creatorsService.createOne(createDTO);
  }

  @Get()
  findAll() {
    return this.creatorsService.findAll();
  }

  @Patch(':id')
  updateOne(@Param('id', ParseIntPipe) id: string, @Body() createDTO: CreateCreatorDto) {
    return this.creatorsService.update(id, createDTO);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.creatorsService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.creatorsService.remove(id);
  }
}
