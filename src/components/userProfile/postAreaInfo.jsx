import React, { useState } from "react";
import { Link } from "react-router-dom";
import { heart, unHeart } from "../../service/fetcher";
import styles from "./postAreaInfo.module.css";
const PostAreaInfo = ({ post, handleModal, token }) => {
  const [hearted, setHearted] = useState(post.hearted);
  const [heartCount, setHeartCount] = useState(post.heartCount);
  const date = post.createdAt;
  const year = date.substring(0, 4);
  const month = date.substring(5, 7);
  const day = date.substring(8, 10);

  const handleHeart = () => {
    if (hearted) {
      unHeart(post.id, token).then((res) => {
        if (res.data.post) {
          setHearted(false);
          setHeartCount((heartCount) => heartCount - 1);
        }
      });
    } else {
      heart(post.id, token).then((res) => {
        if (res.data.post) {
          setHearted(true);
          setHeartCount((heartCount) => heartCount + 1);
        }
      });
    }
  };
  return (
    <>
      <Link to={`/post/${post.id}`}>
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

            <div
              className={styles.more_img}
              onClick={() => handleModal(post.id)}
            >
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
        </section>
      </Link>
      <div className={styles.follow_info}>
        <div className={styles.follow}>
          <img
            src={`/images/basic/icon-heart${hearted ? "-active" : ""}.png`}
            alt="heart"
            onClick={handleHeart}
          />
          <span className={styles.count}>{heartCount}</span>
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
    </>
  );
};

export default PostAreaInfo;
