import React, { useEffect, useRef, useState } from "react";
import styles from "./profile.module.css";

import { useHistory } from "react-router-dom";
import { getCookie } from "../../service/cookie";
import { getInfo, getProductList } from "../../service/fetcher";
import Nav from "../nav/nav";
import PostArea from "./postArea";
import Product from "./product";
import ProfileHeader from "./profileHeader";
import ProfileInfo from "./profileInfo";
import SettingModal from "../settingModal/settingModal";
import Logout from "../logout/logout";

const Profile = ({ isLogin, setIsLogin }) => {
  const history = useHistory();
  const accountName = getCookie("accountname");
  const token = getCookie("token");
  const [info, setInfo] = useState("");
  const [products, setProducts] = useState([]);
  const [modal, setModal] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const outSection = useRef();

  useEffect(() => {
    return () => {
      if (!isLogin) {
        history.push("/email-login");
      }
    };
  }, [isLogin, history]);

  useEffect(() => {
    let isGetInfo = true;
    getInfo(accountName, token).then((res) => {
      if (isGetInfo) setInfo(res.data.profile);
    });

    getProductList(accountName, token).then((res) => {
      setProducts(res.data.product);
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
        <Product products={products} />
        <PostArea />
        <Nav />
        {modal ? <SettingModal setLogoutModal={setLogoutModal} /> : ""}
        {logoutModal ? (
          <Logout setLogoutModal={setLogoutModal} setIsLogin={setIsLogin} />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Profile;
