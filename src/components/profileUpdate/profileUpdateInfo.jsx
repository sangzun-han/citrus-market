import React from "react";
import styles from "./profileUpdateInfo.module.css";

const ProfileUpdateInfo = () => {
  return (
    <section className={styles.container}>
      <div className={styles.profile_img}>
        <img
          className={styles.basic_img}
          src="/images/profile/Ellipse-1.png"
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
          className={styles.user_input}
          type="text"
          placeholder="2~10자 이내여야 합니다."
        />

        <label htmlFor="accountname" className={styles.accountname}>
          계정 ID
        </label>
        <input
          className={styles.user_input}
          type="text"
          placeholder="영문,숫자,특수문자(.),(_)만 사용가능합니다."
        />

        <label htmlFor="intro" className={styles.intro}>
          소개
        </label>
        <input
          className={styles.user_input}
          type="text"
          placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
        />
      </div>
    </section>
  );
};

export default ProfileUpdateInfo;
