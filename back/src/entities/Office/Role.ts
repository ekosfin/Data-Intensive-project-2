import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Permission } from "./Permissions";

@Entity("Roles")
export class Role {
  @PrimaryGeneratedColumn()
  RoleID: number;

  @Column({ type: "varchar", length: 100 })
  RoleName: string;

  @OneToMany(() => Permission, (permission) => permission.RoleID)
  Permissions: Permission[];
}
