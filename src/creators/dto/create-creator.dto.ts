import { IsArray, IsString, IsUrl } from "class-validator";


export class CreateCreatorDto {
    @IsString()
    id: string
    
    @IsString()
    name: string

    @IsArray()
    comics: [string]

    @IsString()
    roles: string
}
