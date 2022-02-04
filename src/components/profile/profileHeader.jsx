import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./profileHeader.module.css";

const ProfileHeader = () => {
  const history = useHistory();

  return (
    <header className={styles.header}>
      <div className={styles.back} onClick={() => history.goBack()}>
        <img src="/images/profile/icon-arrow-left.png" alt="icon-arrow-left" />
      </div>

      <div className={styles.setting}>
        <img src="/images/profile/s-icon-more-vertical.png" alt="more" />
      </div>
    </header>
  );
};

export default ProfileHeader;
