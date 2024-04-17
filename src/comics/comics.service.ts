import { Injectable } from '@nestjs/common';
import { ComicDto } from './dto/create-comic.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Comics } from './schema/comics_schema';
import { Model } from 'mongoose';
const fs = require('fs').promises;

@Injectable()
export class ComicsService {

  constructor(@InjectModel(Comics.name) private comicsModel: Model<Comics>) { }

  async create() {
    const create = await this.mappedMarvel()
    console.log(create)
    return this.comicsModel.create(create)
  }

  async findAll() {
    const find = await this.mappedMarvel()
    return this.comicsModel.find(find)
  }

  findOne(id: number) {
    return `This action returns a #${id} comic`;
  }

  remove(id: number) {
    return `This action removes a #${id} comic`;
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
      const mappedData = await marvelData[0].comics.items.map((items) => {
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
