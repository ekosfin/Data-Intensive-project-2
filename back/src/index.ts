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
import { Permission as OfficePermission } from "./entities/Office/Permissions";

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
    console.log(error);
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
    console.log(error);
  }
});

app.delete("/users/:id", async (req, res) => {
  const userid = parseInt(req.params.id);
  try {
    await swedenDataSource.getRepository(User).delete({ userid });
    res.status(204).send();
  } catch (error) {
    res.status(500).send("Failed to delete user.");
    console.log(error);
  }
});

app.patch("/users/:id", async (req, res) => {
  const userid = parseInt(req.params.id);
  const { phone } = req.body;

  try {
    const user = await swedenDataSource
      .getRepository(User)
      .findOne({ where: { userid } });

    if (!user) {
      res.status(404).send("User not found.");
      return;
    }
    console.log(phone);
    if (phone) {
      user.phone = phone;
      await swedenDataSource.getRepository(User).save(user);
      res.status(200).json(user);
    } else {
      res.status(400).send("Phone number is required.");
    }
  } catch (error) {
    res.status(500).send("Failed to update user.");
    console.log(error);
  }
});

app.get("/roles", async (req, res) => {
  try {
    const roles = await swedenDataSource.getRepository(CloudRole).find();
    res.json(roles);
  } catch (error) {
    res.status(500).send("Failed to fetch roles.");
    console.log(error);
  }
});

app.get("/permissions", async (req, res) => {
  try {
    const permissions = await swedenDataSource.getRepository(Permission).find();
    res.json(permissions);
  } catch (error) {
    res.status(500).send("Failed to fetch permissions.");
    console.log(error);
  }
});

app.get("/admins", async (req, res) => {
  try {
    const admins = await swedenDataSource.getRepository(Admin).find();
    res.json(admins);
  } catch (error) {
    res.status(500).send("Failed to fetch offices.");
    console.log(error);
  }
});

app.get("/offices", async (req, res) => {
  try {
    const offices = await swedenDataSource.getRepository(Office).find();
    let mainOffices = offices.slice(0, 2);
    mainOffices.push({
      officeid: 3,
      name: "All Offices",
      connectionstring: "",
      address: "",
    });
    res.json(mainOffices);
  } catch (error) {
    res.status(500).send("Failed to fetch offices.");
    console.log(error);
  }
});

app.get("/fobs", async (req, res) => {
  try {
    const fobs = await swedenDataSource.getRepository(CloudFob).find();
    res.json(fobs);
  } catch (error) {
    res.status(500).send("Failed to fetch fobs.");
    console.log(error);
  }
});

app.get("/officefob/:officeid", async (req, res) => {
  try {
    const officeId = req.params.officeid;
    if (officeId == "3") {
      const irelandFobs = await irelandDataSource
        .getRepository(OfficeFob)
        .find();
      const germanyFobs = await germanyDataSource
        .getRepository(OfficeFob)
        .find();
      res.json(irelandFobs.concat(germanyFobs));
    } else {
      const dataSource = OfficeSource[officeId];
      const fobs = await dataSource.getRepository(OfficeFob).find();
      res.json(fobs);
    }
  } catch (error) {
    res.status(500).send(`Failed to fetch admins:\n${error}`);
    console.log(error);
  }
});

app.get("/officepermissions/:officeid", async (req, res) => {
  try {
    const officeId = req.params.officeid;
    if (officeId == "3") {
      const irelandRoomPermission = await irelandDataSource
        .getRepository(OfficePermission)
        .find();
      const germanyRoomPermission = await germanyDataSource
        .getRepository(OfficePermission)
        .find();
      res.json(irelandRoomPermission.concat(germanyRoomPermission));
    } else {
      const dataSource = OfficeSource[officeId];
      const roompermissions = await dataSource
        .getRepository(OfficePermission)
        .find();
      res.json(roompermissions);
    }
  } catch (error) {
    res.status(500).send(`Failed to fetch admins:\n${error}`);
    console.log(error);
  }
});

app.get("/officerole/:officeid", async (req, res) => {
  try {
    const officeId = req.params.officeid;
    if (officeId == "3") {
      const irelandOfficeRole = await irelandDataSource
        .getRepository(OfficeRole)
        .find();
      const germanyOfficeRole = await germanyDataSource
        .getRepository(OfficeRole)
        .find();
      res.json(irelandOfficeRole.concat(germanyOfficeRole));
    } else {
      const dataSource = OfficeSource[officeId];
      const roles = await dataSource.getRepository(OfficeRole).find();
      res.json(roles);
    }
  } catch (error) {
    res.status(500).send(`Failed to fetch admins:\n${error}`);
    console.log(error);
  }
});

app.get("/officerooms/:officeid", async (req, res) => {
  try {
    const officeId = req.params.officeid;
    if (officeId == "3") {
      const irelandRoom = await irelandDataSource.getRepository(Room).find();
      const germanyRoom = await germanyDataSource.getRepository(Room).find();
      res.json(irelandRoom.concat(germanyRoom));
    } else {
      const dataSource = OfficeSource[officeId];
      const rooms = await dataSource.getRepository(Room).find();
      res.json(rooms);
    }
  } catch (error) {
    res.status(500).send(`Failed to fetch admins:\n${error}`);
    console.log(error);
  }
});

app.get("/officeroompermissions/:officeid", async (req, res) => {
  try {
    const officeId = req.params.officeid;
    if (officeId == "3") {
      const irelandRoomPermission = await irelandDataSource
        .getRepository(RoomPermission)
        .find();
      const germanyRoomPermission = await germanyDataSource
        .getRepository(RoomPermission)
        .find();
      res.json(irelandRoomPermission.concat(germanyRoomPermission));
    } else {
      const dataSource = OfficeSource[officeId];
      const roompermission = await dataSource
        .getRepository(RoomPermission)
        .find();
      res.json(roompermission);
    }
  } catch (error) {
    res.status(500).send(`Failed to fetch admins:\n${error}`);
    console.log(error);
  }
});

const PORT = 8000;
app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  await initializeDatabases();
});
