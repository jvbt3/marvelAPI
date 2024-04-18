import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type ComicsDocument = HydratedDocument<Comics>

@Schema({timestamps: true})
export class Comics {
    @Prop()
    id: string

    @Prop()
    name: string

    @Prop()
    description: string

    @Prop()
    dateOfPublication: string

    @Prop()
    urlImage: string
}

export const ComicsSchema = SchemaFactory.createForClass(Comics)