import React, { useState } from "react";
import { userFollow, userUnFollow } from "../../service/fetcher";
import styles from "./followerInfo.module.css";

const FollowerInfo = ({ info, token }) => {
  const { image, username, accountname, intro, isfollow } = info;
  const [follow, setFollow] = useState(isfollow);

  const onFollow = () => {
    userFollow(accountname, token).then(() => {
      setFollow(true);
    });
  };

  const unFollow = () => {
    userUnFollow(accountname, token).then(() => {
      setFollow(false);
    });
  };
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
        {follow ? (
          <button className={styles.btn_cancle} onClick={() => unFollow}>
            취소
          </button>
        ) : (
          <button className={styles.btn_follow} onClick={() => onFollow}>
            팔로우
          </button>
        )}
      </div>
    </div>
  );
};

export default FollowerInfo;
