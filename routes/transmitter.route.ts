import { Router } from "express";
import { Transmitter } from "../controllers/transmitter.controller";
import { transmitterMiddleware } from "../middleware/transmitterMiddleware";

const route: Router = Router();

route.post("/message", transmitterMiddleware, Transmitter);

export { route };
