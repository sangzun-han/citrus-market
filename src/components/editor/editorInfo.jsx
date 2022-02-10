import React from "react";
import styles from "./editorInfo.module.css";
import Image from "./image";
import MoreImage from "./moreImage";
const EditorInfo = ({
  image,
  textAreaRef,
  imageRef,
  handleResizeHeight,
  uploadImage,
  imagePreview,
  deleteImagePreview,
  deleteMoreImagePreview,
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
            <Image
              uploadImage={uploadImage}
              deleteImagePreview={deleteImagePreview}
            />
          ) : (
            uploadImage.map((uploadImage, index) => {
              return (
                <MoreImage
                  key={index}
                  uploadImage={uploadImage}
                  deleteMoreImagePreview={deleteMoreImagePreview}
                />
              );
            })
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
