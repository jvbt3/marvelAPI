import { IsString } from "class-validator";

export class CharacterDto {
    @IsString()
    id: string

    @IsString()
    name: string

    @IsString()
    description: string

    @IsString()
    urlImage: string
}
