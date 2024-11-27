import { Days } from "../models/Days";

interface GlobalContextProps {
  serverStatus: boolean;
  coin: string;
  setCoin: (coin: string) => void;
  days: Days;
  setDays: (day: Days) => void;
  currency: string;
  setCurrency: (currency: string) => void;
}

export default GlobalContextProps;
