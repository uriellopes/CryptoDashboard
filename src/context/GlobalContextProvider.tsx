import { useEffect, useState } from "react";
import GlobalContext from "./GlobalContext";
import { checkApiServerStatus } from "../services/serverStatus";
import { Days } from "../models/Days";
import {
  loadCurrencyLocalStorage,
  loadDaysLocalStorage,
  savePriceLocalStorage,
  saveVolumesLocalStorage,
} from "../utils/cache";
import { COIN_INITIAL_VALUE } from "../utils/constants";
import { getChartData } from "../services/chartData";
import { useSnackbar } from "notistack";
import { CoinPrices } from "../models/Coin";
import { Volume } from "../models/Volume";

interface GlobalContextProviderProps {
  children: React.ReactNode;
}

const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
  const { enqueueSnackbar } = useSnackbar();

  const [serverStatus, setServerStatus] = useState<boolean>(true);
  const [coin, setCoin] = useState<string>(COIN_INITIAL_VALUE);
  const [days, setDays] = useState<Days>(loadDaysLocalStorage());
  const [currency, setCurrency] = useState<string>(loadCurrencyLocalStorage());
  const [isLoadingPriceVolume, setIsLoadingPriceVolume] =
    useState<boolean>(false);
  const [showApiErrorMessagePriceVolume, setShwoApiErrorMessagePriceVolume] =
    useState<boolean>(false);
  const [prices, setPrices] = useState<CoinPrices>([]);
  const [volumes, setVolumes] = useState<Volume>([]);

  useEffect(() => {
    checkApiServerStatus()
      .then(() => setServerStatus(true))
      .catch(() => setServerStatus(false));

    return () => {
      setServerStatus(false);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoadingPriceVolume(true);
      await getChartData(coin, days, currency)
        .then((response) => {
          const prices = response.data.prices;
          const volumes = response.data.total_volumes;

          setPrices(prices);
          savePriceLocalStorage(prices);

          setVolumes(volumes);
          saveVolumesLocalStorage(volumes);

          if (showApiErrorMessagePriceVolume) {
            setShwoApiErrorMessagePriceVolume(false);
          }
        })
        .catch(() => {
          enqueueSnackbar("Ocorreu um problema ao carregar os dados!", {
            variant: "error",
          });

          setShwoApiErrorMessagePriceVolume(true);
        })
        .finally(() => setIsLoadingPriceVolume(false));
    };

    fetchData();
  }, [coin, days, currency]);

  return (
    <GlobalContext.Provider
      value={{
        serverStatus,
        coin,
        setCoin,
        days,
        setDays,
        currency,
        setCurrency,
        isLoadingPriceVolume,
        showApiErrorMessagePriceVolume,
        prices,
        volumes,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
