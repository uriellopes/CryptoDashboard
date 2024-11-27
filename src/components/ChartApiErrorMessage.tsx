import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Colors } from "../styles";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";

export const ChartApiErrorMessage = () => {
  return (
    <Box display={"flex"} alignItems={"center"} gap={"10px"}>
      <WarningAmberRoundedIcon htmlColor={Colors.red.main} />
      <Typography component={"span"} color={Colors.red.main}>
        Os dados apresentados podem estar desatualizados
      </Typography>
    </Box>
  );
};
