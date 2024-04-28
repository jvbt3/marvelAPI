import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { ComicsModule } from '../src/comics/comics.module';
import { ComicsService } from '../src/comics/comics.service';

describe('Comics', () => {
  let app: INestApplication;
  let comicsService = { findAll: () => ['test'] };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [ComicsModule],
    })
      .overrideProvider(ComicsService)
      .useValue(comicsService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`(GET) comics`, () => {
    return request(app.getHttpServer())
      .get('/comics')
      .expect(200)
      .expect({
        data: comicsService.findAll(),
      });
  });
});