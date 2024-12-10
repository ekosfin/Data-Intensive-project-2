import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
import { User } from "./entities/Cloud/User";
import { Admin } from "./entities/Cloud/Admins";
import { Office } from "./entities/Cloud/Office";
import { Role } from "./entities/Cloud/Role";
import { Permission } from "./entities/Cloud/Permission";
import { Fob } from "./entities/Cloud/Fob";
import { Room } from "./entities/Office/Rooms";
import { RoomPermission } from "./entities/Office/RoomPermissions";
import { Permission as OfficePermissions } from "./entities/Office/Permissions";
import { Role as OfficeRole } from "./entities/Office/Role";
import { Fob as OfficeFob } from "./entities/Office/Fob";

dotenv.config();

export const swedenDataSource = new DataSource({
  type: "postgres",
  host: process.env.SWEDEN_DB_HOST,
  port: parseInt(process.env.SWEDEN_DB_PORT || "5432", 10),
  username: process.env.SWEDEN_DB_USERNAME,
  password: process.env.SWEDEN_DB_PASSWORD,
  database: process.env.SWEDEN_DB_DATABASE,
  ssl: true,
  entities: [Admin, User, Office, Permission, Role, Fob],
  synchronize: true,
});

export const irelandDataSource = new DataSource({
  type: "postgres",
  host: process.env.IRELAND_DB_HOST,
  port: parseInt(process.env.IRELAND_DB_PORT || "5432", 10),
  username: process.env.IRELAND_DB_USERNAME,
  password: process.env.IRELAND_DB_PASSWORD,
  database: process.env.IRELAND_DB_DATABASE,
  ssl: true,
  entities: [OfficeRole, OfficePermissions, Room, RoomPermission, OfficeFob],
  synchronize: true,
});

export const germanyDataSource = new DataSource({
  type: "postgres",
  host: process.env.GERMANY_DB_HOST,
  port: parseInt(process.env.GERMANY_DB_PORT || "5432", 10),
  username: process.env.GERMANY_DB_USERNAME,
  password: process.env.GERMANY_DB_PASSWORD,
  database: process.env.GERMANY_DB_DATABASE,
  ssl: true,
  entities: [OfficeRole, OfficePermissions, Room, RoomPermission, OfficeFob],
  synchronize: true,
});
