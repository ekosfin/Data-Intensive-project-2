import * as express from "express";
import {
  swedenDataSource,
  irelandDataSource,
  germanyDataSource,
} from "./data-source";
import { User } from "./entities/Cloud/User";
import { Role as CloudRole } from "./entities/Cloud/Role";
import { Role as OfficeRole } from "./entities/Office/Role";
import { Permission } from "./entities/Cloud/Permission";
import { Office } from "./entities/Cloud/Office";
import { Admin } from "./entities/Cloud/Admins";
import { Room } from "./entities/Office/Rooms";
import { Fob as OfficeFob } from "./entities/Office/Fob";
import { Fob as CloudFob } from "./entities/Cloud/Fob";
import { RoomPermission } from "./entities/Office/RoomPermissions";
import { seedData } from "./seed";

var cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const OfficeSource = {
  1: irelandDataSource,
  2: germanyDataSource,
};

async function initializeDatabases() {
  await Promise.all([
    swedenDataSource.initialize(),
    ...Object.values(OfficeSource).map((entry) => entry.initialize()),
  ]);
  console.log("Databases initialized");

  //await seedData(swedenDataSource, "sweden");
  //await seedData(irelandDataSource, "ireland");
  //await seedData(germanyDataSource, "germany");
  //console.log("Data seeded into each database");
}

app.get("/users", async (req, res) => {
  try {
    const users = await swedenDataSource.getRepository(User).find();
    res.json(users);
  } catch (error) {
    res.status(500).send("Failed to fetch users.");
  }
});

app.post("/users", async (req, res) => {
  const { name, phone } = req.body;
  try {
    const newUser = swedenDataSource
      .getRepository(User)
      .create({ name, phone });
    await swedenDataSource.getRepository(User).save(newUser);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send("Failed to add user.");
  }
});

app.get("/roles", async (req, res) => {
  try {
    const roles = await swedenDataSource.getRepository(CloudRole).find();
    res.json(roles);
  } catch (error) {
    res.status(500).send("Failed to fetch roles.");
  }
});

app.get("/permissions", async (req, res) => {
  try {
    const permissions = await swedenDataSource.getRepository(Permission).find();
    res.json(permissions);
  } catch (error) {
    res.status(500).send("Failed to fetch permissions.");
  }
});

app.get("/admins", async (req, res) => {
  try {
    const admins = await swedenDataSource.getRepository(Admin).find();
    res.json(admins);
  } catch (error) {
    res.status(500).send("Failed to fetch offices.");
  }
});

app.get("/offices", async (req, res) => {
  try {
    const offices = await swedenDataSource.getRepository(Office).find();
    res.json(offices);
  } catch (error) {
    res.status(500).send("Failed to fetch offices.");
  }
});

app.get("/fobs", async (req, res) => {
  try {
    const fobs = await swedenDataSource.getRepository(CloudFob).find();
    res.json(fobs);
  } catch (error) {
    res.status(500).send("Failed to fetch fobs.");
  }
});

app.get("/officefob/:officeid", async (req, res) => {
  try {
    const officeId = req.params.officeid;
    const dataSource = OfficeSource[officeId];
    const fobs = await dataSource.getRepository(OfficeFob).find();
    res.json(fobs);
  } catch (error) {
    res.status(500).send(`Failed to fetch admins:\n${error}`);
  }
});

app.get("/officepermissions/:officeid", async (req, res) => {
  try {
    const officeId = req.params.officeid;
    const dataSource = OfficeSource[officeId];
    const roompermissions = await dataSource
      .getRepository(RoomPermission)
      .find();
    res.json(roompermissions);
  } catch (error) {
    res.status(500).send(`Failed to fetch admins:\n${error}`);
  }
});

app.get("/officerole/:officeid", async (req, res) => {
  try {
    const officeId = req.params.officeid;
    const dataSource = OfficeSource[officeId];
    const roles = await dataSource.getRepository(OfficeRole).find();
    res.json(roles);
  } catch (error) {
    res.status(500).send(`Failed to fetch admins:\n${error}`);
  }
});

app.get("/officerooms/:officeid", async (req, res) => {
  try {
    const officeId = req.params.officeid;
    const dataSource = OfficeSource[officeId];
    const rooms = await dataSource.getRepository(Room).find();
    res.json(rooms);
  } catch (error) {
    res.status(500).send(`Failed to fetch admins:\n${error}`);
  }
});

app.get("/officeroompermissions/:officeid", async (req, res) => {
  try {
    const officeId = req.params.officeid;
    const dataSource = OfficeSource[officeId];
    const roompermission = await dataSource
      .getRepository(RoomPermission)
      .find();
    res.json(roompermission);
  } catch (error) {
    res.status(500).send(`Failed to fetch admins:\n${error}`);
  }
});
app.delete("users/:id", async (req, res) => {
  const userid = parseInt(req.params.id);
  try {
    await swedenDataSource.getRepository(User).delete({ userid });
    res.status(204).send();
  } catch (error) {
    res.status(500).send("Failed to delete user.");
  }
});

const PORT = 8000;
app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  await initializeDatabases();
});
