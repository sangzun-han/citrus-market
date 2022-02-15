import React, { useEffect } from "react";
import { getComment } from "../../service/fetcher";
import styles from "./comment.module.css";

const Comment = ({ postID, token }) => {
  useEffect(() => {
    getComment(postID, token).then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <>
      <section className={styles.comment_user}>
        <header className={styles.comment_header}>
          <div className={styles.user_info}>
            <div className={styles.profile_img}>
              <img
                src="/images/profile/basic-profile-img.png"
                alt="profile-img"
              />
            </div>

            <div className={styles.user_name}>
              <p className={styles.name}>aa</p>
              <p className={styles.accountname}>@ss</p>
            </div>
          </div>

          <div className={styles.more_img}>
            <img src="/images/profile/s-icon-more-vertical.png" alt="more" />
          </div>
        </header>
      </section>

      <section className={styles.comment}>
        <div className={styles.comment_desc}>
          <p>ㅁ낭;ㅣㅓㅁㄴㅇ;ㅏㅣㅏㅓ</p>
        </div>
      </section>
    </>
  );
};

export default Comment;
