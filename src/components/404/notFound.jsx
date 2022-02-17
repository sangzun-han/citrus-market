import React from "react";
import styles from "./notFound.module.css";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();
  return (
    <main>
      <section className={styles.container}>
        <img src="/images/404/icon-404.png" alt="not-found" />
        <p className={styles.desc}>페이지를 찾을 수 없습니다.</p>
        <button className={styles.backBtn} onClick={() => history.goBack()}>
          이전 페이지
        </button>
      </section>
    </main>
  );
};

export default NotFound;
