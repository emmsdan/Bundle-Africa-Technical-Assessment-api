import request from "supertest";
import { app } from "../app";

const TestCSVBuffer = Buffer.from(`Customer ID,Customer First Name,Order Value
1,Lanre,100
2,Lanre king,3000`);

describe("Test GetRewards", () => {
  it("Request /reward should return correct data", async () => {
    const expectedOutput = [
      {
        customerFirstName: "Lanre",
        customerID: 1,
        orderValue: 100,
        price: 0,
        validity: 0,
      },
      {
        customerFirstName: "Lanre king",
        customerID: 2,
        orderValue: 3000,
        price: 100,
        validity: 1,
      },
    ];
    const result = await request(app)
      .post("/reward")
      .attach("file", TestCSVBuffer, "test-csv.csv");
    expect(result.status).toBe(200);
    expect(result.body.data).toStrictEqual(expectedOutput);
  });

  it("Request /reward should return 400", async () => {
    const result = await request(app)
      .post("/reward")
      .attach("file", TestCSVBuffer, "test-csv.txt");
    expect(result.status).toBe(400);
    expect(result.body).toStrictEqual({
      message: "File upload should be csv type",
      type: "text/plain",
    });
  });

  it("Request /reward should return no file uploaded", async () => {
    const result = await request(app).post("/reward");
    expect(result.status).toBe(400);
    expect(result.body).toStrictEqual({ message: "No files were uploaded." });
  });
});
