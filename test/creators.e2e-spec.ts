import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { CreatorsModule } from '../src/creators/creators.module';
import { CreatorsService } from '../src/creators/creators.service';

describe('Creators', () => {
  let app: INestApplication;
  let creatorsService = { findAll: () => ['test'] };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [CreatorsModule],
    })
      .overrideProvider(CreatorsService)
      .useValue(creatorsService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`(GET) creators`, () => {
    return request(app.getHttpServer())
      .get('/creators')
      .expect(200)
      .expect({
        data: creatorsService.findAll(),
      });
  });
});