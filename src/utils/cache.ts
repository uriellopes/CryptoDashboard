import { CoinPrices } from "../models/Coin";
import { Days } from "../models/Days";
import { DAYS_INITIAL_VALUE } from "./constants";

const PRICES_LOCAL_STORAGE_KEY = "@cryptodashboard-prices";
const SELECTED_DAYS_KEY = "@cryptodashboard-days";

export const savePriceLocalStorage = (data: CoinPrices) => {
  localStorage.setItem(PRICES_LOCAL_STORAGE_KEY, JSON.stringify(data));
};

export const loadPricesData = () => {
  const localData = localStorage.getItem(PRICES_LOCAL_STORAGE_KEY);

  if (localData) {
    const parsedData: CoinPrices = JSON.parse(localData);
    return parsedData;
  }

  return null;
};

export const saveDaysLocalStorage = (day: Days) => {
  localStorage.setItem(SELECTED_DAYS_KEY, day);
};

export const loadDaysLocalStorage = () => {
  const localDay = localStorage.getItem(SELECTED_DAYS_KEY) as Days | null;

  if (localDay) {
    return localDay;
  } else {
    return DAYS_INITIAL_VALUE;
  }
};
