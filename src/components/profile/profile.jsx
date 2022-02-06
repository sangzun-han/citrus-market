import React, { useEffect, useRef, useState } from "react";
import styles from "./profile.module.css";

import { useHistory } from "react-router-dom";
import { getCookie } from "../../service/cookie";
import { getInfo } from "../../service/fetcher";
import Nav from "../nav/nav";
import PostArea from "./postArea";
import Product from "./product";
import ProfileHeader from "./profileHeader";
import ProfileInfo from "./profileInfo";
import SettingModal from "../settingModal/settingModal";
import Logout from "../logout/logout";

const Profile = ({ isLogin }) => {
  const history = useHistory();
  const accountName = getCookie("accountname");
  const token = getCookie("token");
  const [info, setInfo] = useState("");
  const [modal, setModal] = useState(false);
  const [logout, setLogout] = useState(false);
  const outSection = useRef();

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
      <ProfileHeader modal={modal} setModal={setModal} />
      <div
        ref={outSection}
        className={styles.scroll}
        onClick={() => {
          setModal(false);
        }}
      >
        <ProfileInfo info={info} />
        <Product />
        <PostArea />
        <Nav />
        {modal ? <SettingModal setLogout={setLogout} /> : ""}
        {logout ? <Logout setLogout={setLogout} /> : ""}
      </div>
    </>
  );
};

export default Profile;
