import { CoinPrices } from "./Coin";
import { MarketCaps } from "./MarketCaps";
import { Volume } from "./Volume";

export type ChartDataResponse = {
  prices: CoinPrices;
  market_caps: MarketCaps;
  total_volumes: Volume;
};
