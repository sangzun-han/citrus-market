import React, { useEffect, useRef, useState } from "react";
import { checkEmail } from "../../service/fetcher";
import styles from "./signup.module.css";

const Signup = () => {
  const [email, setEmail] = useState(null);
  const [emailValid, setEmailValid] = useState(null);
  const [password, setPassword] = useState(null);
  const [valid, setValid] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();

  const allInput = valid === true ? styles.on : "";

  const handleEmail = () => {
    setEmail(emailRef.current.value);
  };

  const handleEmailValid = (event) => {
    const userData = {
      user: {
        email: emailRef.current.value,
      },
    };
    event.preventDefault();
    checkEmail(userData).then((res) => {
      setEmailValid(res);
    });
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
      <h1 className={styles.title}>이메일로 회원가입</h1>

      <section className={styles.input_wrap}>
        <form>
          <div className={styles.account}>
            <label className={styles.label} htmlFor="email">
              이메일
            </label>
            <input
              ref={emailRef}
              className={styles.input}
              type="text"
              placeholder="이메일 주소를 입력해 주세요"
              onChange={handleEmail}
            />
          </div>
          <span className={styles.emailValid}>
            {emailValid
              ? "사용 가능한 이메일 입니다."
              : emailValid === null
              ? ""
              : "이미 가입된 이메일 주소 입니다."}
          </span>
          <div className={styles.account}>
            <label className={styles.label} htmlFor="password">
              비밀번호
            </label>
            <input
              ref={passwordRef}
              className={`${styles.input} ${styles.pwd}`}
              type="text"
              placeholder="비밀번호를 설정해 주세요"
              onChange={handlePassword}
            />
          </div>
          <button
            className={`${styles.login_btn} ${allInput}`}
            onClick={handleEmailValid}
          >
            다음
          </button>
        </form>
      </section>
    </article>
  );
};

export default Signup;
