import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity("Admins")
export class Admin {
  @PrimaryGeneratedColumn()
  adminid: number;

  @ManyToOne(() => User, (user) => user.userid, { nullable: false })
  userid: User;

  @Column({ type: "text", nullable: true })
  permissions: string;
}
