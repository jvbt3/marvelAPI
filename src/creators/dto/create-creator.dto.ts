import { IsString, IsUrl } from "class-validator";


export class CreatorDto {
    @IsString()
    name: string

    @IsString()
    description: string

    @IsUrl()
    url: string
}
