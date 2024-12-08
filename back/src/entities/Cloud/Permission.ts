import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./User";
import { Office } from "./Office";
import { Role } from "../Role";

@Entity("Permissions")
export class Permission {
  @PrimaryGeneratedColumn()
  PermissionID: number;

  @ManyToOne(() => User, (user) => user.Permissions, { nullable: false })
  UserID: User;

  @ManyToOne(() => Office, (office) => office.Permissions, { nullable: true })
  OfficeID: Office;

  @ManyToOne(() => Role, (role) => role.Permissions, { nullable: true })
  RoleID: Role;
}
