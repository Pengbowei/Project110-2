import { StyledSearchBar, StyledInput } from "./SearchBarStyles";

const SearchBar = () => {
  return (
    <StyledSearchBar>
      <StyledInput type="text" placeholder="Search" />
    </StyledSearchBar>
  );
};

export default SearchBar;
