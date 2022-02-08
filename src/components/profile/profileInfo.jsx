import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./profileInfo.module.css";

const ProfileInfo = ({ info }) => {
  const history = useHistory();
  const { username, accountname, followerCount, followingCount, image, intro } =
    info;
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
        <button
          className={styles.btn_profile_update}
          onClick={() => history.push("/profile-update")}
        >
          프로필 수정
        </button>
        <button
          className={styles.btn_procut}
          onClick={() => history.push("/product-upload")}
        >
          상품 등록
        </button>
      </div>
    </section>
  );
};

export default ProfileInfo;
