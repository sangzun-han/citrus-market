import React from "react";
import styles from "./moreImage.module.css";

const MoreImage = ({ uploadImage, deleteMoreImagePreview }) => {
  return (
    <div className={styles.image_slides}>
      <img className={styles.upload_img} src={uploadImage} alt="upload" />
      <img
        className={styles.btn_delete}
        src="/images/editor/icon-delete.png"
        alt="delete"
        onClick={deleteMoreImagePreview}
      />
    </div>
  );
};

export default MoreImage;
