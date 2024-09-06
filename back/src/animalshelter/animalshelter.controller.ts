import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards, NotFoundException } from '@nestjs/common';
import { AnimalShelterService } from './animalshelter.service';
import { CreateAnimalShelterDto } from './dto/create-animalshelter.dto';
import { AnimalShelterDto } from './dto/animalshelter.dto';
import { UpdateAnimalShelterDto } from './dto/update-animalshelter.dto';
import { ApiBadRequestResponse, ApiBearerAuth, ApiBody, ApiForbiddenResponse, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Roles } from '../common/decorators/roles.decorator';
import { UserRole } from '../user/user-role.enum';

const entityName = 'Refugio';
const itemxpega = 10;

@ApiTags('Animal Shelter')
@Controller('animalshelter')
@ApiForbiddenResponse({ description: `${entityName} no autorizado` })
@ApiBadRequestResponse({ description: 'Los datos enviados son incorrectos' })
export class AnimalShelterController {
  constructor(private readonly animalShelterService: AnimalShelterService) { }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  @ApiBody({ type: CreateAnimalShelterDto })
  @ApiResponse({
    status: 201,
    description: 'El refugio de animales ha sido creado exitosamente.',
    type: AnimalShelterDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Solicitud inválida',
  })
  async create(@Body() createAnimalShelterDto: CreateAnimalShelterDto): Promise<AnimalShelterDto> {
    return this.animalShelterService.create(createAnimalShelterDto);
  }

  @Post('restore/:id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  @ApiResponse({ status: 200, description: 'Animal shelter restored successfully', type: AnimalShelterDto })
  @ApiResponse({ status: 404, description: 'Animal shelter not found' })
  async restore(@Param('id') id: number): Promise<AnimalShelterDto> {
    return this.animalShelterService.restore(id);
  }

  @Get()
  @ApiQuery({ name: "page", description: 'Page number to return, defaults to 1', type: 'number', required: false })
  @ApiQuery({ name: "limit", description: `Number of items per page, defaults to ${itemxpega} if not provided`, type: 'number', required: false })
  @ApiResponse({ status: 200, description: 'List of active animal shelters', type: Pagination })
  @ApiResponse({ status: 404, description: 'No animal shelters found' })
  async findActives(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = itemxpega,
  ): Promise<Pagination<AnimalShelterDto>> {
    const options = { page, limit, route: '/animalshelters' };
    const animalshelter = await this.animalShelterService.findActives(options);

    if (animalshelter.items.length > 0) {
      return animalshelter;
    } else {
      throw new NotFoundException('No animal shelters found');
    }
  }

  @Get('/pendingacceptance')
  @Roles(UserRole.ADMIN)
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  @ApiQuery({ name: "page", description: 'Page number to return, defaults to 1', type: 'number', required: false })
  @ApiQuery({ name: "limit", description: `Number of items per page, defaults to ${itemxpega} if not provided`, type: 'number', required: false })
  @ApiResponse({ status: 200, description: 'List of animal shelters pending acceptance', type: Pagination })
  @ApiResponse({ status: 404, description: 'No animal shelters found' })
  async findPendingAcceptance(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = itemxpega,
  ): Promise<Pagination<AnimalShelterDto>> {
    const options = { page, limit, route: '/animalshelters/pendingacceptance' };
    const animalshelter = await this.animalShelterService.findPendingAcceptance(options);

    if (animalshelter.items.length > 0) {
      return animalshelter;
    } else {
      throw new NotFoundException('No animal shelters found');
    }
  }

  @Get('/all')
  @ApiQuery({ name: "page", description: 'Page number to return, defaults to 1', type: 'number', required: false })
  @ApiQuery({ name: "limit", description: `Number of items per page, defaults to ${itemxpega} if not provided`, type: 'number', required: false })
  @ApiResponse({ status: 200, description: 'List of all animal shelters', type: Pagination })
  @ApiResponse({ status: 404, description: 'No animal shelters found' })
  async findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = itemxpega,
  ): Promise<Pagination<AnimalShelterDto>> {
    const options = { page, limit, route: '/animalshelters/all' };
    const animalshelter = await this.animalShelterService.findAll(options);

    if (animalshelter.items.length > 0) {
      return animalshelter;
    } else {
      throw new NotFoundException('No animal shelters found');
    }
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Animal shelter details', type: AnimalShelterDto })
  @ApiResponse({ status: 404, description: 'Animal shelter not found' })
  async findOne(@Param('id') id: number): Promise<AnimalShelterDto> {
    return this.animalShelterService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  @ApiBody({ type: UpdateAnimalShelterDto })
  @ApiResponse({ status: 200, description: 'Animal shelter updated successfully', type: AnimalShelterDto })
  @ApiResponse({ status: 404, description: 'Animal shelter not found' })
  async update(@Param('id') id: number, @Body() updateAnimalShelterDto: UpdateAnimalShelterDto) {
    return this.animalShelterService.update(id, updateAnimalShelterDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  @ApiResponse({ status: 200, description: 'Animal shelter removed successfully' })
  @ApiResponse({ status: 404, description: 'Animal shelter not found' })
  async remove(@Param('id') id: number) {
    return this.animalShelterService.remove(id);
  }
}
