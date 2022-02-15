import React from "react";
import styles from "./postAreaTop.module.css";

const PostAreaTop = ({ album, setAlbum }) => {
  return (
    <header className={styles.header}>
      <button className={styles.post_list} onClick={() => setAlbum(false)}>
        {album ? (
          <img src="/images/profile/icon-post-list-off.png" alt="list" />
        ) : (
          <img src="/images/profile/icon-post-list-on.png" alt="list" />
        )}
      </button>
      <button className={styles.post_album} onClick={() => setAlbum(true)}>
        {album ? (
          <img src="/images/profile/icon-post-album-on.png" alt="album" />
        ) : (
          <img src="/images/profile/icon-post-album-off.png" alt="album" />
        )}
      </button>
    </header>
  );
};

export default PostAreaTop;
