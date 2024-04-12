import { Injectable } from '@nestjs/common';
import { ComicDto } from './dto/create-comic.dto';

@Injectable()
export class ComicsService {
  create(createComicDto: ComicDto) {
    return 'This action adds a new comic';
  }

  findAll() {
    return `This action returns all comics`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comic`;
  }

  remove(id: number) {
    return `This action removes a #${id} comic`;
  }
}
