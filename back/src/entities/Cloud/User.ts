import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Admin } from "./Admins";
import { Permission } from "./Permission";
import { Fob } from "../Fob";

@Entity("Users")
export class User {
  @PrimaryGeneratedColumn()
  UserID: number;

  @Column({ type: "varchar", length: 100 })
  Name: string;

  @Column({ type: "varchar", length: 15 })
  Phone: string;

  @OneToMany(() => Admin, (admin) => admin.UserID)
  Admins: Admin[];

  @OneToMany(() => Permission, (permission) => permission.UserID)
  Permissions: Permission[];

  @OneToMany(() => Fob, (fob) => fob.UserID)
  Fobs: Fob[];
}
