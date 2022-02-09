import React, { useEffect, useRef, useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { getCookie, setCookie } from "../../service/cookie";
import { login } from "../../service/fetcher";
import styles from "./loginEmail.module.css";

const LoginEmail = ({ isLogin, setIsLogin }) => {
  const history = useHistory();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [valid, setValid] = useState(false);

  const [message, setMessage] = useState(null);
  const emailRef = useRef();
  const passwordRef = useRef();

  const allInput = valid === true ? styles.on : "";

  const handleEmail = () => {
    setEmail(emailRef.current.value);
  };

  const handlePassword = () => {
    setPassword(passwordRef.current.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const userData = {
      user: {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      },
    };
    login(userData).then((res) => {
      if (res.data.user) {
        setCookie("accountname", res.data.user.accountname);
        setCookie("token", res.data.user.token);
        setIsLogin(true);
        history.push("/home");
      } else {
        setMessage(false);
      }
    });
  };

  useEffect(() => {
    if (getCookie("token")) {
      setIsLogin(true);
      history.push("/home");
    }
  }, [setIsLogin, history]);

  useEffect(() => {
    if (email && password) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [email, password]);

  if (isLogin) return <Redirect to={"/home"} />;

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
              type="password"
              onChange={handlePassword}
            />
            <span className={styles.err}>
              {message === null
                ? ""
                : message === false
                ? "이메일 또는 비밀번호가 일치하지 않습니다."
                : ""}
            </span>
          </div>
          <button
            className={`${styles.login_btn} ${allInput}`}
            onClick={handleLogin}
          >
            로그인
          </button>
        </form>
        <div className={styles.link}>
          <Link to="/signup">이메일로 회원가입</Link>
        </div>
      </section>
    </article>
  );
};

export default LoginEmail;
