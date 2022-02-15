import React from "react";
import styles from "./commentInfo.module.css";
const CommentInfo = ({ comment }) => {
  return (
    <>
      <section className={styles.comment_user}>
        <header className={styles.comment_header}>
          <div className={styles.user_info}>
            <div className={styles.profile_img}>
              <img src={comment.author.image} alt="profile-img" />
            </div>

            <div className={styles.user_name}>
              <p className={styles.name}>{comment.author.username}</p>
              <p className={styles.accountname}>
                @{comment.author.accountname}
              </p>
            </div>
          </div>

          <div className={styles.more_img}>
            <img src="/images/profile/s-icon-more-vertical.png" alt="more" />
          </div>
        </header>
      </section>

      <section className={styles.comment}>
        <div className={styles.comment_desc}>
          <p>{comment.content}</p>
        </div>
      </section>
    </>
  );
};

export default CommentInfo;
