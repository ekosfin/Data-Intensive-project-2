import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./Cloud/User";

@Entity("Fob")
export class Fob {
  @PrimaryGeneratedColumn()
  FobID: number;

  @ManyToOne(() => User, (user) => user.Fobs, { nullable: false })
  UserID: User;
}