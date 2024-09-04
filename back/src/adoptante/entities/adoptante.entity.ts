import { Role } from 'src/enum/roles.enum';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity({ name: 'adoptante' })
export class Adoptante {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuid();

  @Column({ type: 'varchar', length: 50, nullable: false })
  nombre: string;

  @Column({ type: 'text', nullable: true })
  perfil: string;

  @Column({ type: 'simple-array', nullable: true })
  horario: string[];

  @Column({ type: 'simple-array', nullable: true })	
  ubicacion: string;

  @Column({ type: 'varchar', length: 60, nullable: false, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 72, nullable: true })
  password: string;

  @Column({ default: Role.User })
  role: Role;

  @Column({ type: 'boolean', default: true })
  estado: boolean;


}
