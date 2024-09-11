import { AnimalTypes } from "../../animaltype/entities/animaltypes.entity";
import { AnimalShelter } from "../../animalshelter/entities/animalshelter.entity";
import { CommonEntity } from "../../common/entities/common.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToOne } from "typeorm";
import { ReportState } from "../../reportstate/entities/reportstate.entity";
import { AnimalFeatures } from "../../animalfeatures/entities/animalfeatures.entity";
import { Adoption } from "../../adoption/entities/adoption.entity";

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

    @ManyToOne(() => AnimalShelter, (animalshelter) => animalshelter.id)
    idAnimalShelther: number

    @ManyToOne(() => AnimalTypes, (animaltypes) => animaltypes.id)
    idAnimalTypes: number

    @ManyToMany(() => AnimalFeatures, (animalfeatures) => animalfeatures.animal, { cascade: true })
    @JoinTable()
    animalfeatures: number[]

    @ManyToOne(() => ReportState, (reportstate) => reportstate.id)
    idReportState: number

    // Relación OneToOne inversa con Adoption
    @OneToOne(() => Adoption, (adoption) => adoption.id)
    idAdoption: number;
}