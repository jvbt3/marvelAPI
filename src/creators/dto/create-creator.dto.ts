import { IsString, IsUrl } from "class-validator";


export class CreateCreatorDto {
    @IsString()
    name: string

    @IsString()
    Hqs: string

    @IsString()
    roles: string
}
