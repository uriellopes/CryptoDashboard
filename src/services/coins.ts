import { AxiosResponse } from "axios";
import { api } from "./api";
import { CoinPrices } from "../models/Coin";

export const GET_COIN_PRICE_API_UPDATE_TIME = 300000;

export const getCoinPrice = (
  coin: string,
  days: number,
  currency: string
): Promise<AxiosResponse<{ prices: CoinPrices }, any>> => {
  return api.get(
    `coins/${coin}/market_chart?vs_currency=${currency}&days=${days}&precision=0`
  );
};
