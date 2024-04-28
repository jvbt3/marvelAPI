import { Injectable, Param } from '@nestjs/common';
const fs = require('fs').promises;
import { InjectModel } from '@nestjs/mongoose';
import { Characters } from './schema/characters_schema';
import { Model } from 'mongoose';
import { CharacterDto } from './dto/create-character.dto';

@Injectable()

export class CharacterService {

  param = 'apikey=30e2ca2d99c629b3fd7decf3548bce07&ts=1&hash=870467879ca0c097576692935416d400'

  constructor(@InjectModel(Characters.name) private charactersModel: Model<Characters>) { }

  create() {
    const create = this.mappedMarvel()
    return this.charactersModel.create(create)
  }

  async createOne(characterDTO: CharacterDto) {
    return await this.charactersModel.create(characterDTO)
  }

  async findAll() {
      return await this.charactersModel.find()
  }

  async findOne(id: string) {
    return await this.charactersModel.findOne({id: id});
  }

  async update(id: string, characterDTO: CharacterDto) {
    return await this.charactersModel.updateOne({id: id}, characterDTO)
  }

  async remove(id: string) {
    return await this.charactersModel.deleteOne({id: id});
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
      const mappedData = await marvelData[0].characters.items.map(async(items) => {
        const mappedDataPromises = await (`${items.resourceURI}?${this.param}`)
        const dataFetch = await fetch(mappedDataPromises)
        const data = await dataFetch.json()
      
        return {
          id: data.data.results[0].id,
          name: items.name,
          description: data.data.results[0].description, 
          urlImage: data.data.results[0].thumbnail.path,
        };
      });
      const mappedDataPromises = await Promise.all(mappedData);
      return mappedDataPromises;
    } catch (error) {
      console.error('Error in mappedMarvel:', error);
      return [];
    }
  }

}
