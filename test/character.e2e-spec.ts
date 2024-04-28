import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { CharacterService } from '../src/character/character.service';
import { CharacterModule } from '../src/character/character.module';

describe('Character', () => {
  let app: INestApplication;
  let characterService = { findAll: () => ['test'] };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [CharacterModule],
    })
      .overrideProvider(CharacterService)
      .useValue(characterService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`(GET) character`, () => {
    return request(app.getHttpServer())
      .get('/character')
      .expect(200)
      .expect({
        data: characterService.findAll(),
      });
  });
  afterAll( () => {
    app.close();
 });
});