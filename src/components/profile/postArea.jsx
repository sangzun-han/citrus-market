import React from "react";

import styles from "./postArea.module.css";
import PostAreaInfo from "./postAreaInfo";
import PostAreaTop from "./postAreaTop";

const PostArea = ({ posts }) => {
  return (
    <main className={styles.home_post}>
      <PostAreaTop />
      {posts.map((post) => {
        return <PostAreaInfo key={post.id} post={post} />;
      })}
    </main>
  );
};

export default PostArea;
