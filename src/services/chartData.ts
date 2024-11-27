import { AxiosResponse } from "axios";
import { Days } from "../models/Days";
import { api } from "./api";
import { ChartDataResponse } from "../models/CharData";

export const getChartData = (
  coin: string,
  days: Days,
  currency: string
): Promise<AxiosResponse<ChartDataResponse, any>> => {
  return api.get(
    `coins/${coin}/market_chart?vs_currency=${currency}&days=${days}&precision=0`
  );
};
