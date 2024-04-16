import { Injectable } from '@nestjs/common';
import { CharacterDto } from './dto/create-character.dto';

@Injectable()
export class CharacterService {
  create(createCharacterDto: CharacterDto) {
    return 'This action adds a new character';
  }

  findAll() {
    return `This action returns all character`;
  }

  findOne(id: number) {
    return `This action returns a #${id} character`;
  }
  remove(id: number) {
    return `This action removes a #${id} character`;
  }
}
