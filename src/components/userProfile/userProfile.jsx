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
  const [info, setInfo] = useState("");

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

  if (!info) return <div>loading</div>;
  return (
    <>
      <ProfileHeader />
      <UserProfileInfo info={info} token={token} accountName={accountName} />
      <Nav />
    </>
  );
};

export default UserProfile;
