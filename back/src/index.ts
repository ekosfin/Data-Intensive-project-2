import * as express from "express";
import { Request, Response } from "express";
import {
  swedenDataSource,
  irelandDataSource,
  germanyDataSource,
} from "./data-source";
import { User } from "./entities/Cloud/User";

var cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

async function initializeDatabases() {
  await Promise.all([
    swedenDataSource.initialize(),
    irelandDataSource.initialize(),
    germanyDataSource.initialize(),
  ]);
  console.log("Databases initialized");
}

app.get("/users", async (req, res) => {
  try {
    const users = await swedenDataSource.getRepository(User).find();
    res.json(users);
  } catch (error) {
    res.status(500).send("Failed to fetch users.");
  }
});

app.post("/user", async (req, res) => {
  const { Name, Phone } = req.body;
  try {
    const newUser = swedenDataSource
      .getRepository(User)
      .create({ Name, Phone });
    await swedenDataSource.getRepository(User).save(newUser);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send("Failed to add user.");
  }
});

app.delete("/:id", async (req, res) => {
  const UserID = parseInt(req.params.id);
  try {
    await swedenDataSource.getRepository(User).delete({ UserID });
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
