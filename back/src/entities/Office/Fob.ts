import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";

@Entity("fob")
export class Fob {
  @PrimaryGeneratedColumn()
  fobid: number;

  @Column({ type: "int", nullable: false })
  userid: number;

  @Column({ type: "int", nullable: false })
  roleid: number;
}
