import { CoinPrices } from "../models/Coin";
import { Days } from "../models/Days";
import { Volume } from "../models/Volume";

interface GlobalContextProps {
  serverStatus: boolean;
  coin: string;
  setCoin: (coin: string) => void;
  days: Days;
  setDays: (day: Days) => void;
  currency: string;
  setCurrency: (currency: string) => void;
  showApiErrorMessagePriceVolume: boolean;
  isLoadingPriceVolume: boolean;
  prices: CoinPrices;
  volumes: Volume;
}

export default GlobalContextProps;
