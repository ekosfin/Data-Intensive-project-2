import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity("Admins")
export class Admin {
  @PrimaryGeneratedColumn()
  AdminID: number;

  @ManyToOne(() => User, (user) => user.UserID, { nullable: false })
  UserID: User;

  @Column({ type: "text", nullable: true })
  Permissions: string;
}
