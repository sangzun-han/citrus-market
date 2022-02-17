import React from "react";
import FeedInfo from "./feedInfo";

const Feed = ({ token, posts }) => {
  return posts.map((post) => {
    return <FeedInfo key={post.id} token={token} post={post} />;
  });
};

export default Feed;
