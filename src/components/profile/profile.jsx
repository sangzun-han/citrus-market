import React, { useEffect, useRef, useState } from "react";
import styles from "./profile.module.css";

import { getCookie } from "../../service/cookie";
import { getInfo, getPost, getProductList } from "../../service/fetcher";
import Nav from "../nav/nav";
import PostArea from "./postArea";
import Product from "./product";
import ProfileHeader from "./profileHeader";
import ProfileInfo from "./profileInfo";
import SettingModal from "../settingModal/settingModal";
import Logout from "../logout/logout";
import { Redirect } from "react-router-dom";

const Profile = ({ isLogin, setIsLogin }) => {
  const accountName = getCookie("accountname");
  const token = getCookie("token");
  const [info, setInfo] = useState("");
  const [products, setProducts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const outSection = useRef();

  useEffect(() => {
    getInfo(accountName, token).then((res) => {
      setInfo(res.data.profile);
    });

    getProductList(accountName, token).then((res) => {
      setProducts(res.data.product);
    });

    getPost(accountName, token).then((res) => {
      setPosts(res.data.post);
    });
  }, [accountName, token]);

  if (!isLogin) return <Redirect to={"/email-login"} />;

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
        <PostArea posts={posts} />
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
