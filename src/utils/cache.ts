import { CoinPrices } from "../models/Coin";
import { Days } from "../models/Days";
import { Volume } from "../models/Volume";
import { CURRENCY_INITIAL_VALUE, DAYS_INITIAL_VALUE } from "./constants";

const PRICES_LOCAL_STORAGE_KEY = "@cryptodashboard-prices";
const SELECTED_DAYS_KEY = "@cryptodashboard-days";
const SELECTED_CURRENCY_KEY = "@cryptodashboard-currency";
const LIST_CURRENCY_KEY = "@cryptodashboard-list-currency";
const VOLUMES_KEY = "@cryptodashboard-volumes";

export const savePriceLocalStorage = (data: CoinPrices) => {
  localStorage.setItem(PRICES_LOCAL_STORAGE_KEY, JSON.stringify(data));
};

export const saveDaysLocalStorage = (data: Days) => {
  localStorage.setItem(SELECTED_DAYS_KEY, data);
};

export const loadDaysLocalStorage = () => {
  const localData = localStorage.getItem(SELECTED_DAYS_KEY) as Days | null;

  if (localData) {
    return localData;
  } else {
    return DAYS_INITIAL_VALUE;
  }
};

export const saveCurrencyLocalStorage = (data: string) => {
  localStorage.setItem(SELECTED_CURRENCY_KEY, data);
};

export const loadCurrencyLocalStorage = () => {
  const localData = localStorage.getItem(SELECTED_CURRENCY_KEY);

  if (localData) {
    return localData;
  } else {
    return CURRENCY_INITIAL_VALUE;
  }
};

export const saveListCurrencyLocalStorage = (data: string[]) => {
  localStorage.setItem(LIST_CURRENCY_KEY, JSON.stringify(data));
};

export const loadListCurrencyLocalStorage = () => {
  const localData = localStorage.getItem(LIST_CURRENCY_KEY);

  if (localData) {
    const parsedData: string[] = JSON.parse(localData);
    return parsedData;
  } else {
    return ["brl"];
  }
};

export const saveVolumesLocalStorage = (data: Volume) => {
  localStorage.setItem(VOLUMES_KEY, JSON.stringify(data));
};
