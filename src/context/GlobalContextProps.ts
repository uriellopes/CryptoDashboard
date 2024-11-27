import { Days } from "../models/Days";

interface GlobalContextProps {
  serverStatus: boolean;
  currentCoin: string;
  days: Days;
  currency: string;
  setDays: (day: Days) => void;
}

export default GlobalContextProps;
