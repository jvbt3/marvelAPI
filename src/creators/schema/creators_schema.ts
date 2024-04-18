import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type CreatorsDocument = HydratedDocument<Creators>

@Schema({timestamps: true})
export class Creators {
    @Prop()
    id: string

    @Prop()
    name: string

    @Prop()
    comics: [string]

    @Prop()
    roles: string
}

export const CreatorsSchema = SchemaFactory.createForClass(Creators)