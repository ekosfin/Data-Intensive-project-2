import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";
import { Permission } from "./Permissions";
import { Room } from "./Rooms";

@Entity("roompermissions")
export class RoomPermission {
  @PrimaryGeneratedColumn()
  roompermissionid: number;

  @Column({ type: "int", nullable: false })
  permissionid: Permission;

  @Column({ type: "int", nullable: false })
  roomid: Room;
}
