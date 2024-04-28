import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { CreatorsService } from './creators.service';
import { CreateCreatorDto } from './dto/create-creator.dto';

@Controller('creators')
export class CreatorsController {
  constructor(private readonly creatorsService: CreatorsService) {}

  @Post('/create')
  async create() {
    return await this.creatorsService.create();
  }

  @Post()
  async createOne(@Body() createDTO: CreateCreatorDto) {
    return await this.creatorsService.createOne(createDTO);
  }

  @Get()
  async findAll() {
    return await this.creatorsService.findAll();
  }

  @Patch(':id')
  async updateOne(@Param('id', ParseIntPipe) id: string, @Body() createDTO: CreateCreatorDto) {
    return await this.creatorsService.update(id, createDTO);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: string) {
    return await this.creatorsService.findOne(id);
  }

  @Get('/search/:roles')
  async FindName(@Param('roles') roles: string) {
    return await this.creatorsService.findRoles(roles);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: string) {
    return await this.creatorsService.remove(id);
  }
}
