import { AnimalTypes } from "../../animaltype/entities/animaltypes.entity";
import { AnimalShelter } from "../../animalshelter/entities/animalshelter.entity";
import { CommonEntity } from "../../common/entities/common.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from "typeorm";
import { AnimalFeatures } from "../../animalfeatures/entities/animalfeatures.entity";

@Entity('animal')
export class Animal extends CommonEntity {
    @Column({ nullable: false })
    name: string;

    @Column({ nullable: true })
    profileUrlImage: string;

    @Column({ nullable: true })
    age: number;

    @Column({ nullable: true })
    observations: string;

    @ManyToOne(() => AnimalShelter, (animalshelter) => animalshelter.animal)
    animalShelther: AnimalShelter

    @ManyToOne(() => AnimalTypes, (animaltypes) => animaltypes.animal)
    animalTypes: AnimalTypes

    @ManyToMany(() => AnimalFeatures)
    @JoinTable()
    animalfeatures: AnimalFeatures[]
}