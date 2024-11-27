import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useGlobalContextHook } from "../hooks/GlobalContextHook";
import { useEffect, useState } from "react";
import { getCurrencyList } from "../services/currency";
import { useSnackbar } from "notistack";
import {
  loadListCurrencyLocalStorage,
  saveCurrencyLocalStorage,
  saveListCurrencyLocalStorage,
} from "../utils/cache";

export const SelectCurrencyButton = () => {
  const { enqueueSnackbar } = useSnackbar();

  const { currency, setCurrency } = useGlobalContextHook();
  const [currencyList, setCurrencyList] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await getCurrencyList()
        .then((response) => {
          setCurrencyList(response.data);
          saveListCurrencyLocalStorage(response.data);
        })
        .catch(() => {
          enqueueSnackbar("Ocorreu um problema ao carregar as moedas!", {
            variant: "error",
          });

          setCurrencyList(loadListCurrencyLocalStorage());
        });
    };

    fetchData();
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    saveCurrencyLocalStorage(event.target.value);
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
          {currencyList.map((item, index) => (
            <MenuItem value={item} key={`menu-item-currency-list-${index}`}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
