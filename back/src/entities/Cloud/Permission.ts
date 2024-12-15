import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";
import { User } from "./User";
import { Office } from "./Office";
import { Role } from "./Role";

@Entity("permissions")
export class Permission {
  @PrimaryGeneratedColumn()
  permissionid: number;

  @Column({ type: "int", nullable: false })
  userid: User;

  @Column({ type: "int", nullable: false })
  officeid: Office;

  @Column({ type: "int", nullable: false })
  roleid: Role;
}
