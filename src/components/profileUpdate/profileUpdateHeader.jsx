import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./profileUpdateHeader.module.css";

const ProfileUpdateHeader = ({ valid, allInput, onSubmit }) => {
  const history = useHistory();
  return (
    <header className={styles.header}>
      <div className={styles.back} onClick={() => history.goBack()}>
        <img src="/images/basic/icon-arrow-left.png" alt="icon-arrow-left" />
      </div>

      <div className={styles.save}>
        <button
          className={`${styles.btn_save} ${allInput}`}
          disabled={!valid}
          onClick={onSubmit}
        >
          저장
        </button>
      </div>
    </header>
  );
};

export default ProfileUpdateHeader;
