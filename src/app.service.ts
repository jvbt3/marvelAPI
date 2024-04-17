import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable, map } from 'rxjs';
import fs, { writeFile } from 'fs'

@Injectable()
export class AppService {
  constructor(public readonly httpService: HttpService) { }

  getAllMarvel(): Observable<AxiosResponse<any>> {
    const param = 'apikey=30e2ca2d99c629b3fd7decf3548bce07&ts=1&hash=870467879ca0c097576692935416d400'
    const url = `https://gateway.marvel.com:443/v1/public/series?title=civil%20war&${param}`;
    try {
      return this.httpService.get(url).pipe(
        map(response => {
          const data = response.data
          return data
        })
      );
    } catch (error) {
      console.log('erro ao consumir dados')
    }
  }

  WriteMarvel(dataMarvel: any) {
    this.getAllMarvel().subscribe(
      data => {
        const dataString = JSON.stringify(dataMarvel, null, 2); 
        const filePath = 'marvel_data.json';

        writeFile(filePath, dataString, (err) => {
          if (err) {
            console.error('Erro ao escrever em arquivo:', err);
          } else {
            console.log('Dados salvos em arquivo:', filePath);
          }
        });
      },
      error => {
        console.error('Erro ao obter dados da API:', error);
      }
    );
  }
}