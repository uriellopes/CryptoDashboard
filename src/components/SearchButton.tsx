import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Colors } from "../styles";

export const SearchButton = () => {
  return (
    <Paper sx={{ cursor: "pointer" }}>
      <Box
        display={"flex"}
        gap="30px"
        alignItems={"center"}
        padding={1}
        bgcolor={Colors.gray.bg}
      >
        <Typography color={Colors.gray.text}>Buscar...</Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};
