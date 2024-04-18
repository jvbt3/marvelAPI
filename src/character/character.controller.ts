import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CharacterService } from './character.service';
import { CharacterDto } from './dto/create-character.dto';

@Controller('character')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Post()
  create() {
    return this.characterService.create();
  }

  @Post('/create') 
    createOne(@Body() characterDTO: CharacterDto) {
      return this.characterService.createOne(characterDTO)
  }

  @Get()
  findAll() {
    return this.characterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.characterService.findOne(id);
  }

  @Patch(':id')
  updateOne(@Param('id') id: string, @Body() characterDTO: CharacterDto) {
    return this.characterService.update(id, characterDTO)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.characterService.remove(id);
  }
}
