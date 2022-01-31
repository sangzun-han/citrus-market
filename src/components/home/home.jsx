import React from "react";
import Nav from "../nav/nav";
import styles from "./home.module.css";

const Home = () => {
  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.feed}>감귤마켓 피드</h1>
        <img
          className={styles.search_icon}
          src="/images/home/search-icon.png"
          alt="search"
        />
      </header>
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
