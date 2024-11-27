import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { CoinSearchRequest } from "../models/Coin";
import { getSearchQueries } from "../services/search";
import { useSnackbar } from "notistack";
import { useGlobalContextHook } from "../hooks/GlobalContextHook";

export const SearchField = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { setCoin } = useGlobalContextHook();

  const [searchOptions, setSearchOptions] = useState<CoinSearchRequest[]>([]);
  const [delay, setDelay] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = async (value: string) => {
    if (!value) {
      setSearchOptions([]);
      setIsLoading(false);
      return;
    }

    await getSearchQueries(value)
      .then((response) => {
        setSearchOptions(response.data.coins);
      })
      .catch(() => {
        enqueueSnackbar("Ocorreu um problema ao carregar as moedas!", {
          variant: "error",
        });
        setSearchOptions([]);
      })
      .finally(() => setIsLoading(false));
  };

  const handleInputChange = (value: string) => {
    setIsLoading(true);

    if (delay) {
      clearTimeout(delay);
    }

    setDelay(
      setTimeout(() => {
        fetchData(value);
      }, 1000)
    );
  };

  const handleAutocompleteChange = (value: CoinSearchRequest | null) => {
    if (value) {
      setCoin(value.id);
    }
  };

  return (
    <Box>
      <Autocomplete
        sx={{ width: 300 }}
        loading={isLoading}
        renderInput={(params) => <TextField {...params} />}
        options={searchOptions}
        onInputChange={(_, value) => handleInputChange(value)}
        getOptionLabel={(option) => option.name}
        onChange={(_, value) => handleAutocompleteChange(value)}
      />
    </Box>
  );
};
