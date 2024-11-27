import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useGlobalContextHook } from "../hooks/GlobalContextHook";
import MenuItem from "@mui/material/MenuItem";
import { Days } from "../models/Days";

export const SelectDays = () => {
  const { days, setDays } = useGlobalContextHook();

  const handleChange = (event: SelectChangeEvent) => {
    setDays(event.target.value as Days);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="select-range-days">Dias</InputLabel>
      <Select
        labelId="select-range-days"
        id="demo-simple-select"
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
  );
};
