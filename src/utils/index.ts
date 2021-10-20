import priceConfig from "../price-config.json";

export const priceConfiguration = (amount: number) => {
  let validity = 0;
  let price = 0;

  if (amount >= priceConfig.low.min && amount <= priceConfig.low.max) {
    validity = priceConfig.low.validity;
    price = priceConfig.low.amount;
  } else if (amount >= priceConfig.mid.min && amount <= priceConfig.mid.max) {
    validity = priceConfig.mid.validity;
    price = priceConfig.mid.amount;
  } else if (amount >= priceConfig.high.max) {
    validity = priceConfig.high.validity;
    price = priceConfig.high.amount;
  }
  return { validity, price };
};

export const toCamelCase = (word: string) => {
  if (typeof word !== "string") return word;

  return word.replace(/^([A-Z])|[\s-_]+(\w)/g, (__match, p1, p2) => {
    if (p2) return p2.toUpperCase();
    return p1.toLowerCase();
  });
};

export const objectToCamelCase = (obj: any) => {
  const newObj: { [key: string]: string | number } = {};
  for (let key in obj) {
    newObj[toCamelCase(key)] = obj[key];
  }
  return newObj;
};
