import { AxiosResponse } from "axios";
import { api } from "./api";

export const getCurrencyList = (): Promise<AxiosResponse<string[], any>> => {
  return api.get("simple/supported_vs_currencies");
};
