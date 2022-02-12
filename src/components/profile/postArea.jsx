import React from "react";

import styles from "./postArea.module.css";
import PostAreaInfo from "./postAreaInfo";
import PostAreaTop from "./postAreaTop";

const PostArea = ({ posts, postModal, setPostModal, handleModal }) => {
  return (
    <main className={styles.home_post}>
      <PostAreaTop />
      {posts.map((post) => {
        return (
          <PostAreaInfo
            key={post.id}
            post={post}
            postModal={postModal}
            setPostModal={setPostModal}
            handleModal={handleModal}
          />
        );
      })}
    </main>
  );
};

export default PostArea;
