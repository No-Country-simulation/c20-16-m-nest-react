import { Animal } from "../../animal/entities/animal.entity";
import { AnimalShelter } from "../../animalshelter/entities/animalshelter.entity";
import { CommonEntity } from "../../common/entities/common.entity";
import { Column, Entity, ManyToMany, OneToMany } from "typeorm";

@Entity('animaltypes')
export class AnimalTypes extends CommonEntity {
    @Column({ nullable: false })
    name: string

    @OneToMany(() => Animal, (animal) => animal.animalTypes, { cascade: true })
    animal: Animal[];
}
