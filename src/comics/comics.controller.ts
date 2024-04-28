import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComicsService } from './comics.service';
import { ComicDto } from './dto/create-comic.dto';

@Controller('comics')
export class ComicsController {
  constructor(private readonly comicsService: ComicsService) {}

  @Post('/create')
  async create() {
    return await this.comicsService.create();
  }

  @Post()
  async createOne(@Body() comicDTO: ComicDto) {
    return await this.comicsService.createOne(comicDTO)
  }

  @Get()
  async findAll() {
    return await this.comicsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.comicsService.findOne(id);
  }

  @Patch(':id')
  async updateOne(@Param('id') id: string, @Body() comicDTO: ComicDto) {
    return await this.comicsService.updateOne(id, comicDTO)
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.comicsService.remove(id);
  }
}
