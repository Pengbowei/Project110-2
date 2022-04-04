import CoinsItem from "./CoinsItem";

export default function CoinsList({ filteredCoins }) {
  return (
    <>
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
