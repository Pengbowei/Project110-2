import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledSidebar = styled(motion.div)`
  background-color: #24252b;
  width: 100%;
  padding: 2rem 0rem;
  z-index: 999;
  display: grid;
  justify-content: center;
  position: fixed;
  top: 0;
`;
export const StyledMeun = styled.div`
  margin-bottom: 2rem;
`;
export const MeunItem = styled(motion.div)`
  background-image: linear-gradient(45deg, #eec371 0%, #ffb11a 100%);
  color: #f2f2f2;
  margin: 1rem 0rem;
  padding: 1.5rem 3rem;
  font-size: 1.2rem;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  border-radius: 0.2rem;
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.3);
`;

export const CloseBtn = styled(motion.div)`
  color: #ffffff;
  width: 1rem;
  padding: 0rem 10rem;
  background-color: #8b8b8e;
  border-radius: 0.2rem;
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.3);
`;
