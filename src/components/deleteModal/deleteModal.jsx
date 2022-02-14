import React from "react";
import styles from "./deleteModal.module.css";

const DeleteModal = ({ postDelete, setDeleteModal }) => {
  return (
    <section className={styles.logout_section}>
      <div className={styles.logout_message}>
        <h1>게시글을 삭제할까요?</h1>
      </div>
      <div className={styles.btn_member}>
        <button
          className={styles.btn_cancle}
          onClick={() => setDeleteModal(false)}
        >
          <span>취소</span>
        </button>
        <button className={styles.btn_delete} onClick={postDelete}>
          <span>삭제</span>
        </button>
      </div>
    </section>
  );
};

export default DeleteModal;
