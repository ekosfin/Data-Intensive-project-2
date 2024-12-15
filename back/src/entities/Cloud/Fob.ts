import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";
import { User } from "./User";

@Entity("fob")
export class Fob {
  @PrimaryGeneratedColumn()
  fobid: number;

  @Column({ type: "int", nullable: false })
  userid: User;
}
