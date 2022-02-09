import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./followerHeader.module.css";

const FollowerHeader = () => {
  const history = useHistory();

  return (
    <header className={styles.header}>
      <div className={styles.back} onClick={() => history.goBack()}>
        <img src="/images/basic/icon-arrow-left.png" alt="icon-arrow-left" />
      </div>
      <h1 className={styles.title}>Followers</h1>
    </header>
  );
};

export default FollowerHeader;
