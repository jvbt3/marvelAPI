import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type CreatorsDocument = HydratedDocument<Creators>;

@Schema()
export class Creators {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  url: string;
}

export const CatSchema = new mongoose.Schema({
    name: String,
    age: Number,
    breed: String,
  });

export const CreatorsSchema = SchemaFactory.createForClass(Creators);