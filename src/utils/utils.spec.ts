import { toCamelCase, priceConfiguration, objectToCamelCase } from "./index";

describe("priceConfiguration Utils", () => {
  it("should get low price", () => {
    expect(priceConfiguration(1000)).toStrictEqual({
      validity: 1,
      price: 100,
    });
  });

  it("return 0 for non eligible amount", () => {
    [56].map((n: any) => {
      expect(priceConfiguration(n)).toEqual({ validity: 0, price: 0 });
    });
  });

  it("should get medium price", () => {
    expect(priceConfiguration(6000)).toStrictEqual({
      validity: 5,
      price: 500,
    });
  });

  it("should get high price", () => {
    expect(priceConfiguration(50000)).toStrictEqual({
      validity: 10,
      price: 1000,
    });
  });
});

describe("toCamelCase Utils", () => {
  it("should convert to camel case", () => {
    expect(toCamelCase("user number")).toStrictEqual("userNumber");
  });

  it("return non string as it is.", () => {
    [56].map((n: any) => {
      expect(toCamelCase(n)).toEqual(56);
    });
  });
});

describe("objectToCamelCase Utils", () => {
  it("should convert object keys to camel case", () => {
    expect(
      objectToCamelCase({
        "customer name": "Loe Mark",
        customer_amount: 2000,
      })
    ).toStrictEqual({
      customerName: "Loe Mark",
      customerAmount: 2000,
    });
  });
});
