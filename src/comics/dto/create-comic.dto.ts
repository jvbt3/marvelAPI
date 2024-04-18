import { IsDate, IsString } from "class-validator"

export class ComicDto {
    @IsString()
    id: string

    @IsString()
    title: string

    @IsString()
    description: string

    @IsString()
    dateOfPublication: string
    
    @IsString()
    urlImage: string
}
