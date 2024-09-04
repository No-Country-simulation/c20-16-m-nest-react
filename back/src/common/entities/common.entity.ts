import { Column, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';


export abstract class CommonEntity {
    @PrimaryGeneratedColumn('uuid')
id: string = uuid();

@Column({default:true})
state?: boolean

@CreateDateColumn()
createAt?: Date

@UpdateDateColumn()
updateAt?: Date

@DeleteDateColumn()
deleteAt?: Date
}
