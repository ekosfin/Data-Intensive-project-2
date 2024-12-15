import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Permission } from "./Permissions";
import { Room } from "./Rooms";

@Entity("RoomPermissions")
export class RoomPermission {
  @PrimaryGeneratedColumn()
  roompermissionid: number;

  @ManyToOne(() => Permission, (permission) => permission.roompermissions, {
    nullable: false,
  })
  permissionid: Permission;

  @ManyToOne(() => Room, (room) => room.roompermissions, { nullable: false })
  roomid: Room;
}
