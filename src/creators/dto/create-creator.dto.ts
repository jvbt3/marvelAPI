import { IsArray, IsString, IsUrl } from "class-validator";


export class CreateCreatorDto {
    @IsString()
    id: string
    
    @IsString()
    name: string

    @IsString()
    comics: string

    @IsString()
    roles: string
}
