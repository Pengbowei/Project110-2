import styled from "styled-components";
import { motion } from "framer-motion";

export const Nav = styled.nav`
  padding: 0.5rem 1.5rem;
  height: 4.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
`;
export const StyledLogo = styled(motion.div)`
  color: #f2f2f2;
  text-decoration: none;
  cursor: pointer;
`;
export const Logo = styled.div`
  color: #f2f2f2;
  text-decoration: none;
`;
export const StyledMenu = styled.div`
  display: flex;
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;
export const MeunItem = styled(motion.div)`
  color: #f2f2f2;
  padding: 0rem 1rem;
  font-size: 1.2rem;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
`;
export const StyledWallet = styled(motion.div)`
  width: 100%;
  height: 2rem;
  font-size: 1.2rem;
  padding: 0rem 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  cursor: pointer;
  background-image: linear-gradient(45deg, #c401ff 0%, #01f7ffe3 100%);
  border-style: none;
  border-radius: 0.2rem;
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.3);
`;
