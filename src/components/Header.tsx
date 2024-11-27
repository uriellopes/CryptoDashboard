import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

export const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography
          component={"h1"}
          fontWeight={"bold"}
          sx={{ textTransform: "uppercase" }}
        >
          {import.meta.env.VITE_APP_NAME}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
