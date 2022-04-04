import styled from "styled-components";
import { motion } from "framer-motion";

export const Nav = styled.nav`
  padding: 0.5rem 0.8rem;
  height: 4.5rem;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
`;
export const StyledLogo = styled(motion.div)`
  color: #f2f2f2;
  text-decoration: none;
  cursor: pointer;
  padding: 0rem 1rem;
`;
export const Logo = styled.div`
  color: #f2f2f2;
  text-decoration: none;
`;
export const StyledMenu = styled.div`
  display: flex;
  padding: 0rem 1rem;
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;
export const StyledSidebar = styled.div`
  color: #f2f2f2;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  @media only screen and (min-width: 700px) {
    display: none;
  }
`;

export const StyledBars = styled(motion.div)`
  margin: 1rem;
  padding-top: 0.2rem;
  width: 1.5rem;
`;
export const MeunItem = styled(motion.div)`
  color: #f2f2f2;
  padding: 0rem 1rem;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
`;
