import ApexCharts from "react-apexcharts";
import { ChartApiErrorMessage } from "../ChartApiErrorMessage";
import { useGlobalContextHook } from "../../hooks/GlobalContextHook";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const options: ApexCharts.ApexOptions = {
  chart: {
    type: "line",
    stacked: false,
    height: 350,
  },
  stroke: {
    curve: "stepline",
  },
  title: {
    text: "Volume",
    align: "left",
  },
  xaxis: {
    type: "datetime",
  },
  yaxis: {
    labels: {
      formatter: (value: number) => `$${value.toFixed(0)}`,
    },
  },
};

export const VolumeChart = () => {
  const { volumes, isLoadingPriceVolume, showApiErrorMessagePriceVolume } =
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
        series={[{ name: "Volume", data: volumes }]}
        options={options}
      />
      {showApiErrorMessagePriceVolume && <ChartApiErrorMessage />}
    </div>
  );
};
