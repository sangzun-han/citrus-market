import React from "react";
import { Link } from "react-router-dom";
import { API_END_POINT } from "../../constants";
import styles from "./albumInfo.module.css";

const AlbumInfo = ({ post }) => {
  return (
    <Link to={`/post/${post.id}`}>
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
    </Link>
  );
};

export default AlbumInfo;
