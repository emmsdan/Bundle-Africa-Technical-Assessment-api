import { Request, Response } from "express";
import csvToJson from "convert-csv-to-json";
import { objectToCamelCase, priceConfiguration } from "../utils";
export const GetRewards = async (req: Request, res: Response) => {
  try {
    let totalAmount = 0;
    let totalValidity = 0;
    let totalOrderValue = 0;
    const data = csvToJson
      .formatValueByType()
      .fieldDelimiter(",")
      .map((__header: any, value: { OrderValue: string | number }) => {
        const priceConfig = priceConfiguration(Number(value.OrderValue));
        totalAmount += priceConfig.price;
        totalValidity += priceConfig.validity;
        totalOrderValue += Number(value.OrderValue);
        return objectToCamelCase({
          ...value,
          ...priceConfig,
        });
      })
      .parseSubArray("*", ",")
      // @ts-ignore
      .getJsonFromCsv(req.files.file.tempFilePath);
    res
      .status(200)
      .json({ data, meta: { totalValidity, totalAmount, totalOrderValue } });
  } catch (e) {}
};
