import Link from "next/link";
import { StyledSidebar, StyledMeun, MeunItem, CloseBtn } from "./SidebarStyles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const DropDown = ({ isOpen, toggle }) => {
  // const ContactUs = (e) => {
  //   e.preventDefault();
  //   window.open("https://www.instagram.com/astn.0820_/");
  // };

  return (
    <>
      {isOpen ? (
        <StyledSidebar
          initial={{ y: -500 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          <StyledMeun>
            <Link href="/Coins" passHref>
              <MeunItem
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={toggle}
              >
                Coins
              </MeunItem>
            </Link>
            <Link href="/Strategy" passHref>
              <MeunItem
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={toggle}
              >
                Strategy
              </MeunItem>
            </Link>
          </StyledMeun>
          <CloseBtn
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={toggle}
          >
            <FontAwesomeIcon icon={faAngleUp} />
          </CloseBtn>
        </StyledSidebar>
      ) : (
        <StyledSidebar
          initial={{ y: 0 }}
          animate={{ y: -500 }}
          transition={{ duration: 1 }}
        ></StyledSidebar>
      )}
    </>
  );
};
export default DropDown;
