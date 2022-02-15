import React from "react";
import { API_END_POINT } from "../../constants";
import styles from "./feedInfo.module.css";

const FeedInfo = ({ post }) => {
  const date = post.createdAt;
  const year = date.substring(0, 4);
  const month = date.substring(5, 7);
  const day = date.substring(8, 10);
  return (
    <>
      <section className={styles.post_user}>
        <header className={styles.post_header}>
          <div className={styles.user_info}>
            <div className={styles.profile_img}>
              <img src={post.author.image} alt="profile-img" />
            </div>

            <div className={styles.user_name}>
              <p className={styles.name}>{post.author.username}</p>
              <p className={styles.accountname}>@{post.author.accountname}</p>
            </div>
          </div>

          <div className={styles.more_img}>
            <img src="/images/profile/s-icon-more-vertical.png" alt="more" />
          </div>
        </header>
      </section>

      <section className={styles.post}>
        <div className={styles.post_desc}>
          <p>{post.content}</p>
        </div>

        <div className={styles.post_img}>
          <img src={post.image.split(",")[0]} alt="post-img" />
        </div>
        <div className={styles.follow_info}>
          <div className={styles.follow}>
            <img src="/images/profile/icon-heart.png" alt="follow" />
            <span className={styles.count}>{post.heartCount}</span>
          </div>
          <div className={styles.comment}>
            <img src="/images/profile/icon-message-circle.png" alt="comment" />
            <span className={styles.count}>{post.commentCount}</span>
          </div>
        </div>
        <div className={styles.date}>
          <span>
            {year}년 {month}월 {day}일
          </span>
        </div>
      </section>
    </>
  );
};

export default FeedInfo;
