import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { getCookie } from "../../service/cookie";
import { getFollowerList } from "../../service/fetcher";

import FollowerHeader from "./followerHeader";
import FollowerInfo from "./followerInfo";

const Follower = ({ isLogin }) => {
  const accountName = getCookie("accountname");
  const token = getCookie("token");
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    getFollowerList(accountName, token).then((res) => {
      setInfos(res.data);
    });
  }, [accountName, token]);

  if (!isLogin) return <Redirect to={"/email-login"} />;

  return (
    <>
      <FollowerHeader />
      {infos.map((info) => {
        return (
          <FollowerInfo
            accountName={accountName}
            token={token}
            key={info._id}
            info={info}
          />
        );
      })}
    </>
  );
};

export default Follower;
