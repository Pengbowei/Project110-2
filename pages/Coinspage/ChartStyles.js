import styled from "styled-components";

export const StyledCoinData = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
padding: 3rem calc((100vw - 1700px) / 2);


`;
export const StyledChart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const StyleCoinInfo = styled.div`
  display: flex;
  flex-direction: column;
  
  padding: 0rem 2rem;
  border-right: solid;
`;
export const StyledCoinImg = styled.img`
  padding:2rem;
`
export const StyledCoinIntro = styled.div`
color :#999999;
`
export const StyledCoinName = styled.h1`
  padding: 1rem;
  text-align: center;
  color: #f2f2f2;
`;

export const StyledCoinPrice = styled.p`
  text-align: left;
  color: #f2f2f2;
  font-size : 1.5rem;
`

export const StyledLineChart = styled.div`
  width:80rem;
`;
export const StyledBarChart = styled.div`
width:80rem;
`;
