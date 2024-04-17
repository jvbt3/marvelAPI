import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComicsService } from './comics.service';
import { ComicDto } from './dto/create-comic.dto';

@Controller('comics')
export class ComicsController {
  constructor(private readonly comicsService: ComicsService) {}

  @Get()
  create() {
    return this.comicsService.create();
  }

  @Get()
  findAll() {
    return this.comicsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comicsService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.comicsService.remove(+id);
  }
}
