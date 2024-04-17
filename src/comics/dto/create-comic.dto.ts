import { IsDate, IsString } from "class-validator"

export class ComicDto {
    @IsString()
    id: string

    @IsString()
    title: string

    @IsString()
    description: string

    @IsDate()
    dateOfPublication: Date
    
    @IsString()
    urlCapa: string
}
