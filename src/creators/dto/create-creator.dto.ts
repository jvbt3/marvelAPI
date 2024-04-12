import { IsString, IsUrl } from "class-validator";


export class MarvelDto {
    @IsString()
    name: string

    @IsString()
    description: string

    @IsUrl()
    url: URL
}
