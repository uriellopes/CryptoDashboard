import { useEffect, useState } from "react";
import GlobalContext from "./GlobalContext";
import { checkApiServerStatus } from "../services/serverStatus";
import { Days } from "../models/Days";
import { loadCurrencyLocalStorage, loadDaysLocalStorage } from "../utils/cache";
import { COIN_INITIAL_VALUE } from "../utils/constants";

interface GlobalContextProviderProps {
  children: React.ReactNode;
}

const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
  const [serverStatus, setServerStatus] = useState<boolean>(true);
  const [coin, setCoin] = useState<string>(COIN_INITIAL_VALUE);
  const [days, setDays] = useState<Days>(loadDaysLocalStorage());
  const [currency, setCurrency] = useState<string>(loadCurrencyLocalStorage());

  useEffect(() => {
    checkApiServerStatus()
      .then(() => setServerStatus(true))
      .catch(() => setServerStatus(false));

    return () => {
      setServerStatus(false);
    };
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        serverStatus,
        coin,
        setCoin,
        days,
        setDays,
        currency,
        setCurrency,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
