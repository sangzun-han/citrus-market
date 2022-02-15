import React from "react";
import FeedInfo from "./feedInfo";

const Feed = ({ posts }) => {
  return posts.map((post) => {
    return <FeedInfo key={post.id} post={post} />;
  });
};

export default Feed;
