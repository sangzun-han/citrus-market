import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./header.module.css";
const Header = () => {
  const history = useHistory();
  return (
    <header className={styles.header}>
      <h1 className={styles.feed}>감귤마켓 피드</h1>
      <button
        className={styles.search_icon_btn}
        onClick={() => history.push("/search")}
      >
        <img
          className={styles.search_icon}
          src="/images/home/search-icon.png"
          alt="search"
        />
      </button>
    </header>
  );
};

export default Header;
