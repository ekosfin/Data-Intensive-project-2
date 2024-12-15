import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";

@Entity("Fob")
export class Fob {
  @PrimaryGeneratedColumn()
  fobid: number;

  @Column({ type: "int", nullable: false })
  userid: number;
}
