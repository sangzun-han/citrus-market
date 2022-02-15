import React from "react";
import { Link } from "react-router-dom";
import { API_END_POINT } from "../../constants";
import styles from "./searchBody.module.css";

const SearchBody = ({ userData, searchRef }) => {
  const { image, username, accountname } = userData;
  const highlight = (username) => {
    const start = username.indexOf(searchRef.current.value);
    const end = searchRef.current.value.length + start;

    const first = username.slice(0, start);
    const mid = username.slice(start, end);
    const last = username.slice(end);

    return (
      <div>
        <span className={styles.userName}>{first}</span>
        <span className={`${styles.userName} ${styles.highlight}`}>{mid}</span>
        <span className={styles.userName}>{last}</span>
      </div>
    );
  };

  return (
    <Link to={`/user-profile/${accountname}`}>
      <section className={styles.wrap}>
        <div className={styles.profile_img}>
          {image.includes(`${API_END_POINT}`) ? (
            <img src={image} alt="profile" />
          ) : (
            <img src={`${API_END_POINT}/${image}`} alt="post-img" />
          )}
        </div>
        <div className={styles.info}>
          {highlight(username)}
          <p className={styles.accountName}>@{accountname}</p>
        </div>
      </section>
    </Link>
  );
};

export default SearchBody;
