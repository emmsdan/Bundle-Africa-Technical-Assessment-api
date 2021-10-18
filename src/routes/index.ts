import { Application } from "express";
import { GetRewards } from "../controllers/RewarderController";
import { fileValidator } from "../middleware/validator";

export default (app: Application) => {
  app.post("/reward", fileValidator("csv"), GetRewards);
};
