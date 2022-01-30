import React, { useEffect, useRef, useState } from "react";
import { checkEmail } from "../../service/fetcher";
import styles from "./membership.module.css";

const Membership = ({ setEmail, setPassword }) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [emailValid, setEmailValid] = useState(null);

  const [passwordValid, setPasswordValid] = useState(null);

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

  const onSubmit = (event) => {
    event.preventDefault();
    setEmail(emailRef.current.value);
    setPassword(passwordRef.current.value);
  };

  // 이메일 중복 유효성 검사 && 패스워드 유효성검사
  useEffect(() => {
    if (emailValid && passwordValid) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [emailValid, passwordValid]);

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
              {passwordValid
                ? ""
                : passwordValid === null
                ? ""
                : "비밀번호는 6자리 이상이어야 합니다."}
            </span>
          </div>
          <button
            className={`${styles.login_btn}  ${allInput}`}
            disabled={!valid}
            onClick={onSubmit}
          >
            다음
          </button>
        </form>
      </section>
    </article>
  );
};

export default Membership;
