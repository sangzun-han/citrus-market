import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getCookie } from "../../service/cookie";
import { getInfo } from "../../service/fetcher";
import Nav from "../nav/nav";
import ProfileHeader from "../profile/profileHeader";
import UserProfileInfo from "./userProfileInfo";

const UserProfile = ({ isLogin }) => {
  const { accountName } = useParams();
  const token = getCookie("token");
  const [info, setInfo] = useState("");

  useEffect(() => {
    getInfo(accountName, token).then((res) => {
      setInfo(res.data.profile);
    });
  }, [accountName, token]);

  if (!isLogin) return <Redirect to={"/email-login"} />;

  return (
    <>
      <ProfileHeader />
      <UserProfileInfo info={info} token={token} accountName={accountName} />
      <Nav />
    </>
  );
};

export default UserProfile;
