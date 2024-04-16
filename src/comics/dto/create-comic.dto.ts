import { IsDate, IsString } from "class-validator"

export class ComicDto {

    @IsString()
    title: string

    @IsString()
    description: string

    @IsDate()
    dateOfPublication: Date
    
    @IsString()
    urlCapa: string
}
