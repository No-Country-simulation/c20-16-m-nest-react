import { Animal } from "../../animal/entities/animal.entity";
import { CommonEntity } from "../../common/entities/common.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, OneToOne } from "typeorm";

@Entity('reportstate')
export class ReportState extends CommonEntity {
    @Column({ nullable: false })
    name: string

    @OneToOne(() => Animal)
    @JoinTable()
    animal: Animal;
}
