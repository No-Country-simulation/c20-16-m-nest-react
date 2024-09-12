import { Animal } from "../../animal/entities/animal.entity";
import { CommonEntity } from "../../common/entities/common.entity";
import { Column, Entity, ManyToMany } from "typeorm";

@Entity('animalfeatures')
export class AnimalFeatures extends CommonEntity {
    @Column({ nullable: false })
    name: string

    @ManyToMany(() => Animal, (animal) => animal.animalfeatures)
    animal: Animal[];
}
