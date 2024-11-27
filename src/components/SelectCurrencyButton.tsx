import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useGlobalContextHook } from "../hooks/GlobalContextHook";
import { useEffect, useState } from "react";
import { getCurrencyList } from "../services/currency";

export const SelectCurrencyButton = () => {
  const { currency, setCurrency } = useGlobalContextHook();
  const [currencyList, setCurrencyList] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await getCurrencyList().then((response) =>
        setCurrencyList(response.data)
      );
    };

    fetchData();
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    setCurrency(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="select-currency-label">Moeda</InputLabel>
        <Select
          labelId="select-currency-label"
          id="select-currency-input"
          value={currency}
          label="Moeda"
          onChange={handleChange}
        >
          {currencyList.map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
