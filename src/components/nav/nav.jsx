import React from "react";
import styles from "./nav.module.css";
const Nav = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.icon_member}>
        <img src="/images/home/icon-home.png" alt="icon-home" />
        <img src="/images/home/icon-message-circle.png" alt="icon-chat" />
        <img src="/images/home/icon-edit.png" alt="icon-edit" />
        <img src="/images/home/icon-user.png" alt="icon-user" />
      </div>
    </footer>
  );
};

export default Nav;
