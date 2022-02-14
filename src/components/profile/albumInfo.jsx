import React from "react";
import { API_END_POINT } from "../../constants";
import styles from "./albumInfo.module.css";

const AlbumInfo = ({ post }) => {
  return (
    <div className={styles.post_img}>
      <img
        className={styles.img}
        src={`${API_END_POINT}/${post.image.split(",")[0]}`}
        alt="post-img"
      />
      {post.image.split(",").length >= 2 ? (
        <img
          className={styles.icon_layer}
          src="/images/basic/iccon-img-layers.png"
          alt="layer"
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default AlbumInfo;
