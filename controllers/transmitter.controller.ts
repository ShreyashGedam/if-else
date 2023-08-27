import { Request, Response } from "express";
import { earthMessage, marsMessage } from "../methods/transmitterMethod";

const Transmitter = async (req: Request, res: Response) => {
  try {
    const { message, sender } = req.body;

    if (sender === "earth") {
      const data: string = earthMessage(message);
      return res.status(200).send({
        "Response from Earth": message,
        "Nokia Translation": data,
      });
    } else {
      const data: string = marsMessage(message);
      return res.status(200).send({
        "Response from Mars": message,
        "Nokia Translation": data.toLowerCase(),
      });
    }
  } catch (error) {
    return res.status(400).send("error");
  }
};

export { Transmitter };
