import React, { useState, useRef } from "react";
import styles from "./search.module.css";
import { userSearch } from "../../service/fetcher";
import { getCookie } from "../../service/cookie";
import Nav from "../nav/nav";
import SearchHeader from "./searchHeader";
import SearchResult from "./searchResult";
import { Redirect } from "react-router-dom";

const Search = ({ isLogin }) => {
  const searchRef = useRef("");
  const [userData, setUserData] = useState([]);

  const onSearch = () => {
    userSearch(searchRef.current.value, getCookie("token")).then((res) => {
      setUserData(res.data);
    });
  };

  if (!isLogin) return <Redirect to={"/email-login"} />;
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
