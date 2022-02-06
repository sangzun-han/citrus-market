import React from "react";
import styles from "./logout.module.css";

const Logout = ({ setLogout }) => {
  return (
    <section className={styles.logout_section}>
      <div className={styles.logout_message}>
        <h1>로그아웃하시겠어요?</h1>
      </div>
      <div className={styles.btn_member}>
        <button className={styles.btn_cancle} onClick={() => setLogout(false)}>
          <span>취소</span>
        </button>
        <button className={styles.btn_logout}>
          <span>로그아웃</span>
        </button>
      </div>
    </section>
  );
};

export default Logout;
