import { IsString } from "class-validator";

export class CharacterDto {

    @IsString()
    name: string

    @IsString()
    departament: string

    @IsString()
    contribuitions: string
}
