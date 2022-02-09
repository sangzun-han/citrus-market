import React, { useEffect, useState } from "react";
import { getCookie } from "../../service/cookie";
import { getFollowerList } from "../../service/fetcher";
import FollowerHeader from "./followerHeader";
import FollowerInfo from "./followerInfo";

const Follower = () => {
  const accountName = getCookie("accountname");
  const token = getCookie("token");
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    getFollowerList(accountName, token).then((res) => {
      setInfos(res.data);
    });
  }, [accountName, token]);
  return (
    <>
      <FollowerHeader />
      {infos.map((info) => {
        return <FollowerInfo key={info._id} info={info} />;
      })}
    </>
  );
};

export default Follower;
