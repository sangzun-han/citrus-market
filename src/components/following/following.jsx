import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { getCookie } from "../../service/cookie";
import { getFollowingList } from "../../service/fetcher";
import FollowerHeader from "../follower/followerHeader";
import FollowerInfo from "./followingInfo";

const Following = ({ isLogin }) => {
  const accountName = getCookie("accountname");
  const token = getCookie("token");
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    getFollowingList(accountName, token).then((res) => {
      setInfos(res.data);
    });
  }, [accountName, token]);

  if (!isLogin) return <Redirect to={"/email-login"} />;

  return (
    <>
      <FollowerHeader />
      {infos.map((info) => {
        return <FollowerInfo token={token} key={info._id} info={info} />;
      })}
    </>
  );
};

export default Following;
