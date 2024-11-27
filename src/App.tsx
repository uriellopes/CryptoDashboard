import { Layout } from "./components/Layout";
import GlobalContextProvider from "./context/GlobalContextProvider";
import Dashboard from "./views/Dashboard";

function App() {
  return (
    <GlobalContextProvider>
      <Layout>
        <Dashboard />
      </Layout>
    </GlobalContextProvider>
  );
}

export default App;
