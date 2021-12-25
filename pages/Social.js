import Head from "next/head";
import Feed from "./socialpage/Feed";
import Post from "./socialpage/Post";

import { StyledSocial } from "./SocialStyles";

const Social = () => {
  return (
    <StyledSocial>
      <Head>
        <title>Social</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Post />
      <Feed />
    </StyledSocial>
  );
};

export default Social;
