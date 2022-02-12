import React, { useEffect, useRef, useState } from "react";
import styles from "./profile.module.css";

import { getCookie } from "../../service/cookie";
import { Redirect } from "react-router-dom";
import {
  deletePost,
  getInfo,
  getPost,
  getProductList,
} from "../../service/fetcher";
import Nav from "../nav/nav";
import PostArea from "./postArea";
import Product from "./product";
import ProfileHeader from "./profileHeader";
import ProfileInfo from "./profileInfo";
import SettingModal from "../settingModal/settingModal";
import LogoutModal from "../logoutModal/logoutModal";
import PostModal from "../postModal/postModal";

const Profile = ({ isLogin, setIsLogin }) => {
  const accountName = getCookie("accountname");
  const token = getCookie("token");
  const [info, setInfo] = useState("");
  const [products, setProducts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);

  const [postModal, setPostModal] = useState(false);
  const [postId, setPostId] = useState("");

  const [deleteModal, setDeleteModal] = useState(false);
  const outSection = useRef();

  const handleModal = (id) => {
    if (postModal) {
      setPostModal(false);
    } else {
      setPostModal(true);
    }
    setPostId(id);
  };

  const postDelete = () => {
    deletePost(postId, token)
      .then((res) => {
        if (res) {
          alert("게시글을 삭제했습니다.");
          window.location.replace("/profile");
        }
      })
      .catch((error) => alert(error));
  };

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
        <PostArea posts={posts} handleModal={handleModal} />
        <Nav />
        {modal ? <SettingModal setLogoutModal={setLogoutModal} /> : ""}
        {logoutModal ? (
          <LogoutModal
            setLogoutModal={setLogoutModal}
            setIsLogin={setIsLogin}
          />
        ) : (
          ""
        )}
        {postModal ? <PostModal postDelete={postDelete} /> : ""}
      </div>
    </>
  );
};

export default Profile;
