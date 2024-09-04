import { Adoptante } from 'src/adoptante/entities/adoptante.entity';
import { CommonEntity } from 'src/common/entities/common.entity';
import { Role } from 'src/enum/roles.enum';
import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';


@Entity('users')
export class User extends CommonEntity {


@Column({ type: 'varchar', length: 50, nullable: false })
name: string;

@Column({ nullable: true })
lastName: string;

@Column({ type: 'text', nullable: true })
perfil: string;

@Column({ nullable: true })
avatarUrl: string;

@Column({ nullable: true })
profileUrl: string;

@Column({ type: 'varchar', length: 50, nullable: false, unique: true })
email: string;

@Column({ type: 'varchar', length: 72, nullable: true })
password: string;


@Column({ default: true })
updatePassword: boolean;

@Column({ nullable: true })
address: string;

@Column({ nullable: true })
city: string;

@Column({ nullable: true })
birthday: Date;

@Column({ nullable: true })
zipCode: number;

@Column({ nullable: true })
phoneNumber: string;

@Column({ nullable: true })
observations: string;

@Column({ default: Role.User })
role: Role;

}