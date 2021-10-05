import axios from "axios";
import React, { useEffect, useState } from "react";
import { subDays } from "data-fns";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianAxis,
} from "recharts";
function CreateChart() {
  const [data, setData] = useState();

  useEffect(() => {
    const data = axios
      .get(
        "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=114&interval=minutely"
      )
      .then(({ data: { prices } }) => {
        const newData = prices.map((arr) => {
          return {
            date: new Date(arr[0]).toISOString().substr(0, 10),
            value: arr[1],
          };
        });
        setData(newData);
      });
  }, []);
  return (
    <div>
      <ResponsiveContainer width="50%" height={300}>
        <AreaChart data={data}>
          <Area dataKey="value" />
          <XAxis dataKey="date" />
          <YAxis dataKey="value" />
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CreateChart;
