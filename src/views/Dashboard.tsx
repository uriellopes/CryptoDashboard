import Box from "@mui/material/Box";
import { useGlobalContextHook } from "../hooks/GlobalContextHook";
import Typography from "@mui/material/Typography";
import { SearchButton } from "../components/SearchButton";
import { Colors } from "../styles";
import { OfflineServerMessage } from "../components/OfflineServerMessage";

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
          <Typography
            component={"h1"}
            fontWeight={"bold"}
            fontSize={36}
            color={Colors.black.main}
          >
            Dashboard
          </Typography>
        </Box>
        <Box>
          <SearchButton />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
