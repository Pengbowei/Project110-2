import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  BarChart,
  ComposedChart,
  CartesianGrid,
  Legend,
  Area,
  ScatterChart,
  Scatter,
} from "recharts";

import {
  StyledCoinData,
  StyledChart,
  StyledCoinName,
  StyledLineChart,
  StyledComposedChart,
  StyledScatterChart,
  StyledBarChart,
} from "./ChartStyles";

const Coin = ({ coin, ohlcv }) => {
  return (
    <>
      <StyledCoinData>
        <StyledCoinName>{coin.name}</StyledCoinName>
        <StyledChart>
          <StyledLineChart>
            <ResponsiveContainer width="100%" height={500}>
              <LineChart
                data={ohlcv}
                margin={{
                  top: 5,
                  right: 30,
                  left: 30,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="start_time" />
                <YAxis />
                <Line
                  dataKey="close"
                  type="monotone"
                  fill="false"
                  stroke="#eec371"
                  strokeWidth={2}
                />
                <Tooltip />
                <Legend />
              </LineChart>
            </ResponsiveContainer>
          </StyledLineChart>
          <StyledComposedChart>
            <ResponsiveContainer width="100%" height={500}>
              <ComposedChart
                data={ohlcv}
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <XAxis dataKey="start_time" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="low"
                  fill="#eec371"
                  stroke="#eec371"
                />
                <Bar dataKey="high" barSize={20} fill="#4b4b4d" />
                <Line
                  type="monotone"
                  dataKey="open"
                  fill="#ffc600"
                  stroke="#ffc600"
                />
              </ComposedChart>
            </ResponsiveContainer>
          </StyledComposedChart>
          <StyledBarChart>
            <ResponsiveContainer width="100%" height={500}>
              <BarChart
                data={ohlcv}
                barSize={20}
                margin={{
                  top: 5,
                  right: 30,
                  left: 30,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="start_time" />
                <YAxis />
                <Bar
                  dataKey="volumn"
                  stroke="#eec371"
                  fill="#eec371"
                  radius={[1, 1, 0, 0]}
                />
                <Tooltip cursor={{ fill: "transparent" }} />
                <Legend />
              </BarChart>
            </ResponsiveContainer>
          </StyledBarChart>
          <StyledScatterChart>
            <ResponsiveContainer width="100%" height={500}>
              <ScatterChart
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <CartesianGrid stroke="#6b6b6b98" />
                <XAxis type="number" dataKey="high" />
                <YAxis type="number" dataKey="low" />
                <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                <Scatter data={ohlcv} fill="#eec371" />
              </ScatterChart>
            </ResponsiveContainer>
          </StyledScatterChart>
        </StyledChart>
      </StyledCoinData>
    </>
  );
};
export default Coin;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const select = require('../../lib/select')

  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
  const data = await res.json();
  
  //send symbol to database. like:BTCUSDT
  const ohlcv = await select(data.symbol.toUpperCase() + '/USDT')

  return {
    props: {
      coin: data,
      ohlcv: ohlcv,
    },
  };
}
