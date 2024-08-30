import { AnimalTypes } from "src/animaltype/entities/animaltypes.entity";
import { CommonEntity } from "src/common/entities/common.entity";
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

    @Column()
    idAnimalType: number

    @ManyToMany(() => AnimalTypes)
    @JoinTable()
    animaltypes: AnimalTypes[]
}
