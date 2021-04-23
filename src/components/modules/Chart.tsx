import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";

import { fetchDailyData } from "../../api";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

interface Props {
  data: any;
  country: string;
}

const Chart: React.FC<Props> = ({ data: { confirmed, recovered, deaths }, country }) => {
  const { t } = useTranslation<string>();
  const [dailyData, setDailyData] = useState<any>({});

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchDailyData();

      setDailyData(initialDailyData);
    };

    fetchMyAPI();
  }, []);

  const barChart = confirmed ? (
    <Bar
      type="bar"
      data={{
        labels: [t("confirmed"), t("recovered"), t("death")],
        datasets: [
          {
            label: t("confirmed"),
            backgroundColor: ["#315A83", "#5FCE62", "#8f8f8f"],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: true },
        title: { display: true, text: `Současná situace v ${country}` },
      }}
    />
  ) : null;

  const lineChart = dailyData[0] ? (
    <Line
      type="line"
      data={{
        labels: dailyData.map(({ date }: any) => new Date(date).toLocaleDateString()),
        datasets: [
          {
            data: dailyData.map((data: any) => data.confirmed),
            label: t("confirmed"),
            borderColor: "#315A83",
            backgroundColor: "#315A83",
            fill: false,
          },
          {
            data: dailyData.map((data: any) => data.recovered),
            label: t("recovered"),
            borderColor: "#5FCE62",
            backgroundColor: "#5FCE62",
            fill: false,
          },
          {
            data: dailyData.map((data: any) => data.deaths),
            label: t("death"),
            borderColor: "#8f8f8f",
            backgroundColor: "#8f8f8f",
            fill: false,
          },
        ],
      }}
    />
  ) : null;

  return <>{country ? barChart : lineChart}</>;
};

export default Chart;
