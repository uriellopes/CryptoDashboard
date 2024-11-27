import { CoinPrices } from "../models/Coin";
import { LocalStorageData } from "../models/LocalStorageData";
import { PRICES_LOCAL_STORAGE_KEY } from "./localStorageKeys";

const EXPIRED_PRICES_DATA = 300000;

export const loadPricesData = () => {
  const localData = localStorage.getItem(PRICES_LOCAL_STORAGE_KEY);

  if (localData) {
    const parsedData: LocalStorageData<CoinPrices> = JSON.parse(localData);
    if (parsedData.timestamp + EXPIRED_PRICES_DATA < Date.now()) {
      return null;
    }

    return parsedData.value;
  }

  return null;
};
