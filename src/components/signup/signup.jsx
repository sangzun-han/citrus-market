import React, { useEffect, useRef, useState } from "react";
import { checkEmail } from "../../service/fetcher";
import styles from "./signup.module.css";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [email, setEmail] = useState(null);
  const [emailValid, setEmailValid] = useState(null);

  const [password, setPassword] = useState(null);
  const [passwordValid, setPasswordValid] = useState(false);

  const [valid, setValid] = useState(false);
  const allInput = valid === true ? styles.on : "";

  // 이메일 유효성 검사
  const emailCheck = () => {
    const reg =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;
    return reg.test(emailRef.current.value);
  };

  // 비밀번호 유효성 검사
  const passwordCheck = () =>
    passwordRef.current.value.length >= 6 ? true : false;

  // 이메일 중복 검사
  const handleEmailValid = (event) => {
    if (emailCheck()) {
      event.preventDefault();
      const userData = {
        user: {
          email: emailRef.current.value,
        },
      };
      checkEmail(userData).then((res) => {
        setEmailValid(res);
        setEmail(emailRef.current.value);
      });
    } else {
      setEmailValid(null);
    }
  };

  // 패스워드 유효성 검사
  const handlePasswordValid = () => {
    if (passwordCheck()) setPasswordValid(true);
    else setPasswordValid(false);
  };

  // 이메일 중복 유효성 검사 && 패스워드 유효성검사
  useEffect(() => {
    if (emailCheck() && passwordCheck() && emailValid) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [emailValid, emailCheck, passwordCheck]);

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
              onBlur={handleEmailValid}
            />
          </div>
          <span className={styles.err}>
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
              type="password"
              placeholder="비밀번호를 설정해 주세요"
              onChange={handlePasswordValid}
            />
            <span className={styles.err}>
              {passwordValid ? "" : "비밀번호는 6자리 이상이어야 합니다."}
            </span>
          </div>
          <button
            className={`${styles.login_btn}  ${allInput}`}
            disabled={!valid}
          >
            다음
          </button>
        </form>
      </section>
    </article>
  );
};

export default Signup;
