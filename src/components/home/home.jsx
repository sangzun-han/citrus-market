import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "../header/header";
import Nav from "../nav/nav";
import styles from "./home.module.css";

const Home = ({ isLogin }) => {
  const history = useHistory();

  useEffect(() => {
    if (!isLogin) {
      history.push("/email-login");
    }
  }, [isLogin, history]);

  return (
    <article className={styles.container}>
      <Header />
      <section className={styles.main}>
        <img
          className={styles.symbol_logo}
          src="/images/home/symbol-logo-gray.png"
          alt="symbol-logo"
        />
        <p className={styles.desc}>유저를 검색해 팔로우 해보세요</p>
        <button className={styles.search_btn}>검색하기</button>
      </section>
      <Nav />
    </article>
  );
};
export default Home;
