import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Nav from "../nav/nav";
import ProfileHeader from "./profileHeader";
import ProfileInfo from "./profileInfo";

const Profile = ({ isLogin }) => {
  const history = useHistory();

  useEffect(() => {
    if (!isLogin) {
      history.push("/email-login");
    }
  }, [isLogin, history]);

  return (
    <>
      <ProfileHeader />
      <ProfileInfo />
      <Nav />
    </>
  );
};

export default Profile;
