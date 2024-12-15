import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Permission } from "./Permission";

@Entity("roles")
export class Role {
  @PrimaryGeneratedColumn()
  roleid: number;

  @Column({ type: "varchar", length: 100 })
  rolename: string;
}
