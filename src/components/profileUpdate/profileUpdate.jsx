import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getCookie } from "../../service/cookie";
import { getInfo } from "../../service/fetcher";
import ProfileUpdateHeader from "./profileUpdateHeader";
import ProfileUpdateInfo from "./profileUpdateInfo";

const ProfileUpdate = ({ isLogin }) => {
  const history = useHistory();
  const accountName = getCookie("accountname");
  const token = getCookie("token");
  const [info, setInfo] = useState({});

  useEffect(() => {
    if (!isLogin) {
      history.push("/email-login");
    }
  }, [isLogin, history]);

  useEffect(() => {
    let isGetInfo = true;
    getInfo(accountName, token).then((res) => {
      if (isGetInfo) setInfo(res.data.profile);
    });
    return () => (isGetInfo = false);
  }, [accountName, token]);

  return (
    <>
      <ProfileUpdateHeader />
      <ProfileUpdateInfo info={info} />
    </>
  );
};

export default ProfileUpdate;
