import React from "react";
import styles from "./followerInfo.module.css";

const FollowerInfo = ({ info }) => {
  const { image, username, intro, isfollow } = info;
  return (
    <div className={styles.container}>
      <div className={styles.profile_img}>
        <img className={styles.img} src={image} alt="" />
      </div>
      <div className={styles.user_info}>
        <p className={styles.username}>{username}</p>
        <p className={styles.intro}>{intro}</p>
      </div>
      <div className={styles.follow}>
        <button className={styles.btn_follow}>팔로우</button>
      </div>
    </div>
  );
};

export default FollowerInfo;
