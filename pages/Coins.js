import { useState } from "react";
import Head from "next/head";
import CoinsList from "./Coinspage/CoinsList";
import SearchBar from "./Coinspage/SearchBar";

import { StyledCoins } from "./CoinsStyles";

const Coins = ({ filteredCoins }) => {
  // const [search,setSearch] = ('')

  // const allCoins = filteredCoins.filter(coin =>
  //   coin.name.toLowerCase().includes(search.toLowerCase())
  // )
  const textChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <StyledCoins>
      <Head>
        <title>Coins</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SearchBar onChange={textChange} />
      <CoinsList filteredCoins={filteredCoins} />
    </StyledCoins>
  );
};

export default Coins;

export const getServerSideProps = async () => {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
  );

  const filteredCoins = await res.json();

  return {
    props: {
      filteredCoins,
    },
  };
};
