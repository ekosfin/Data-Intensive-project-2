import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { RoomPermission } from "./RoomPermissions";

@Entity("Rooms")
export class Room {
  @PrimaryGeneratedColumn()
  roomid: number;

  @Column({ type: "varchar", length: 100 })
  roomname: string;

  @OneToMany(() => RoomPermission, (roomPermission) => roomPermission.roomid)
  roompermissions: RoomPermission[];
}
