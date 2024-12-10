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
  PermissionID: number;

  @Column({ type: "int", nullable: false })
  UserID: number;

  @ManyToOne(() => Role, (role) => role.Permissions, { nullable: false })
  RoleID: Role;

  @OneToMany(
    () => RoomPermission,
    (roomPermission) => roomPermission.PermissionID
  )
  RoomPermissions: RoomPermission[];
}
