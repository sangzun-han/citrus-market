import React, { useEffect, useState } from "react";
import styles from "./profile.module.css";

import { useHistory } from "react-router-dom";
import { getCookie } from "../../service/cookie";
import { getInfo } from "../../service/fetcher";
import Nav from "../nav/nav";
import PostArea from "./postArea";
import Product from "./product";
import ProfileHeader from "./profileHeader";
import ProfileInfo from "./profileInfo";

const Profile = ({ isLogin }) => {
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
    getInfo(accountName, token).then((res) => {
      setInfo(res.data.profile);
    });
  }, [accountName, token]);

  return (
    <div className={styles.scroll}>
      <ProfileHeader />
      <ProfileInfo info={info} />
      <Product />
      <PostArea />
      <Nav />
    </div>
  );
};

export default Profile;
