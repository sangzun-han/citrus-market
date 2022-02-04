import React from "react";
import styles from "./searchBody.module.css";

const SearchBody = ({ userData }) => {
  const { image, username, accountname } = userData;
  return (
    <section className={styles.wrap}>
      <div className={styles.profile_img}>
        <img src={image} alt="profile" />
      </div>
      <div className={styles.info}>
        <p className={styles.userName}>{username}</p>
        <p className={styles.accountName}>@{accountname}</p>
      </div>
    </section>
  );
};

export default SearchBody;
