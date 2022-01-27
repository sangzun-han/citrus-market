import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./loginEmail.module.css";

const LoginEmail = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [valid, setValid] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  const allInput = valid === true ? styles.on : "";

  const handleEmail = () => {
    setEmail(emailRef.current.value);
  };

  const handlePassword = () => {
    setPassword(passwordRef.current.value);
  };

  useEffect(() => {
    if (email && password) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [email, password]);
  return (
    <article>
      <h1 className={styles.title}>로그인</h1>

      <section className={styles.input_wrap}>
        <form action="">
          <div className={styles.account}>
            <label className={styles.label} htmlFor="email">
              이메일
            </label>
            <input
              ref={emailRef}
              className={styles.input}
              type="text"
              onChange={handleEmail}
            />
          </div>
          <div className={styles.account}>
            <label className={styles.label} htmlFor="password">
              비밀번호
            </label>
            <input
              ref={passwordRef}
              className={`${styles.input} ${styles.pwd}`}
              type="text"
              onChange={handlePassword}
            />
          </div>
          <button className={`${styles.login_btn} ${allInput}`}>로그인</button>
        </form>
        <div className={styles.link}>
          <Link to="/">이메일로 회원가입</Link>
        </div>
      </section>
    </article>
  );
};

export default LoginEmail;
