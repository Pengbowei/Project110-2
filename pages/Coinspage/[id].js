import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  BarChart,
  Legend,
  Brush,
} from "recharts";

import {
  StyledCoinData,
  StyleCoinInfo,
  StyledChart,
  StyledCoinName,
  StyledLineChart,
  StyledBarChart,
} from "./ChartStyles";

const Coin = ({ coin, ohlcv }) => {
  return (
    <>
      <StyledCoinData>
        <StyleCoinInfo>
        <StyledCoinName>{coin.name}</StyledCoinName>
        <StyledCoinName>{coin.name}</StyledCoinName>
        </StyleCoinInfo>
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
                <Brush />
                <Tooltip />
                <Legend />
              </LineChart>
            </ResponsiveContainer>
          </StyledLineChart>
          
          <StyledBarChart>
            <ResponsiveContainer width="100%" height={300}>
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
  // const ohlcv = await select(data.symbol.toUpperCase() + '/USDT')

  return {
    props: {
      coin: data,
      // ohlcv: ohlcv,
    },
  };
}
