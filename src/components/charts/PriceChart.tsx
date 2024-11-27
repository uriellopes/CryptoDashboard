import { useEffect, useState } from "react";
import ApexCharts from "react-apexcharts";
import Box from "@mui/material/Box";
import { CircularProgress } from "@mui/material";
import {
  GET_COIN_PRICE_API_UPDATE_TIME,
  getCoinPrice,
} from "../../services/coins";
import { useGlobalContextHook } from "../../hooks/GlobalContextHook";
import { useSnackbar } from "notistack";
import { CoinPrices } from "../../models/Coin";
import { saveDataLocalStorage } from "../../utils/cache";
import { PRICES_LOCAL_STORAGE_KEY } from "../../utils/localStorageKeys";
import { loadPricesData } from "../../utils/coins";
import { ChartApiErrorMessage } from "../ChartApiErrorMessage";

const options: ApexCharts.ApexOptions = {
  chart: {
    type: "area",
    stacked: false,
    height: 350,
    zoom: {
      type: "x",
      enabled: true,
      autoScaleYaxis: true,
    },
  },
  title: {
    text: "Preço",
    align: "left",
  },
  xaxis: {
    type: "datetime",
  },
};

export const PriceChart = () => {
  const { currentCoin, days, currency } = useGlobalContextHook();
  const { enqueueSnackbar } = useSnackbar();

  const [prices, setPrices] = useState<CoinPrices>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [intervalId, setIntervalId] = useState<number | null>(null);
  const [showApiErrorMessage, setShwoApiErrorMessage] =
    useState<boolean>(false);

  const fetchData = () => {
    setIsLoading(true);
    getCoinPrice(currentCoin, days, currency)
      .then((response) => {
        const prices = response.data.prices;
        setPrices(prices);
        saveDataLocalStorage(PRICES_LOCAL_STORAGE_KEY, prices);

        if (showApiErrorMessage) {
          setShwoApiErrorMessage(false);
        }
      })
      .catch(() => {
        enqueueSnackbar("Ocorreu um problema ao carregar os preços!", {
          variant: "error",
        });

        const loadedPrices = loadPricesData();

        if (loadedPrices) {
          setPrices(loadedPrices);
        }

        setShwoApiErrorMessage(true);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (intervalId) {
      clearInterval(intervalId);
    }

    fetchData();

    const newIntervalId = setInterval(
      fetchData,
      GET_COIN_PRICE_API_UPDATE_TIME
    );
    setIntervalId(newIntervalId);

    return () => {
      if (newIntervalId) {
        clearInterval(newIntervalId);
      }
    };
  }, [currentCoin, days, currency]);

  if (isLoading)
    return (
      <Box>
        <CircularProgress />
      </Box>
    );

  return (
    <div>
      <ApexCharts
        type="line"
        height={350}
        series={[{ name: "Preço", data: prices }]}
        options={options}
      />
      {showApiErrorMessage && <ChartApiErrorMessage />}
    </div>
  );
};
