import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Permission } from "./Permissions";

@Entity("Roles")
export class Role {
  @PrimaryGeneratedColumn()
  roleid: number;

  @Column({ type: "varchar", length: 100 })
  rolename: string;

  @OneToMany(() => Permission, (permission) => permission.roleid)
  permissions: Permission[];
}
