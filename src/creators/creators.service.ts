import { Injectable } from '@nestjs/common';
const fs = require('fs').promises;
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Creators } from './schema/creators_schema';
@Injectable()
export class CreatorsService {

  constructor(@InjectModel(Creators.name) private creatorsModel: Model<Creators>) { }

  async create() {
    const create = await this.mappedMarvel()
    console.log(create)
    return this.creatorsModel.create(create)
  }

  async findAll() {
    const find = await this.mappedMarvel()
    return this.creatorsModel.find(find)
  }

  async findOne(name: string) {
    const findOne = await this.mappedMarvel()
    return this.creatorsModel.findOne({name: name})
  }

  remove(id: number) {
    return `This action removes a #${id} creator`;
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
      const mappedData = await marvelData[0].creators.items.map((items) => {
        return {
          name: items.name,
          roles: items.role,
          hqs: items.resourceURI
        };
      });
      return mappedData;
    } catch (error) {
      console.error('Error in mappedMarvel:', error);
      return [];
    }
  }

}
