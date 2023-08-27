import { NextFunction, Request, Response } from "express";
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("../messages.db");

const transmitterMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { sender, receiver } = req.headers;

  if (!sender || !receiver) {
    return res.status(400).send("Please enter the headers");
  }

  req.body.sender = sender as string;
  req.body.receiver = receiver as string;
  const startTime: number = Date.now();

  next();

  const endTime: number = Date.now();
  const totalTime: number = endTime - startTime;

  db.run(
    `
      INSERT INTO messages (sender, receiver, message, timestamp)
      VALUES (?, ?, ?, ?)
     `,
    [sender, receiver, req.body.message, totalTime],
    (err: Error) => {
      if (err) {
        console.error("Error inserting message:", err);
      }
    }
  );

  db.all("SELECT * FROM messages", (err: Error, rows: any) => {
    if (err) {
      console.error("Error reading data:", err);
      return;
    }
    console.log("Retrieved data:", rows);
  });
};

export { transmitterMiddleware };
