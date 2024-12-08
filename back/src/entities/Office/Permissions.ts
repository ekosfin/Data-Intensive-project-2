import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { User } from "../Cloud/User";
import { Role } from "../Role";
import { RoomPermission } from "./RoomPermissions";

@Entity("Permissions")
export class Permission {
  @PrimaryGeneratedColumn()
  PermissionID: number;

  @ManyToOne(() => User, (user) => user.Permissions, { nullable: false })
  UserID: User;

  @ManyToOne(() => Role, (role) => role.Permissions, { nullable: false })
  RoleID: Role;

  @OneToMany(
    () => RoomPermission,
    (roomPermission) => roomPermission.PermissionID
  )
  RoomPermissions: RoomPermission[];
}
