import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useGlobalContextHook } from "../hooks/GlobalContextHook";
import MenuItem from "@mui/material/MenuItem";
import { Days } from "../models/Days";
import { saveDaysLocalStorage } from "../utils/cache";
import Box from "@mui/material/Box";

export const SelectDays = () => {
  const { days, setDays } = useGlobalContextHook();

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value as Days;
    setDays(value);
    saveDaysLocalStorage(value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="select-range-days">Dias</InputLabel>
        <Select
          labelId="select-range-days"
          id="select-days-input"
          value={days}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={14}>14</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
