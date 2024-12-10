import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";

@Entity("Fob")
export class Fob {
  @PrimaryGeneratedColumn()
  FobID: number;

  @Column({ type: "int", nullable: false })
  UserID: number;
}
