import React from "react";
import SearchBody from "./searchBody";

const SearchResult = ({ userData }) => {
  return userData.map((item) => {
    return <SearchBody userData={item} key={item._id} />;
  });
};

export default SearchResult;
