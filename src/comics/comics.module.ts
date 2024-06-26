import { Module } from '@nestjs/common';
import { ComicsService } from './comics.service';
import { ComicsController } from './comics.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Comics, ComicsSchema } from './schema/comics_schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Comics.name, schema: ComicsSchema }])],
  controllers: [ComicsController],
  providers: [ComicsService],
})
export class ComicsModule {}
