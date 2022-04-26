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
  justify-content: center;
  padding: 0rem 2rem;
  border-right: solid;
`;
export const StyledCoinName = styled.div`
  padding: 0.5rem;
  border: solid;
  border-color: #f3dc58;
  border-radius: 0.1rem;
  box-shadow: 0px 0px 3px 3px #eec371;
  text-align: center;
  color: #f3dc58;
  text-shadow: 0px 0px 5px #eec371;
`;

export const StyledLineChart = styled.div`
  width:80rem;
`;
export const StyledBarChart = styled.div`
width:80rem;
`;
