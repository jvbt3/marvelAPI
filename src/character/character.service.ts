import { Injectable } from '@nestjs/common';
const fs = require('fs').promises;
import { InjectModel } from '@nestjs/mongoose';
import { Characters } from './schema/characters_schema';
import { Model } from 'mongoose';

@Injectable()

export class CharacterService {

  constructor(@InjectModel(Characters.name) private charactersModel: Model<Characters>) { }

  async create() {
    const create = await this.mappedMarvel()
    console.log(create)
    return this.charactersModel.create(create)
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

  async readMarvel() {
    const filePath = 'marvel_data.json'
    try {
      const dataString = await fs.readFile(filePath, 'utf-8');
      const parsedData = JSON.parse(dataString);
      return parsedData;

    } catch (err) {
      console.error('Erro ao ler aquivo:', err)
      return null
    }
  }

  async mappedMarvel() {
    console.log('Sucesso ao mapear!');

    try {
      const marvelData = await this.readMarvel();
      const mappedData = await marvelData[0].characters.items.map((items) => {
        return {
          name: items.name,
          resourceURI: items.resourceURI
        };
      });
      return mappedData;
    } catch (error) {
      console.error('Error in mappedMarvel:', error);
      return [];
    }
  }

}
