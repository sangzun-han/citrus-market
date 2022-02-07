import React, { useState, useEffect, useRef } from "react";
import { checkAccountName } from "../../service/fetcher";
import styles from "./profileUpdateInfo.module.css";

const ProfileUpdateInfo = ({
  info,
  profileImage,
  setProfileImage,
  setValid,
}) => {
  const { username, accountname, intro } = info;

  const imageRef = useRef();
  const userNameRef = useRef();
  const accountNameRef = useRef();
  const introRef = useRef();

  const [userNameValid, setUserNameValid] = useState(null);
  const [accountValid, setAccountValid] = useState(null);
  const [accountDuplicate, setAccountDuplicate] = useState(null);
  const [introValid, setIntroValid] = useState(null);

  // 이미지 미리보기
  const imagePreview = (event) => {
    if (imageRef.current.files.length) {
      let reader = new FileReader();

      reader.onloadend = (event) => {
        setProfileImage(event.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    } else setProfileImage("/images/signup/basic-profile-img.png");
  };

  // 사용자 이름 유효성 검사
  const checkUserName = () => {
    userNameRef.current.value.length <= 10 &&
    userNameRef.current.value.length >= 2
      ? setUserNameValid(true)
      : setUserNameValid(false);
  };

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

  // 소개 유효성 검사
  const checkIntro = () => {
    introRef.current.value ? setIntroValid(true) : setIntroValid(false);
  };

  useEffect(() => {
    if (userNameValid && accountValid && accountDuplicate && introValid) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [userNameValid, accountValid, accountDuplicate, introValid, setValid]);

  return (
    <section className={styles.container}>
      <div className={styles.profile_img}>
        <img
          className={styles.basic_img}
          src={profileImage}
          alt="profile-img"
        />
        <label htmlFor="uploadImage" className={styles.btn_upload}>
          <img
            className={styles.upload_file_img}
            src="/images/profile/upload-file.png"
            alt="upload-file"
          />
          <input
            ref={imageRef}
            type="file"
            id="uploadImage"
            accept="image/*"
            hidden
            onChange={imagePreview}
          />
        </label>
      </div>

      <div className={styles.user_info}>
        <label htmlFor="username" className={styles.username}>
          사용자 이름
        </label>
        <input
          ref={userNameRef}
          className={styles.user_input}
          type="text"
          placeholder="2~10자 이내여야 합니다."
          defaultValue={username}
          onBlur={checkUserName}
        />
        <span className={styles.err}>
          {userNameValid == null
            ? ""
            : !userNameValid
            ? "*사용자 이름은 2~10자 이내여야 합니다."
            : ""}
        </span>
        <label htmlFor="accountname" className={styles.accountname}>
          계정 ID
        </label>
        <input
          ref={accountNameRef}
          className={styles.user_input}
          type="text"
          placeholder="영문,숫자,특수문자(.),(_)만 사용가능합니다."
          defaultValue={accountname}
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
        <label htmlFor="intro" className={styles.intro}>
          소개
        </label>
        <input
          ref={introRef}
          className={styles.user_input}
          type="text"
          placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
          defaultValue={intro}
          onBlur={checkIntro}
        />
        <span className={styles.err}>
          {introValid === null
            ? ""
            : introValid === false
            ? "소개를 입력해주세요"
            : ""}
        </span>
      </div>
    </section>
  );
};

export default ProfileUpdateInfo;
