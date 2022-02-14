import React from "react";
import styles from "./album.module.css";
import PostAreaTop from "./postAreaTop";

const Album = ({ setAlbum }) => {
  return (
    <>
      <PostAreaTop setAlbum={setAlbum} />
      <section className={styles.album}>
        <div className={styles.post_img}>
          <img
            className={styles.img}
            src="/assets/product-img-example.png"
            alt="post-img"
          />
          <img
            className={styles.icon_layer}
            src="/images/basic/iccon-img-layers.png"
            alt="layer"
          />
        </div>
      </section>
    </>
  );
};
export default Album;
