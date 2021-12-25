import { useState } from "react";
import { v4 } from "uuid";

import {
  StyledBlog,
  BlogVideo,
  BlogImage,
  BlogStyledText,
  Caption,
  BlogStyleIcon,
  MotionIcon,
  ClickedShareIcon,
  ShareIcon,
  ClickedHeartIcon,
  HeartIcon,
} from "./BlogStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faHeart,
  faShareSquare,
} from "@fortawesome/free-solid-svg-icons";

const Blog = ({ src, caption, fileType }) => {
  const [likeAmount, setLikeAmount] = useState(0);
  const [MintAmount, setMintAmount] = useState(0);
  const [isOnClick, setIsOnClick] = useState(false);
  const [isMint, setIsMint] = useState(false);

  function clickHeart() {
    setLikeAmount(likeAmount + 1);
    setIsOnClick(true);
  }
  function clickHeartAgain() {
    setLikeAmount(likeAmount - 1);
    setIsOnClick(false);
  }

  function Mint() {
    setMintAmount(MintAmount + 1);
    setIsMint(true);
  }
  function CancelMint() {
    setMintAmount(MintAmount - 1);
    setIsMint(false);
  }

  return (
    <StyledBlog key={v4()}>
      {fileType.startsWith("video") ? (
        <BlogVideo src={src} controls alt="BlogVideo" />
      ) : (
        <BlogImage src={src} alt="BlogImage" />
      )}
      <BlogStyledText>
        <Caption>{caption}</Caption>
      </BlogStyledText>
      <BlogStyleIcon>
        <MotionIcon whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          {isOnClick ? (
            <ClickedHeartIcon>
              <FontAwesomeIcon icon={faHeart} onClick={clickHeartAgain} />
              {likeAmount} Like
            </ClickedHeartIcon>
          ) : (
            <HeartIcon>
              <FontAwesomeIcon icon={faHeart} onClick={clickHeart} />
              {likeAmount} Like
            </HeartIcon>
          )}
        </MotionIcon>
        <MotionIcon whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          {isMint ? (
            <ClickedShareIcon>
              <FontAwesomeIcon icon={faCheck} onClick={CancelMint} />
              {MintAmount} Mint
            </ClickedShareIcon>
          ) : (
            <ShareIcon>
              <FontAwesomeIcon icon={faShareSquare} onClick={Mint} />
              {MintAmount} Mint
            </ShareIcon>
          )}
        </MotionIcon>
      </BlogStyleIcon>
    </StyledBlog>
  );
};
export default Blog;
