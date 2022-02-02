import React from "react";
import styles from "./searchHeader.module.css";
const SearchHeader = () => {
  return (
    <header className={styles.search_header}>
      <div>
        <img src="/images/search/icon-arrow-left.png" alt="icon-arrow-left" />
      </div>
      <input
        className={styles.input_search}
        type="text"
        placeholder="계정 검색"
      />
    </header>
  );
};
export default SearchHeader;
