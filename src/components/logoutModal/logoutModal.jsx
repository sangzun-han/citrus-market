import React from "react";
import { useHistory } from "react-router-dom";
import { deleteCookie, getCookie } from "../../service/cookie";
import styles from "./logoutModal.module.css";

const Logout = ({ setLogoutModal, setIsLogin }) => {
  const history = useHistory();
  const onLogout = () => {
    if (getCookie("token") && getCookie("accountname")) {
      deleteCookie("token");
      deleteCookie("accountname");
      setIsLogin(false);
      history.push("/");
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
