import { Layout } from "./components/Layout";
import GlobalContextProvider from "./context/GlobalContextProvider";
import Dashboard from "./views/Dashboard";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <SnackbarProvider
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <GlobalContextProvider>
        <Layout>
          <Dashboard />
        </Layout>
      </GlobalContextProvider>
    </SnackbarProvider>
  );
}

export default App;
