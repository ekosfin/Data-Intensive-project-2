import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./User";
import { Office } from "./Office";
import { Role } from "./Role";

@Entity("Permissions")
export class Permission {
  @PrimaryGeneratedColumn()
  permissionid: number;

  @ManyToOne(() => User, (user) => user.permissions, { nullable: false })
  userid: User;

  @ManyToOne(() => Office, (office) => office.permissions, { nullable: true })
  officeid: Office;

  @ManyToOne(() => Role, (role) => role.permissions, { nullable: true })
  roleid: Role;
}
