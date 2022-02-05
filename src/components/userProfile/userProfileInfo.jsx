import React, { useState } from "react";
import { userFollow, userUnFollow } from "../../service/fetcher";
import styles from "./userProfileInfo.module.css";

const UserProfileInfo = ({ info, token, accountName }) => {
  const {
    username,
    accountname,
    followerCount,
    followingCount,
    image,
    intro,
    isfollow,
  } = info;
  const [follow, setFollow] = useState(isfollow);
  const [follower, setFollower] = useState(followerCount);
  console.log(follower);

  const onFollow = () => {
    userFollow(accountName, token).then((res) => {
      console.log(res);
      setFollow(true);
      setFollower(follower + 1);
    });
  };

  const unFollow = () => {
    userUnFollow(accountName, token).then((res) => {
      console.log(res);
      setFollow(false);
      setFollower(follower - 1);
    });
  };
  return (
    <section className={styles.container}>
      <div className={styles.profile_info}>
        <div className={styles.followers}>
          <p className={styles.followers_count}>{follower}</p>
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
        {follow ? (
          <button className={styles.btn_follow} onClick={unFollow}>
            언팔로우
          </button>
        ) : (
          <button className={styles.btn_follow} onClick={onFollow}>
            팔로우
          </button>
        )}

        <div className={styles.icon_share}>
          <img src="/images/profile/icon-share.png" alt="icon-share" />
        </div>
      </div>
    </section>
  );
};

export default UserProfileInfo;
