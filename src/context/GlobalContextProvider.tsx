import GlobalContext from "./GlobalContext";

interface GlobalContextProviderProps {
  children: React.ReactNode;
}

const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
  const title = "Dashboard";

  return (
    <GlobalContext.Provider value={{ title }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
