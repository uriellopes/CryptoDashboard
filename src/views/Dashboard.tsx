import Box from "@mui/material/Box";
import { useGlobalContextHook } from "../hooks/GlobalContextHook";
import { SearchButton } from "../components/SearchButton";
import { OfflineServerMessage } from "../components/OfflineServerMessage";
import { PageTitle } from "../components/PageTitle";
import Grid from "@mui/material/Grid2";

const Dashboard = () => {
  const { serverStatus } = useGlobalContextHook();

  return (
    <Box>
      {!serverStatus && (
        <Box marginBottom={1}>
          <OfflineServerMessage />
        </Box>
      )}
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box>
          <PageTitle title="Dashboard" />
        </Box>
        <Box>
          <SearchButton />
        </Box>
      </Box>
      <Grid container>
        <Grid size={6}>Preço</Grid>
        <Grid size={6}>Volume</Grid>
        <Grid size={6}>Variação percentual</Grid>
        <Grid size={6}>Histórico de preço</Grid>
        <Grid size={6}>Comparação Marketing Cap</Grid>
        <Grid size={6}>Maior valorização</Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
