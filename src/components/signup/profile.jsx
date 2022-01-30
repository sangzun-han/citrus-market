import React, { useState, useRef } from "react";
import { checkAccountName } from "../../service/fetcher";
import styles from "./profile.module.css";

const Profile = ({ setUserName, setAccountName, setIntro, setImage }) => {
  const imageRef = useRef();
  const userNameRef = useRef();
  const accountNameRef = useRef();
  const introRef = useRef();

  const [accountValid, setAccountValid] = useState(null);
  const [accountDuplicate, setAccountDuplicate] = useState(null);

  // 사용자 이름 유효성 검사
  const checkUserName = () =>
    userNameRef.current.value.length <= 10 &&
    userNameRef.current.value.length >= 2
      ? true
      : false;

  // 계정 아이디 유효성 검사
  const checkAccountValid = () => {
    const reg = /^[a-zA-Z0-9._]*$/;
    const accountName = accountNameRef.current.value;
    const lenAccountName = accountName.length ? true : false;
    return reg.test(accountName) && lenAccountName;
  };

  // 계정 아이디 중복 검사
  const checkAccount = () => {
    if (checkAccountValid()) {
      setAccountValid(true);
      const userData = {
        user: {
          accountname: accountNameRef.current.value,
        },
      };

      checkAccountName(userData).then((res) => {
        setAccountDuplicate(res);
      });
    } else {
      setAccountValid(false);
      if (!accountNameRef.current.value.length) {
        setAccountValid(null);
      }
    }
  };
  return (
    <article>
      <section className={styles.info}>
        <h1 className={styles.title}>프로필 설정</h1>
        <p className={styles.desc}>나중에 언제든지 변경할 수 있습니다.</p>
      </section>

      <section className={styles.user_input}>
        <div className={styles.profile_img}>
          <img
            className={styles.basic_img}
            src="images/signup/basic-profile-img.png"
            alt="basic-profile"
          />
          <label htmlFor="uploadImage">
            <img
              className={styles.upload_file}
              src="images/signup/upload-file.png"
              alt="upload-file"
            />
            <input
              ref={imageRef}
              type="file"
              id="uploadImage"
              accept="image/*"
              hidden
            />
          </label>
        </div>

        <div className={`${styles.input_wrap} ${styles.input_username}`}>
          <label htmlFor="username">사용자 이름</label>
          <input
            ref={userNameRef}
            type="text"
            placeholder="2~10자 이내여야 합니다."
          />
        </div>

        <div className={styles.input_wrap}>
          <label htmlFor="accountID">계정 ID</label>
          <input
            ref={accountNameRef}
            type="text"
            placeholder="영문,숫자,특수문자(.),(__)만 사용 가능합니다."
            onBlur={checkAccount}
          />
          <span className={styles.err}>
            {accountValid === null
              ? ""
              : accountValid === false
              ? "영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다."
              : accountDuplicate === null
              ? ""
              : accountDuplicate === false
              ? "이미 존재하는 아이디입니다."
              : ""}
          </span>
        </div>

        <div className={styles.input_wrap}>
          <label htmlFor="intro">소개</label>
          <input
            rer={introRef}
            type="text"
            placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
          />
        </div>
        <button className={styles.start_btn}>감귤마켓 시작하기</button>
      </section>
    </article>
  );
};

export default Profile;
