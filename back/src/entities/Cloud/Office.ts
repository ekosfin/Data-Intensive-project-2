import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Permission } from "./Permission";

@Entity("offices")
export class Office {
  @PrimaryGeneratedColumn()
  officeid: number;

  @Column({ type: "varchar", length: 100 })
  name: string;

  @Column({ type: "text" })
  connectionstring: string;

  @Column({ type: "text" })
  address: string;
}
