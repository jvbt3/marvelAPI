import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type CharactersDocument = HydratedDocument<Characters>

@Schema({timestamps: true})
export class Characters {
    @Prop()
    name: string

    @Prop()
    resourceURI: string
}

export const CharactersSchema = SchemaFactory.createForClass(Characters)