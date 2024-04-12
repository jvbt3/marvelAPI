import { Injectable } from '@nestjs/common';
import { CreatorDto } from './dto/create-creator.dto';

@Injectable()
export class CreatorsService {
  create(createCreatorDto: CreatorDto) {
    return 'This action adds a new creator';
  }

  findAll() {
    return `This action returns all creators`;
  }

  findOne(id: number) {
    return `This action returns a #${id} creator`;
  }

  remove(id: number) {
    return `This action removes a #${id} creator`;
  }
}
