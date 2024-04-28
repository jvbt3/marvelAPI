import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(public readonly appService: AppService) {}

  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/marvel')
  async getMarvelData() {
    try {
      const response = await this.appService.getAllMarvel().toPromise();
      const data = response.data.results;

      await this.appService.WriteMarvel(data);

      return data;
    } catch (error) {
      console.error('Erro ao obter dados da Marvel:', error);
      throw error;
    }
  }
}
