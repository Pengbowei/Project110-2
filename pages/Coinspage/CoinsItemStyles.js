import styled from "styled-components";

export const StyledCoinsItem = styled.div`
  display: flex;
  justify-content: center;
  color: #ffffff;
`;
export const CoinRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  border-bottom: 1px solid #2e2e2e;
  width: 80rem;
  padding: 0rem 2rem;
  :hover {
    background: #171718;
  }
`;
export const CoinList = styled.div`
  display: flex;
  align-items: center;
`;

export const CoinName = styled.h1``;

export const CoinImg = styled.img`
  height: 1.75rem;
  width: 1.75rem;
  padding: 1rem;
`;
export const CoinSymbol = styled.div`
  padding: 1rem;
`;
export const CoinData = styled.div`
  display: flex;
  justify-content: evenly;
`;
export const CoinPrice = styled.div`
  display: flex;
  align-items: center;
  width: 20rem;
`;
export const CoinVolume = styled.div`
  display: flex;
  align-items: center;
  width: 20rem;
`;
export const CoinPercentRed = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  color: #f00606;
`;
export const CoinPercentGreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  color: #13c783;
`;
export const CoinMarketCap = styled.div`
  width: 20rem;
  text-align: right;
`;
