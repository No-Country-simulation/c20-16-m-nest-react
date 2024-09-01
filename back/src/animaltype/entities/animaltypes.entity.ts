import { CommonEntity } from "../../common/entities/common.entity";
import { Column, Entity } from "typeorm";

@Entity('animaltypes')
export class AnimalTypes extends CommonEntity {
    @Column({ nullable: false })
    name: string
}
