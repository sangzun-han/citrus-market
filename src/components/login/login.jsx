import React from "react";
import { Link } from "react-router-dom";
import styles from "./login.module.css";

const Login = () => {
  return (
    <article className={styles.background}>
      <section className={styles.logo}>
        <img src="images/login/symbol-logo-W.png" alt="symbol-logo" />
      </section>
      <section className={styles.login_wrap}>
        <div className={styles.login}>
          <button className={`${styles.kakao_login} ${styles.login_button}`}>
            <img src="images/login/message-circle.png" alt="kakao" />
            카카오톡 계정으로 로그인
          </button>
          <button className={`${styles.fb_login} ${styles.login_button}`}>
            <img src="images/login/google.png" alt="kakao" />
            구글 계정으로 로그인
          </button>
          <button className={`${styles.google_login} ${styles.login_button}`}>
            <img src="images/login/facebook.png" alt="kakao" />
            페이스북 계정으로 로그인
          </button>
        </div>
        <div className={styles.account}>
          <Link to="/email-login">
            <span className={styles.email}>이메일로 로그인</span>
          </Link>
          <Link to="/signup">
            <span>회원가입</span>
          </Link>
        </div>
      </section>
    </article>
  );
};

export default Login;
