import { ApiProperty } from "@nestjs/swagger";
import { AnimalTypesDto } from "src/animaltype/dto/animaltypes.dto";

export class AnimalShelterDto {
    @ApiProperty()
    id: number

    @ApiProperty()
    name: string

    @ApiProperty()
    profileUrlImage: string;
    
    @ApiProperty()
    observations: string;

    @ApiProperty()
    address: string;

    @ApiProperty()
    phone: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    latitude: number;

    @ApiProperty()
    longitude: number;

    @ApiProperty()
    capacity: number;

    @ApiProperty()
    openingHours: string;

    @ApiProperty()
    animaltypes: AnimalTypesDto[]
}
