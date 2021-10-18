import { Request, Response } from "express";

export const GetRewards = async (req: Request, res: Response) => {
  try {
    // uploaded data
    // convert csv to json

    res.status(200).send({ data: "Pong!" });
  } catch (e) {}
};
