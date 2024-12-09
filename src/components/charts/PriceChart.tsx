import ApexCharts from "react-apexcharts";
import Box from "@mui/material/Box";
import { CircularProgress } from "@mui/material";
import { useGlobalContextHook } from "../../hooks/GlobalContextHook";
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
  const { prices, isLoadingPriceVolume, showApiErrorMessagePriceVolume } =
    useGlobalContextHook();

  if (isLoadingPriceVolume)
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
      {showApiErrorMessagePriceVolume && <ChartApiErrorMessage />}
    </div>
  );
};
