import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Admin } from "./Admins";
import { Permission } from "./Permission";
import { Fob } from "./Fob";

@Entity("Users")
export class User {
  @PrimaryGeneratedColumn()
  userid: number;

  @Column({ type: "varchar", length: 100 })
  name: string;

  @Column({ type: "varchar", length: 15 })
  phone: string;

  @OneToMany(() => Admin, (admin) => admin.userid)
  admins: Admin[];

  @OneToMany(() => Permission, (permission) => permission.userid)
  permissions: Permission[];

  @OneToMany(() => Fob, (fob) => fob.userid)
  fobs: Fob[];
}
