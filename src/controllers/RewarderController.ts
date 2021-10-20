import { Request, Response } from "express";
import csvToJson from "convert-csv-to-json";
import { objectToCamelCase, priceConfiguration } from "../utils";
export const GetRewards = async (req: Request, res: Response) => {
  try {
    const start = Date.now();
    const data = csvToJson
      .formatValueByType()
      .fieldDelimiter(",")
      .map((__header: any, value: { OrderValue: string | number }) => {
        return objectToCamelCase({
          ...value,
          ...priceConfiguration(Number(value.OrderValue) + 1),
        });
      })
      .parseSubArray("*", ",")
      // @ts-ignore
      .getJsonFromCsv(req.files.file.tempFilePath);
    const end = Date.now();
    res.status(200).json({ data, start, end, diff: end - start });
  } catch (e) {}
};
