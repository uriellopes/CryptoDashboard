import { useEffect, useState } from "react";
import GlobalContext from "./GlobalContext";
import { checkApiServerStatus } from "../services/serverStatus";
import { Days } from "../models/Days";
import { loadDaysLocalStorage } from "../utils/cache";
import { COIN_INITIAL_VALUE, CURRENCY_INITIAL_VALUE } from "../utils/constants";

interface GlobalContextProviderProps {
  children: React.ReactNode;
}

const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
  const [serverStatus, setServerStatus] = useState<boolean>(true);
  const [currentCoin, setCurrentCoin] = useState<string>(COIN_INITIAL_VALUE);
  const [days, setDays] = useState<Days>(loadDaysLocalStorage());
  const [currency, setCurrency] = useState<string>(CURRENCY_INITIAL_VALUE);

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
        currentCoin,
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
