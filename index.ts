import express from "express";
import { route } from "./routes/transmitter.route";
const app = express();
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("messages.db");
db.run(
  `
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        sender TEXT,
        receiver TEXT,
        message TEXT,
        timestamp INTEGER 
    )
`,
  (err: Error) => {
    if (err) {
      console.error("Error creating table:", err);
    }
  }
);

db.close();

app.use(express.json());
app.use("/api/earth-mass-comm", route);

app.listen(8080, () => {
  console.log("listening to port 8080");
});
