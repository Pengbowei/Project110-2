import Blog from './Blog'
import {StyledFeed} from './FeedStyles'
// import { getPosts } from "../../api";

 let posts = [  {src:"https://ipfs.io/ipfs/QmRFZbxe2jiqGYrL1dXGoT2b9gd4csybxSUAKY6mnSTCDc",
                caption:"psytrance pig 🐷  ",
                fileType:"image/png"},
                {src:"https://ipfs.io/ipfs/QmPmpRDD9iaChuFwnbbABLHzpYpA7nASfMJWaJD2t7wtfB",
                caption:"Redmonkey  ",
                fileType:"image/png"},
                {src:"https://ipfs.io/ipfs/QmYB9496Yc7tNFVshi3Bcf1MN1tWcNSVw6gYpCeL71u4YV",
                caption:"stay  ",
                fileType:"video/mp4"},
               
];


// const getList = async () => {
//   posts = await getPosts();
// };
// getList();

const Feed = () => {
  return posts.map((post) => {
    const { src, caption, fileType } = post;
    return (
      <StyledFeed
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Blog src={src} caption={caption} fileType={fileType} />
      </StyledFeed>
    );
  });
};

export default Feed;