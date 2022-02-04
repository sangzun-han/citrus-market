import React from "react";
import SearchBody from "./searchBody";

const SearchResult = ({ userData, searchRef }) => {
  return userData.map((item) => {
    return <SearchBody userData={item} searchRef={searchRef} key={item._id} />;
  });
};

export default SearchResult;
