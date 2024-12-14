import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity("Fob")
export class Fob {
  @PrimaryGeneratedColumn()
  fobid: number;

  @ManyToOne(() => User, (user) => user.fobs, { nullable: false })
  userid: User;
}
