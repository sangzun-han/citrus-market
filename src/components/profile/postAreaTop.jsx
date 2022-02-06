import React from "react";
import styles from "./postAreaTop.module.css";

const PostAreaTop = () => {
  return (
    <header className={styles.header}>
      <button className={styles.post_list}>
        <img src="/images/profile/icon-post-list-on.png" alt="list" />
      </button>
      <button className={styles.post_album}>
        <img src="/images/profile/icon-post-album-off.png" alt="album" />
      </button>
    </header>
  );
};

export default PostAreaTop;
