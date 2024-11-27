import { useEffect, useState } from "react";
import GlobalContext from "./GlobalContext";
import { checkApiServerStatus } from "../services/serverStatus";

interface GlobalContextProviderProps {
  children: React.ReactNode;
}

const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
  const [serverStatus, setServerStatus] = useState<boolean>(false);
  const [currentCoin, setCurrentCoin] = useState<string>("bitcoin");
  const [days, setDays] = useState<number>(7);
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
      value={{ serverStatus, currentCoin, days, currency }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
