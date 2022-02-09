import React, { useState, useRef } from "react";
import styles from "./search.module.css";
import { userSearch } from "../../service/fetcher";
import { getCookie } from "../../service/cookie";
import Nav from "../nav/nav";
import SearchHeader from "./searchHeader";
import SearchResult from "./searchResult";

const Search = () => {
  const searchRef = useRef("");
  const [userData, setUserData] = useState([]);

  const onSearch = () => {
    userSearch(searchRef.current.value, getCookie("token")).then((res) => {
      setUserData(res.data);
    });
  };
  return (
    <>
      <SearchHeader searchRef={searchRef} onSearch={onSearch} />
      <div className={styles.wrap}>
        <SearchResult userData={userData} searchRef={searchRef} />
      </div>
      <Nav />
    </>
  );
};

export default Search;
