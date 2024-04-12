import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor (private readonly httpService: HttpService) {}
  
  getAllMarvel(): Observable<AxiosResponse> {
    let getAll
    return getAll = this.httpService.get('https://gateway.marvel.com:443/v1/public/series?title=civil%20war&apikey=30e2ca2d99c629b3fd7decf3548bce07&ts=1&hash=870467879ca0c097576692935416d400')
  }
}
