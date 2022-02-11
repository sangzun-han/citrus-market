import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./editorHeader.module.css";

const EditorHeader = ({ valid, onSubmit }) => {
  const allInput = valid === true ? styles.on : "";
  const history = useHistory();
  return (
    <header className={styles.header}>
      <div className={styles.back} onClick={() => history.goBack()}>
        <img src="/images/basic/icon-arrow-left.png" alt="icon-arrow-left" />
      </div>

      <div className={styles.save}>
        <button
          className={`${styles.btn_upload} ${allInput}`}
          onClick={onSubmit}
        >
          업로드
        </button>
      </div>
    </header>
  );
};

export default EditorHeader;
