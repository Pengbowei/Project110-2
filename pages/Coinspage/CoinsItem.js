import Link from "next/link";
import {
  StyledCoinsItem,
  CoinRow,
  CoinList,
  CoinName,
  CoinImg,
  CoinSymbol,
  CoinData,
  CoinPrice,
  CoinVolume,
  CoinPercentRed,
  CoinPercentGreen,
  CoinMarketCap,
} from "./CoinsItemStyles";

const CoinsItem = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
  id,
}) => {
  return (
    <Link href="/Coinspage/[id]" as={`/Coinspage/${id}`}>
      <a>
        <StyledCoinsItem>
          <CoinRow>
            <CoinList>
              <CoinImg src={image} alt={name} />
              <CoinSymbol>{symbol}</CoinSymbol>
            </CoinList>
            <CoinData>
              <CoinPrice>${price}</CoinPrice>
              <CoinVolume>{volume.toLocaleString()}</CoinVolume>

              {priceChange < 0 ? (
                <CoinPercentRed>{priceChange.toFixed(2)}%</CoinPercentRed>
              ) : (
                <CoinPercentGreen>{priceChange.toFixed(2)}%</CoinPercentGreen>
              )}

              <CoinMarketCap>${marketcap.toLocaleString()}</CoinMarketCap>
            </CoinData>
          </CoinRow>
        </StyledCoinsItem>
      </a>
    </Link>
  );
};
export default CoinsItem;
