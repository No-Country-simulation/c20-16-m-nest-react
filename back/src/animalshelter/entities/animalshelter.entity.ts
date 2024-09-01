import { AnimalTypes } from "../../animaltype/entities/animaltypes.entity";
import { CommonEntity } from "../../common/entities/common.entity";
import { Column, Entity, JoinTable, ManyToMany } from "typeorm";

@Entity('animalshelter')
export class AnimalShelter extends CommonEntity {
    @Column({ nullable: false })
    name: string;

    @Column({ nullable: true })
    profileUrlImage: string;

    @Column({ nullable: true })
    observations: string;

    @Column({ nullable: false })
    address: string;

    @Column({ nullable: false })
    phone: string;

    @Column({ nullable: false, unique: true })
    email: string;

    @Column({ nullable: false, type: 'float' })
    latitude: number;

    @Column({ nullable: false, type: 'float' })
    longitude: number;

    @Column({ nullable: true, type: 'int', default: 0 })
    capacity: number;

    @Column({ nullable: true })
    openingHours: string;

    @ManyToMany(() => AnimalTypes, (animaltype) => animaltype.id)
    @JoinTable()
    animaltypes: AnimalTypes[]
}
