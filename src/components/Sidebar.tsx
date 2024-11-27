import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import HomeIcon from "@mui/icons-material/Home";
import { useState } from "react";
import { Typography } from "@mui/material";

export const Sidebar = () => {
  const [expand, setExpand] = useState<boolean>(false);

  const handleClickExpand = () => {
    setExpand(true);
  };

  const handleClickRetract = () => {
    setExpand(false);
  };

  return (
    <Box
      bgcolor={"primary.main"}
      paddingBottom={1}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      padding={"10px 20px"}
    >
      <Box display={"flex"} alignItems={"center"}>
        <Tooltip title="Dashboard" arrow placement="left">
          <IconButton>
            <HomeIcon htmlColor="white" />
          </IconButton>
        </Tooltip>
        {expand && (
          <Typography sx={{ color: "white", cursor: "pointer" }}>
            Dashboard
          </Typography>
        )}
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        {expand ? (
          <Tooltip title="Retrair" arrow placement="left">
            <IconButton onClick={handleClickRetract}>
              <KeyboardDoubleArrowLeftIcon htmlColor="white" />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Expandir" arrow placement="left">
            <IconButton onClick={handleClickExpand}>
              <KeyboardDoubleArrowRightIcon htmlColor="white" />
            </IconButton>
          </Tooltip>
        )}
      </Box>
    </Box>
  );
};
