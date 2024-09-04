import { PartialType } from '@nestjs/mapped-types';
import { CreateRescatistaDto } from './create-rescatista.dto';

export class UpdateRescatistaDto extends PartialType(CreateRescatistaDto) {}
