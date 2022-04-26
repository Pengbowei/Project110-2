import CoinsItem from "./CoinsItem";
import { 
  StyledTital,
  Coin,
  CoinData,
  Price,
  Volume,
  Change,
  Mkt

} from "./CoinsListStyles"

export default function CoinsList({ filteredCoins }) {
  return (
    <>
    <StyledTital>
     
      <Coin>Coin</Coin>
      <CoinData>
      <Price>Price</Price>
      <Volume>24h Volume</Volume>
      <Change>24h</Change>
      <Mkt>Mkt Cap</Mkt>
      </CoinData>
      </StyledTital>
      {filteredCoins.map((coin) => {
        return (
          <CoinsItem
            key={coin.id}
            image={coin.image}
            symbol={coin.symbol}
            id={coin.id}
            name={coin.name}
            price={coin.current_price}
            marketcap={coin.market_cap}
            volume={coin.total_volume}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </>
  );
}
