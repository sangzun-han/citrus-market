import React from "react";

import styles from "./postArea.module.css";
import PostAreaInfo from "./postAreaInfo";
import PostAreaTop from "./postAreaTop";

const PostArea = ({
  posts,
  postModal,
  setPostModal,
  handleModal,
  album,
  setAlbum,
  token,
}) => {
  return (
    <main className={styles.home_post}>
      <PostAreaTop album={album} setAlbum={setAlbum} />
      {posts.map((post) => {
        return (
          <PostAreaInfo
            key={post.id}
            post={post}
            postModal={postModal}
            setPostModal={setPostModal}
            handleModal={handleModal}
            token={token}
          />
        );
      })}
    </main>
  );
};

export default PostArea;
