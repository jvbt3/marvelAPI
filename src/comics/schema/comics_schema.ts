import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type ComicsDocument = HydratedDocument<Comics>

@Schema({timestamps: true})
export class Comics {
    @Prop()
    name: string

    @Prop()
    resourceURI: string
}

export const ComicsSchema = SchemaFactory.createForClass(Comics)