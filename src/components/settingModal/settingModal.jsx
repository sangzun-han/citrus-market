import React from "react";
import styles from "./settingModal.module.css";

const SettingModal = () => {
  return (
    <main className={styles.modal}>
      <div className={styles.line}>
        <div></div>
      </div>
      <button className={styles.btn_modal}>
        <p className={styles.privacy}>설정 및 개인정보</p>
      </button>
      <button className={styles.btn_modal}>
        <p className={styles.logout}>로그아웃</p>
      </button>
    </main>
  );
};

export default SettingModal;
