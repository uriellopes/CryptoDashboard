export type CoinPrices = number[][];

export type CoinPricesRequest = {
  prices: CoinPrices;
};

export type CoinSearchRequest = {
  name: string;
  id: string;
};
