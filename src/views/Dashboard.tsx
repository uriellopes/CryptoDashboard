import Box from "@mui/material/Box";
import { useGlobalContextHook } from "../hooks/GlobalContextHook";
import Typography from "@mui/material/Typography";
import { SearchButton } from "../components/SearchButton";
import { Colors } from "../styles";

const Dashboard = () => {
  const { title } = useGlobalContextHook();

  return (
    <Box>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box>
          <Typography
            component={"h1"}
            fontWeight={"bold"}
            fontSize={36}
            color={Colors.black.main}
          >
            {title}
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
