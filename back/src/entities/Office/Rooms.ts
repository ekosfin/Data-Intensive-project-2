import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { RoomPermission } from "./RoomPermissions";

@Entity("rooms")
export class Room {
  @PrimaryGeneratedColumn()
  roomid: number;

  @Column({ type: "varchar", length: 100 })
  roomname: string;
}
