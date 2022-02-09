import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getCookie } from "../../service/cookie";
import { getFollowerList } from "../../service/fetcher";
import FollowerHeader from "./followerHeader";
import FollowerInfo from "./followerInfo";

const Follower = ({ isLogin }) => {
  const history = useHistory();
  const accountName = getCookie("accountname");
  const token = getCookie("token");

  const [infos, setInfos] = useState([]);

  useEffect(() => {
    return () => {
      if (!isLogin) {
        history.push("/email-login");
      }
    };
  }, [isLogin, history]);

  useEffect(() => {
    let getFollowerInfo = true;

    getFollowerList(accountName, token).then((res) => {
      if (getFollowerInfo) setInfos(res.data);
    });
    return () => (getFollowerInfo = false);
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
