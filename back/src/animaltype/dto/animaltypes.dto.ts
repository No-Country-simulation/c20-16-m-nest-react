import { ApiProperty } from "@nestjs/swagger";

export class AnimalTypesDto {
    @ApiProperty()
    id: number

    @ApiProperty()
    name: string
}
