import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

export const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography
          component={"h1"}
          sx={{ textTransform: "uppercase", fontWeight: "bold" }}
        >
          {import.meta.env.VITE_APP_NAME}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
