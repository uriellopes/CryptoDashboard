import Paper from "@mui/material/Paper";
import { Colors } from "../styles";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import { Typography } from "@mui/material";

export const OfflineServerMessage = () => {
  return (
    <Paper
      sx={{
        backgroundColor: Colors.red.main,
        color: Colors.white.main,
        padding: 2,
        gap: "10px",
        display: "flex",
      }}
    >
      <WarningAmberRoundedIcon />
      <Typography component={"span"}>
        O servidor está offline. Os dados mostrados foram carregados em um
        acesso anterior e podem estar desatualizados!
      </Typography>
    </Paper>
  );
};
