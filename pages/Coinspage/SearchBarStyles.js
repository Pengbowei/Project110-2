import styled from "styled-components";

export const StyledSearchBar = styled.div`
  margin: 4rem;
  display: flex;
  align-items: center;
  width: 20rem;
  height: 2rem;
`;
export const StyledInput = styled.input`
  background-image: linear-gradient(45deg, #eec371 0%, #ffb11a 100%);
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.3);
  border: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  outline: none;
  height: 100%;
  width: 100%;
  color: #24252b;
  ::placeholder {
    color: #61636d;
  }
`;
