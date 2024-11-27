import { Days } from "../models/Days";

interface GlobalContextProps {
  serverStatus: boolean;
  currentCoin: string;
  days: Days;
  setDays: (day: Days) => void;
  currency: string;
  setCurrency: (currency: string) => void;
}

export default GlobalContextProps;
