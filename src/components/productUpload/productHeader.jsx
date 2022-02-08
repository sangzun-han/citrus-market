import React from "react";
import styles from "./productHeader.module.css";
import { useHistory } from "react-router-dom";

const ProductHeader = ({ valid, onSubmit }) => {
  const history = useHistory();
  const allInput = valid === true ? styles.on : "";

  return (
    <header className={styles.header}>
      <div className={styles.back} onClick={() => history.goBack()}>
        <img src="/images/profile/icon-arrow-left.png" alt="icon-arrow-left" />
      </div>

      <div className={styles.upload}>
        <button
          className={`${styles.btn_upload} ${allInput}`}
          disabled={!valid}
          onClick={onSubmit}
        >
          저장
        </button>
      </div>
    </header>
  );
};

export default ProductHeader;
