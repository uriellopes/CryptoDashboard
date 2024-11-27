import { useEffect, useState } from "react";
import GlobalContext from "./GlobalContext";
import { checkApiServerStatus } from "../services/serverStatus";

interface GlobalContextProviderProps {
  children: React.ReactNode;
}

const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
  const [serverStatus, setServerStatus] = useState<boolean>(false);

  useEffect(() => {
    checkApiServerStatus()
      .then(() => setServerStatus(true))
      .catch(() => setServerStatus(false));

    return () => {
      setServerStatus(false);
    };
  }, []);

  return (
    <GlobalContext.Provider value={{ serverStatus }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
