import React from "react";
import styles from "./commentInput.module.css";

const CommentInput = ({ onComment, profileImage, inputRef }) => {
  return (
    <nav className={styles.nav_container}>
      <div className={styles.profile_img}>
        <img src={profileImage} alt="" />
      </div>

      <div className={styles.comment_input}>
        <input ref={inputRef} type="text" placeholder="댓글 입력하기" />
      </div>

      <div className={styles.btn_wrap}>
        <button className={styles.btn_comment} onClick={onComment}>
          게시
        </button>
      </div>
    </nav>
  );
};

export default CommentInput;
