import React from "react";
import styles from "./postArea.module.css";
import PostAreaTop from "./postAreaTop";

const PostArea = () => {
  return (
    <main className={styles.home_post}>
      <PostAreaTop />
      <section className={styles.post_user}>
        <header className={styles.post_header}>
          <div className={styles.user_info}>
            <div className={styles.profile_img}>
              <img src="/assets/Ellipse6.png" alt="profile-img" />
            </div>

            <div className={styles.user_name}>
              <p className={styles.name}>애월읍 위니브 감귤농장</p>
              <p className={styles.accountname}>@weniv_Mandarin</p>
            </div>
          </div>

          <div className={styles.more_img}>
            <img src="/images/profile/s-icon-more-vertical.png" alt="more" />
          </div>
        </header>
      </section>

      <section className={styles.post}>
        <div className={styles.post_desc}>
          <p>
            옷을 인생을 그러므로 없으면 것은 이상은 것은 우리으 위하여, 뿐이다.
            이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고 못할 ㄴ허는
            풍부하게 뛰노는 인생의 힘 이싿.
          </p>
        </div>

        <div className={styles.post_img}>
          <img src="/assets/post-img-example.png" alt="post-img" />
        </div>
        <div className={styles.follow_info}>
          <div className={styles.follow}>
            <img src="/images/profile/icon-heart.png" alt="follow" />
            <span className={styles.count}>58</span>
          </div>
          <div className={styles.comment}>
            <img src="/images/profile/icon-message-circle.png" alt="comment" />
            <span className={styles.count}>58</span>
          </div>
        </div>
        <div className={styles.date}>
          <span>2020년 10월 21일</span>
        </div>
      </section>
    </main>
  );
};

export default PostArea;
