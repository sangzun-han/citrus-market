import React from "react";
import { deleteCookie, getCookie } from "../../service/cookie";
import styles from "./logout.module.css";

const Logout = ({ setLogoutModal, setIsLogin }) => {
  const onLogout = () => {
    if (getCookie("token") && getCookie("accountname")) {
      deleteCookie("token");
      deleteCookie("accountname");
      setIsLogin(false);
    }
  };

  return (
    <section className={styles.logout_section}>
      <div className={styles.logout_message}>
        <h1>로그아웃하시겠어요?</h1>
      </div>
      <div className={styles.btn_member}>
        <button
          className={styles.btn_cancle}
          onClick={() => setLogoutModal(false)}
        >
          <span>취소</span>
        </button>
        <button className={styles.btn_logout} onClick={onLogout}>
          <span>로그아웃</span>
        </button>
      </div>
    </section>
  );
};

export default Logout;
