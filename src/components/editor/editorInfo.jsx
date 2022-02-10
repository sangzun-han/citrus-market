import React from "react";
import styles from "./editorInfo.module.css";
const EditorInfo = ({
  image,
  textAreaRef,
  imageRef,
  handleResizeHeight,
  uploadImage,
  imagePreview,
  deleteImagePreview,
}) => {
  return (
    <main className={styles.container}>
      <section className={styles.content}>
        <div className={styles.info_wrap}>
          <div className={styles.profile_img}>
            <img src={image} alt="profile" />
          </div>
          <div className={styles.variable_height}>
            <textarea
              ref={textAreaRef}
              className={styles.input_area}
              placeholder="게시글 입력하기..."
              onChange={handleResizeHeight}
            />
          </div>
        </div>
        <div className={styles.upload_wrap}>
          {uploadImage.length === 1 ? (
            <div className={styles.image_slide}>
              <img
                className={styles.upload_img}
                src={uploadImage}
                alt="upload"
              />
              <img
                className={styles.btn_delete}
                src="/images/editor/icon-delete.png"
                alt="delete"
                onClick={deleteImagePreview}
              />
            </div>
          ) : (
            <div className={styles.image_slides}>
              <img src={uploadImage} alt="uploads" />
            </div>
          )}
        </div>
        <label className={styles.btn_upload_img} htmlFor="upload_img">
          <img src="/images/basic/upload-file.png" alt="upload_img" />
        </label>
        <input
          ref={imageRef}
          type="file"
          id="upload_img"
          accept="image/*"
          hidden
          multiple
          onChange={imagePreview}
        />
      </section>
    </main>
  );
};

export default EditorInfo;
