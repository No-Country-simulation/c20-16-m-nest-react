import { AnimalShelter } from "src/animalshelter/entities/animalshelter.entity";
import { CommonEntity } from "src/common/entities/common.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity('animal')
export class Animal extends CommonEntity{
    @Column({ nullable: false })
    name: string;

    @Column({ nullable: true })
    profileUrlImage: string;

    @Column({ nullable: true })
    age: number;

    @Column({ nullable: true })
    observations: string;

    @Column()
    idAnimalShelther: number

    @ManyToOne(() => AnimalShelter, (animalshelter) => animalshelter.id)
    animalshelter: AnimalShelter
}