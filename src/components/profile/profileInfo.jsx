import React from "react";
import styles from "./profileInfo.module.css";

const ProfileInfo = () => {
  return (
    <section className={styles.container}>
      <div className={styles.profile_info}>
        <div className={styles.followers}>
          <p className={styles.followers_count}>2950</p>
          <p className={styles.follow}>followers</p>
        </div>
        <div className={styles.profile_img}>
          <img src="/assets/Ellipse-1.png" alt="sample" />
        </div>
        <div className={styles.followings}>
          <p className={styles.followings_count}>128</p>
          <p className={styles.follow}>followings</p>
        </div>
      </div>
      <div className={styles.user_info}>
        <p className={styles.name}>애월읍 위니브 감귤농장</p>
        <p className={styles.accountName}>@ weniv_Mandarin</p>
      </div>
      <div className={styles.desc}>
        <p className={styles.detail_desc}>
          애월읍 감귤 전국 배송,귤따기 체험, 감귤 농장
        </p>
      </div>
      <div className={styles.more}>
        <div className={styles.profile_area}>
          <img src="/images/profile/icon-message-circle.png" alt="message" />
        </div>

        <button className={styles.btn_follow}>팔로우</button>

        <div className={styles.icon_share}>
          <img src="/images/profile/icon-share.png" alt="icon-share" />
        </div>
      </div>
    </section>
  );
};

export default ProfileInfo;
