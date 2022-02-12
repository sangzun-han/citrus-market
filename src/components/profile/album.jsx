import React from "react";
import styles from "./album.module.css";
import PostAreaTop from "./postAreaTop";

const Album = ({ setAlbum }) => {
  return (
    <section className={styles.album}>
      <PostAreaTop setAlbum={setAlbum} />
      as
    </section>
  );
};
export default Album;
