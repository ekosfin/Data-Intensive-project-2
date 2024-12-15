import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity("admins")
export class Admin {
  @PrimaryGeneratedColumn()
  adminid: number;

  @Column({ type: "int", nullable: false })
  userid: User;

  @Column({ type: "text", nullable: true })
  permissions: string;
}
