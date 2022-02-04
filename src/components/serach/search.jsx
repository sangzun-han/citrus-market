import React, { useState, useEffect, useRef } from "react";
import styles from "./search.module.css";
import { userSearch } from "../../service/fetcher";
import { getCookie } from "../../service/cookie";
import { useHistory } from "react-router-dom";
import Nav from "../nav/nav";
import SearchHeader from "./searchHeader";
import SearchResult from "./searchResult";

const Search = ({ isLogin }) => {
  const history = useHistory();
  const searchRef = useRef("");
  const [userData, setUserData] = useState([]);
  const onSearch = () => {
    userSearch(searchRef.current.value, getCookie("token")).then((res) => {
      setUserData(res.data);
    });
  };

  useEffect(() => {
    if (!isLogin) {
      history.push("/email-login");
    }
  }, [isLogin, history]);
  return (
    <>
      <SearchHeader searchRef={searchRef} onSearch={onSearch} />
      <div className={styles.wrap}>
        <SearchResult userData={userData} />
      </div>
      <Nav />
    </>
  );
};

export default Search;
