import { useEffect, useState } from "react";
import GlobalContext from "./GlobalContext";
import { checkApiServerStatus } from "../services/serverStatus";
import { Days } from "../models/Days";

interface GlobalContextProviderProps {
  children: React.ReactNode;
}

const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
  const [serverStatus, setServerStatus] = useState<boolean>(true);
  const [currentCoin, setCurrentCoin] = useState<string>("bitcoin");
  const [days, setDays] = useState<Days>("7");
  const [currency, setCurrency] = useState<string>("brl");

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
      value={{ serverStatus, currentCoin, days, currency, setDays }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
