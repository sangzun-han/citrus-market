import React from "react";
import styles from "./nav.module.css";
const Nav = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.icon_member}>
        <button className={styles.btn}>
          <img src="/images/home/icon-home.png" alt="icon-home" />
          <span>홈</span>
        </button>
        <button className={styles.btn}>
          <img src="/images/home/icon-message-circle.png" alt="icon-chat" />
          <span>채팅</span>
        </button>
        <button className={styles.btn}>
          <img src="/images/home/icon-edit.png" alt="icon-edit" />
          <span>게시물 작성</span>
        </button>
        <button className={styles.btn}>
          <img src="/images/home/icon-user.png" alt="icon-user" />
          <span>프로필</span>
        </button>
      </div>
    </footer>
  );
};

export default Nav;
