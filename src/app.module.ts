import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { CreatorsModule } from './creators/creators.module';
import { ComicsModule } from './comics/comics.module';
import { CharacterModule } from './character/character.module';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';

@Module({
  imports: [CreatorsModule, ComicsModule, CharacterModule, HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
