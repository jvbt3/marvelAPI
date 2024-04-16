import { Module } from '@nestjs/common';
import { CreatorsService } from './creators.service';
import { CreatorsController } from './creators.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Creators, CreatorsSchema } from './schema/creators_schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Creators.name, schema: CreatorsSchema }])],
  controllers: [CreatorsController],
  providers: [CreatorsService],
})
export class CreatorsModule {}
