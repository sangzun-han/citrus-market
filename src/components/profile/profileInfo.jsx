import React from "react";
import styles from "./profileInfo.module.css";

const ProfileInfo = ({ info }) => {
  const {
    username,
    accountname,
    followerCount,
    followingCount,
    image,
    intro,
    isfollow,
  } = info;
  return (
    <section className={styles.container}>
      <div className={styles.profile_info}>
        <div className={styles.followers}>
          <p className={styles.followers_count}>{followerCount}</p>
          <p className={styles.follow}>followers</p>
        </div>
        <div className={styles.profile_img}>
          <img src={image} alt="profile" />
        </div>
        <div className={styles.followings}>
          <p className={styles.followings_count}>{followingCount}</p>
          <p className={styles.follow}>followings</p>
        </div>
      </div>
      <div className={styles.user_info}>
        <p className={styles.name}>{username}</p>
        <p className={styles.accountName}>@{accountname}</p>
      </div>
      <div className={styles.desc}>
        <p className={styles.detail_desc}>{intro}</p>
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
