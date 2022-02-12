import React from "react";
import styles from "./postModal.module.css";

const PostModal = ({ postDeleteModal }) => {
  return (
    <main className={styles.modal}>
      <div className={styles.line}>
        <div></div>
      </div>
      <button className={styles.btn_modal} onClick={postDeleteModal}>
        <p className={styles.delete}>삭제</p>
      </button>
      <button className={styles.btn_modal}>
        <p className={styles.update}>수정</p>
      </button>
    </main>
  );
};

export default PostModal;
