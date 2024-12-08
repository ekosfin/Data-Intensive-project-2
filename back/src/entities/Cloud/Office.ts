import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Permission } from "./Permission";

@Entity("Offices")
export class Office {
  @PrimaryGeneratedColumn()
  OfficeID: number;

  @Column({ type: "varchar", length: 100 })
  Name: string;

  @Column({ type: "text" })
  ConnectionString: string;

  @Column({ type: "text" })
  Address: string;

  @OneToMany(() => Permission, (permission) => permission.OfficeID)
  Permissions: Permission[];
}
