import { IsString } from "class-validator";

export class CharacterDto {

    @IsString()
    name: string

    @IsString()
    description: string

    @IsString()
    url: string
}
