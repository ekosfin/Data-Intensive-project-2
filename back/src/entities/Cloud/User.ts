import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Admin } from "./Admins";
import { Permission } from "./Permission";
import { Fob } from "./Fob";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  userid: number;

  @Column({ type: "varchar", length: 100 })
  name: string;

  @Column({ type: "varchar", length: 15 })
  phone: string;
}
