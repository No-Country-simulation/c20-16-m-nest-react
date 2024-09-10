import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '../user-role.enum';
import { Donation } from '../../danation/entities/donation.entity';
import { Adoption } from '../../adoption/entities/adoption.entity';
import { AnimalShelter } from '../../animalshelter/entities/animalshelter.entity';
import { CommonDto } from '../../common/entities/common.dto';
import { DonationDto } from '../../danation/dto/donation.dto';
import { AdoptionDto } from '../../adoption/dto/adoption.dto';
import { AnimalShelterDto } from '../../animalshelter/dto/animalshelter.dto';

export class UserDto extends CommonDto {
    @ApiProperty({ description: 'Nombre de usuario único', example: 'john_doe' })
    username: string;

    @ApiProperty({ description: 'URL del avatar del usuario', example: 'https://example.com/avatar.jpg', required: false })
    avatarUrl?: string;

    @ApiProperty({ description: 'URL del perfil del usuario', example: 'https://example.com/john_doe', required: false })
    profileUrl?: string;

    @ApiProperty({ description: 'Primer nombre del usuario', example: 'John' })
    firstName: string;

    @ApiProperty({ description: 'Apellido del usuario', example: 'Doe' })
    lastName: string;

    @ApiProperty({ description: 'Dirección del usuario', example: '123 Calle Falsa', required: false })
    address?: string;

    @ApiProperty({ description: 'Ciudad del usuario', example: 'Ciudad Ejemplo', required: false })
    city?: string;

    @ApiProperty({ description: 'Fecha de nacimiento del usuario', example: '31-12-1969', required: false })
    birthday?: Date;

    @ApiProperty({ description: 'Código postal del usuario', example: 12345, required: false })
    zipCode?: number;

    @ApiProperty({ description: 'Número de teléfono del usuario', example: '+1234567890', required: false })
    phoneNumber?: string;

    @ApiProperty({ description: 'Email del usuario', example: 'john.doe@example.com', required: false })
    email?: string;

    @ApiProperty({ description: 'Observaciones adicionales sobre el usuario', required: false })
    observations?: string;

    @ApiProperty({
        description: 'Roles del usuario en el sistema',
        example: [UserRole.USER],
        enum: UserRole,
        isArray: true,
    })
    roles: UserRole[];

    @ApiProperty({ description: 'Donación asociada al usuario', type: () => DonationDto, required: false })
    donation?: DonationDto;

    @ApiProperty({ description: 'Adopción asociada al usuario', type: () => AdoptionDto, required: false })
    adoption?: AdoptionDto;

    @ApiProperty({ description: 'Refugio de animales asociado al usuario', type: () => AnimalShelterDto, required: false })
    animalShelter?: AnimalShelterDto;
}
