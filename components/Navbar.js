import Link from "next/link";
import {
  Nav,
  StyledLogo,
  Logo,
  StyledMenu,
  MeunItem,
  StyledWallet,
} from "./NavbarStyles";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faWallet } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <Nav>
      <StyledLogo whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <Link href="/" passHref>
          <Logo>Instachain</Logo>
        </Link>
      </StyledLogo>
      <StyledMenu>
        <Link href="/Social" passHref>
          <MeunItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            social
          </MeunItem>
        </Link>
        <Link href="/NFT" passHref>
          <MeunItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            NFT
          </MeunItem>
        </Link>
      </StyledMenu>
      <div>
        <Link href="/Wallet" passHref>
          <StyledWallet whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            wallet
          </StyledWallet>
        </Link>
      </div>
    </Nav>
  );
};

export default Navbar;
