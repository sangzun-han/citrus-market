import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "../header/header";
import Nav from "../nav/nav";

const Profile = ({ isLogin }) => {
  const history = useHistory();

  useEffect(() => {
    if (!isLogin) {
      history.push("/email-login");
    }
  }, [isLogin, history]);

  return (
    <div>
      <Header />
      <h1>profile</h1>
      <Nav />
    </div>
  );
};

export default Profile;
