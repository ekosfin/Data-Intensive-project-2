import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { RoomPermission } from "./RoomPermissions";

@Entity("Rooms")
export class Room {
  @PrimaryGeneratedColumn()
  RoomID: number;

  @Column({ type: "varchar", length: 100 })
  RoomName: string;

  @OneToMany(() => RoomPermission, (roomPermission) => roomPermission.RoomID)
  RoomPermissions: RoomPermission[];
}
