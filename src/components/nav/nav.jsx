import React from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styles from "./nav.module.css";

const Nav = () => {
  const path = useLocation().pathname;
  const history = useHistory();
  return (
    <footer className={styles.footer}>
      <div className={styles.icon_member}>
        <button className={styles.btn} onClick={() => history.push("/home")}>
          <img
            src={`/images/home/icon-home${
              path === "/home" ? "-fill" : path === "/search" ? "-fill" : ""
            }.png`}
            alt="icon-home"
          />
          <span>홈</span>
        </button>
        <button
          className={styles.btn}
          onClick={() => history.push("/chatList")}
        >
          <img
            src={`/images/home/icon-message-circle${
              path === "/chatList" ? "-fill" : ""
            }.png`}
            alt="icon-chat"
          />
          <span>채팅</span>
        </button>
        <button className={styles.btn} onClick={() => history.push("/edit")}>
          <img src="images/home/icon-edit.png" alt="icon-edit" />
          <span>게시물 작성</span>
        </button>
        <button className={styles.btn} onClick={() => history.push("/profile")}>
          <img
            src={`/images/home/icon-user${
              path === "/profile" ? "-fill" : ""
            }.png`}
            alt="icon-user"
          />
          <span>프로필</span>
        </button>
      </div>
    </footer>
  );
};

export default Nav;
