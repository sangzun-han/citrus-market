import React from "react";
import styles from "./chatList.module.css";
import { Redirect } from "react-router-dom";
import Header from "../header/header";
import Nav from "../nav/nav";

const ChatList = ({ isLogin }) => {
  if (!isLogin) return <Redirect to={"/email-login"} />;
  return (
    <div>
      <Header />
      <article className={styles.chat}>
        <div className={styles.img_wrap}>
          <img
            className={styles.profile_img}
            src="images/basic/basic-profile-img.png"
            alt=""
          />
          <div className={styles.newChat} />
        </div>
        <div className={styles.text_wrap}>
          <h2 className={styles.chat_title}>애월읍 위니브 감귤농장</h2>
          <div className={styles.flex_wrap}>
            <p className={styles.chat_content}>이번에 정정 언제하맨마씸?</p>
            <p className={styles.chat_date}>2020.10.25</p>
          </div>
        </div>
      </article>

      <article className={styles.chat}>
        <div className={styles.img_wrap}>
          <img
            className={styles.profile_img}
            src="images/basic/basic-profile-img.png"
            alt=""
          />
        </div>
        <div className={styles.text_wrap}>
          <h2 className={styles.chat_title}>제주감귤마을</h2>
          <div className={styles.flex_wrap}>
            <p className={styles.chat_content}>
              깊은 어둠의 존재감, 롤스로이스 뉴 블랙...........
            </p>
            <p className={styles.chat_date}>2020.10.25</p>
          </div>
        </div>
      </article>
      <Nav />
    </div>
  );
};

export default ChatList;
