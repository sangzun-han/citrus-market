import React from "react";
import styles from "./image.module.css";

const Image = ({ uploadImage, deleteImagePreview }) => {
  return (
    <div className={styles.image_slide}>
      <img className={styles.upload_img} src={uploadImage} alt="upload" />
      <img
        className={styles.btn_delete}
        src="/images/editor/icon-delete.png"
        alt="delete"
        onClick={deleteImagePreview}
      />
    </div>
  );
};

export default Image;
