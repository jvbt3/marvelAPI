import { IsArray, IsString, IsUrl } from "class-validator";


export class CreateCreatorDto {
    @IsString()
    name: string

    @IsArray()
    @IsString()
    comics: string

    @IsString()
    roles: string
}
