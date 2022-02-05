import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Nav from "../nav/nav";
import ProfileHeader from "../profile/profileHeader";
import UserProfileInfo from "./userProfileInfo";

const UserProfile = ({ isLogin }) => {
  const history = useHistory();

  useEffect(() => {
    if (!isLogin) {
      history.push("/email-login");
    }
  }, [isLogin, history]);

  return (
    <>
      <ProfileHeader />
      <UserProfileInfo />
      <Nav />
    </>
  );
};

export default UserProfile;
