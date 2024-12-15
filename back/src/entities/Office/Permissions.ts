import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  Column,
} from "typeorm";
import { Role } from "../Office/Role";
import { RoomPermission } from "./RoomPermissions";

@Entity("Permissions")
export class Permission {
  @PrimaryGeneratedColumn()
  permissionid: number;

  @Column({ type: "int", nullable: false })
  userid: number;

  @ManyToOne(() => Role, (role) => role.permissions, { nullable: false })
  roleid: Role;

  @OneToMany(
    () => RoomPermission,
    (roomPermission) => roomPermission.permissionid
  )
  roompermissions: RoomPermission[];
}
