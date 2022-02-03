import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./searchHeader.module.css";
const SearchHeader = () => {
  const history = useHistory();
  const onSearch = () => {};
  return (
    <header className={styles.search_header}>
      <div onClick={() => history.goBack()}>
        <img src="/images/search/icon-arrow-left.png" alt="icon-arrow-left" />
      </div>
      <input
        className={styles.input_search}
        type="text"
        placeholder="계정 검색"
        // onChange={onSearch}
      />
    </header>
  );
};
export default SearchHeader;
