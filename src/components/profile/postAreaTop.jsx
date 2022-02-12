import React from "react";
import styles from "./postAreaTop.module.css";

const PostAreaTop = ({ setAlbum }) => {
  return (
    <header className={styles.header}>
      <button className={styles.post_list} onClick={() => setAlbum(false)}>
        <img src="/images/profile/icon-post-list-on.png" alt="list" />
      </button>
      <button className={styles.post_album} onClick={() => setAlbum(true)}>
        <img src="/images/profile/icon-post-album-off.png" alt="album" />
      </button>
    </header>
  );
};

export default PostAreaTop;
