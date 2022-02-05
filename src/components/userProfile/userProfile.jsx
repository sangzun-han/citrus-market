import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getCookie } from "../../service/cookie";
import { getInfo } from "../../service/fetcher";
import Nav from "../nav/nav";
import ProfileHeader from "../profile/profileHeader";
import UserProfileInfo from "./userProfileInfo";

const UserProfile = ({ isLogin }) => {
  const history = useHistory();
  const { accountName } = useParams();
  const token = getCookie("token");
  const [info, setInfo] = useState({});

  useEffect(() => {
    if (!isLogin) {
      history.push("/email-login");
    }
  }, [isLogin, history]);

  useEffect(() => {
    getInfo(accountName, token).then((res) => {
      setInfo(res.data.profile);
    });
  }, [accountName, token]);

  return (
    <>
      <ProfileHeader />
      <UserProfileInfo info={info} token={token} accountName={accountName} />
      <Nav />
    </>
  );
};

export default UserProfile;
