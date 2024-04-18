import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type CharactersDocument = HydratedDocument<Characters>

@Schema({timestamps: true})
export class Characters {
    @Prop()
    id: string

    @Prop()
    name: string

    @Prop()
    description: string

    @Prop()
    urlImage: string
}

export const CharactersSchema = SchemaFactory.createForClass(Characters)