import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreatorsModule } from './creators/creators.module';
import { ComicsModule } from './comics/comics.module';
import { CharacterModule } from './character/character.module';

@Module({
  imports: [CreatorsModule, ComicsModule, CharacterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
