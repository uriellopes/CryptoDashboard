import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

export const Sidebar = () => {
  return (
    <Box
      bgcolor={"primary.main"}
      paddingBottom={1}
      display={"flex"}
      alignItems={"end"}
    >
      <Tooltip title="Dark Mode" arrow placement="left">
        <IconButton>
          <DarkModeOutlinedIcon htmlColor="white" />
        </IconButton>
      </Tooltip>
    </Box>
  );
};
