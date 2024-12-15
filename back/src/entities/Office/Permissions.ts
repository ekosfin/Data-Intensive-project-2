import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  Column,
} from "typeorm";
import { Role } from "../Office/Role";
import { RoomPermission } from "./RoomPermissions";

@Entity("permissions")
export class Permission {
  @PrimaryGeneratedColumn()
  permissionid: number;

  @Column({ type: "int", nullable: false })
  userid: number;

  @Column({ type: "int", nullable: false })
  roleid: number;
}
