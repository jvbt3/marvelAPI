import { Module } from '@nestjs/common';
import { CharacterService } from './character.service';
import { CharacterController } from './character.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Characters, CharactersSchema } from './schema/characters_schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Characters.name, schema: CharactersSchema }])],
  controllers: [CharacterController],
  providers: [CharacterService],
})
export class CharacterModule {}
