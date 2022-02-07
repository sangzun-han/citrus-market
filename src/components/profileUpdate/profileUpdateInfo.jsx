import React, { useState, useRef } from "react";
import styles from "./profileUpdateInfo.module.css";

const ProfileUpdateInfo = ({ info }) => {
  const { username, accountname, image, intro } = info;

  const imageRef = useRef();
  const userNameRef = useRef();
  const accountNameRef = useRef();
  const introRef = useRef();

  const [profileImage, setProfileImage] = useState();
  const [userNameValid, setUserNameValid] = useState(false);
  const [accountValid, setAccountValid] = useState(null);
  const [accountDuplicate, setAccountDuplicate] = useState(null);
  const [introValid, setIntroValid] = useState(null);

  const [valid, setValid] = useState(false);
  const allInput = valid === true ? styles.on : "";

  return (
    <section className={styles.container}>
      <div className={styles.profile_img}>
        <img
          ref={imageRef}
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
          <input type="file" id="uploadImage" accept="image/*" hidden />
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
        />

        <label htmlFor="accountname" className={styles.accountname}>
          계정 ID
        </label>
        <input
          ref={accountNameRef}
          className={styles.user_input}
          type="text"
          placeholder="영문,숫자,특수문자(.),(_)만 사용가능합니다."
          defaultValue={accountname}
        />

        <label htmlFor="intro" className={styles.intro}>
          소개
        </label>
        <input
          ref={introRef}
          className={styles.user_input}
          type="text"
          placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
          defaultValue={intro}
        />
      </div>
    </section>
  );
};

export default ProfileUpdateInfo;
