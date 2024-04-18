import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComicsService } from './comics.service';
import { ComicDto } from './dto/create-comic.dto';

@Controller('comics')
export class ComicsController {
  constructor(private readonly comicsService: ComicsService) {}

  @Post()
  create() {
    return this.comicsService.create();
  }

  @Post('/create/')
  createOne(@Body() comicDTO: ComicDto) {
    return this.comicsService.createOne(comicDTO)
  }

  @Get()
  findAll() {
    return this.comicsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comicsService.findOne(id);
  }

  @Patch(':id')
  updateOne(@Param('id') id: string, @Body() comicDTO: ComicDto) {
    return this.comicsService.updateOne(id, comicDTO)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.comicsService.remove(id);
  }
}
