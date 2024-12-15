import { DataSource } from "typeorm";
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

export async function seedData(dataSource: DataSource, location: string) {
  const locationEntities =
    location === "sweden" ? swedenData : officeData[location];

  if (location === "sweden") {
    await dataSource.query(
      `TRUNCATE TABLE "Permissions", "Offices", "Fob", "Admins", "Users", "Roles" CASCADE`
    );

    await dataSource.getRepository(User).save(locationEntities.users);
    await dataSource.getRepository(Admin).save(locationEntities.admins);
    await dataSource.getRepository(Fob).save(locationEntities.fobs);
    await dataSource.getRepository(Office).save(locationEntities.offices);
    await dataSource
      .getRepository(Permission)
      .save(locationEntities.permissions);
    await dataSource.getRepository(Role).save(locationEntities.roles);
  }

  if (location === "ireland" || location === "germany") {
    await dataSource.query(
      `TRUNCATE TABLE "RoomPermissions", "Permissions", "Rooms", "Fob", "Role" CASCADE`
    );
    await dataSource.getRepository(OfficeRole).save(locationEntities.roles);
    await dataSource.getRepository(OfficeFob).save(locationEntities.fobs);
    await dataSource.getRepository(Room).save(locationEntities.rooms);
    await dataSource
      .getRepository(OfficePermissions)
      .save(locationEntities.permissions);
    await dataSource
      .getRepository(RoomPermission)
      .save(locationEntities.roomPermissions);
  }
}

const swedenData = {
  users: [
    { userid: 1, name: "Alice", phone: "123456789" },
    { userid: 2, name: "Bob", phone: "987654321" },
    { userid: 3, name: "Charlie", phone: "111222333" },
    { userid: 4, name: "Diana", phone: "444555666" },
    { userid: 5, name: "Eve", phone: "555666777" },
  ],
  admins: [
    { adminid: 1, userid: 1, permissions: "all" },
    { adminid: 2, userid: 2, permissions: "read-only" },
    { adminid: 3, userid: 5, permissions: "write-only" },
  ],
  fobs: [
    { fobid: 1, userid: 1 },
    { fobid: 2, userid: 2 },
    { fobid: 3, userid: 3 },
    { fobid: 4, userid: 4 },
    { fobid: 5, userid: 5 },
  ],
  offices: [
    {
      officeid: 1,
      name: "Stockholm HQ",
      connectionstring: "db://stockholm-cloud",
      address: "Central St. 10, Stockholm",
    },
    {
      officeid: 2,
      name: "Gothenburg Branch",
      connectionstring: "db://gothenburg-cloud",
      address: "West St. 20, Gothenburg",
    },
    {
      officeid: 3,
      name: "Malmö Hub",
      connectionstring: "db://malmo-cloud",
      address: "South St. 15, Malmö",
    },
  ],
  permissions: [
    { permissionid: 1, userid: 1, officeid: 1, roleid: 1 },
    { permissionid: 2, userid: 2, officeid: 1, roleid: 2 },
    { permissionid: 3, userid: 3, officeid: 2, roleid: 1 },
    { permissionid: 4, userid: 4, officeid: 2, roleid: 2 },
    { permissionid: 5, userid: 5, officeid: 3, roleid: 1 },
  ],
  roles: [
    { roleid: 1, rolename: "Manager" },
    { roleid: 2, rolename: "Employee" },
    { roleid: 3, rolename: "Intern" },
  ],
};

const officeData = {
  ireland: {
    roles: [
      { roleid: 1, rolename: "Supervisor" },
      { roleid: 2, rolename: "Technician" },
      { roleid: 3, rolename: "Analyst" },
    ],
    rooms: [
      { roomid: 1, roomname: "Conference Room A" },
      { roomid: 2, roomname: "Break Room" },
      { roomid: 3, roomname: "IT Office" },
      { roomid: 4, roomname: "CEO Office" },
    ],
    fobs: [
      { fobid: 1, userid: 1 },
      { fobid: 2, userid: 2 },
      { fobid: 3, userid: 3 },
    ],
    permissions: [
      { permissionid: 1, userid: 1, roleid: 1 },
      { permissionid: 2, userid: 2, roleid: 2 },
      { permissionid: 3, userid: 3, roleid: 3 },
    ],
    roomPermissions: [
      { roompermissionid: 1, permissionid: 1, roomid: 1 },
      { roompermissionid: 2, permissionid: 2, roomid: 2 },
      { roompermissionid: 3, permissionid: 1, roomid: 3 },
      { roompermissionid: 4, permissionid: 3, roomid: 4 },
    ],
  },
  germany: {
    roles: [
      { roleid: 1, rolename: "Administrator" },
      { roleid: 2, rolename: "Support" },
      { roleid: 3, rolename: "Developer" },
    ],
    rooms: [
      { roomid: 1, roomname: "Server Room" },
      { roomid: 2, roomname: "Office Space" },
      { roomid: 3, roomname: "Lobby" },
      { roomid: 4, roomname: "Board Room" },
    ],
    fobs: [
      { fobid: 1, userid: 3 },
      { fobid: 2, userid: 4 },
      { fobid: 3, userid: 5 },
    ],
    permissions: [
      { permissionid: 1, userid: 3, roleid: 1 },
      { permissionid: 2, userid: 4, roleid: 2 },
      { permissionid: 3, userid: 5, roleid: 3 },
    ],
    roomPermissions: [
      { roompermissionid: 1, permissionid: 1, roomid: 1 },
      { roompermissionid: 2, permissionid: 2, roomid: 2 },
      { roompermissionid: 3, permissionid: 1, roomid: 3 },
      { roompermissionid: 4, permissionid: 3, roomid: 4 },
    ],
  },
};
