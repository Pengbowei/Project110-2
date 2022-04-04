import Link from "next/link";
import {
  Nav,
  StyledLogo,
  Logo,
  StyledSidebar,
  StyledBars,
  StyledMenu,
  MeunItem,
} from "./NavbarStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <StyledLogo whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <Link href="/" passHref>
          <Logo>STRATEBOX</Logo>
        </Link>
      </StyledLogo>
      <StyledSidebar>
        <StyledBars whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <FontAwesomeIcon icon={faBars} onClick={toggle} />
        </StyledBars>
      </StyledSidebar>
      <StyledMenu>
        <Link href="/Coins" passHref>
          <MeunItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            Coins
          </MeunItem>
        </Link>
        <Link href="/Strategy" passHref>
          <MeunItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            Strategy
          </MeunItem>
        </Link>
      </StyledMenu>
    </Nav>
  );
};

export default Navbar;
