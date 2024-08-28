import { Column, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export abstract class CommonEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({default:true})
    state?: boolean

    @CreateDateColumn()
    createAt?: Date

    @UpdateDateColumn()
    updateAt?: Date

    @DeleteDateColumn()
    deleteAt?: Date
}
