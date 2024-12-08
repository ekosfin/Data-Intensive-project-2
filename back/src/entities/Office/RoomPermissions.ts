import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Permission } from "./Permissions";
import { Room } from "./Rooms";

@Entity("RoomPermissions")
export class RoomPermission {
  @PrimaryGeneratedColumn()
  RoomPermissionID: number;

  @ManyToOne(() => Permission, (permission) => permission.RoomPermissions, {
    nullable: false,
  })
  PermissionID: Permission;

  @ManyToOne(() => Room, (room) => room.RoomPermissions, { nullable: false })
  RoomID: Room;
}
