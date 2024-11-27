import GlobalContextProvider from "./context/GlobalContextProvider";
import Dashboard from "./views/Dashboard";

function App() {
  return (
    <GlobalContextProvider>
      <Dashboard />
    </GlobalContextProvider>
  );
}

export default App;
