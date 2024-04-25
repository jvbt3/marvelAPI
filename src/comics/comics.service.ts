import { Injectable } from '@nestjs/common';
import { ComicDto } from './dto/create-comic.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Comics } from './schema/comics_schema';
import { Model } from 'mongoose';
const fs = require('fs').promises;

@Injectable()
export class ComicsService {

  param = 'apikey=30e2ca2d99c629b3fd7decf3548bce07&ts=1&hash=870467879ca0c097576692935416d400'

  constructor(@InjectModel(Comics.name) private comicsModel: Model<Comics>) { }

  async create() {
    const create = await this.mappedMarvel()
    return this.comicsModel.create(create)
  }

  createOne(comicDTO: ComicDto) {
    return this.comicsModel.create(comicDTO)
  }

  async findAll() {
    return this.comicsModel.find()
  }

  async findOne(id: string) {
    return this.comicsModel.findOne({id: id});
  }

  async findName(name: string) {
    return this.comicsModel.findOne({name: name});
  }

  updateOne(id: string, comicDTO: ComicDto) {
    return this.comicsModel.updateOne({id: id}, comicDTO)
  }

  remove(id: string) {
    return this.comicsModel.deleteOne({id: id});
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
      const mappedDataPromises = await marvelData[0].comics.items.map(async (items) => {
        const modifiedResourceURI = (`${items.resourceURI}?${this.param}`)
        const dataFetch = await fetch(modifiedResourceURI)
        const data = await dataFetch.json()
        
        return {
          id: data.data.results[0].id,
          name: items.name,
          description: data.data.results[0].description,
          dateOfPublication: data.data.results[0].dates[0].date,
          urlImage: data.data.results[0].thumbnail.path
        };
      });

      const mappedData = await Promise.all(mappedDataPromises);
      return mappedData;
    } catch (error) {
      console.error('Error in mappedMarvel:', error);
      return [];
    }
  }

}
