import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { getCookie, setCookie } from "../../service/cookie";
import {
  getInfo,
  profileImageUpload,
  profileUpdate,
} from "../../service/fetcher";
import ProfileUpdateHeader from "./profileUpdateHeader";
import ProfileUpdateInfo from "./profileUpdateInfo";
import styles from "./profileUpdate.module.css";
import { API_END_POINT } from "../../constants";
import { Redirect } from "react-router-dom";

const ProfileUpdate = ({ isLogin }) => {
  const history = useHistory();
  const accountName = getCookie("accountname");
  const token = getCookie("token");
  const [info, setInfo] = useState("");
  const [profileImage, setProfileImage] = useState("");

  const imageRef = useRef();
  const userNameRef = useRef();
  const accountNameRef = useRef();
  const introRef = useRef();

  const [valid, setValid] = useState(false);
  const allInput = valid === true ? styles.on : "";

  // 이미지 업로드
  const imageUpload = async () => {
    return await profileImageUpload(imageRef.current.files).then((res) => {
      return res.data.filename;
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (imageRef.current.files.length) {
      imageUpload().then((res) => {
        const userData = {
          user: {
            username: userNameRef.current.value,
            accountname: accountNameRef.current.value,
            intro: introRef.current.value,
            image: API_END_POINT + "/" + res,
          },
        };
        profileUpdate(userData, token).then((res) => {
          setCookie("accountname", res.data.user.accountname);
          alert("프로필 변경 완료!");
          history.push("/profile");
        });
      });
    } else {
      const userData = {
        user: {
          username: userNameRef.current.value,
          accountname: accountNameRef.current.value,
          intro: introRef.current.value,
          image: info.image,
        },
      };
      profileUpdate(userData, token).then((res) => {
        setCookie("accountname", res.data.user.accountname);
        alert("프로필 변경 완료!");
        history.push("/profile");
      });
    }
  };

  useEffect(() => {
    getInfo(accountName, token).then((res) => {
      setProfileImage(res.data.profile.image);
      setInfo(res.data.profile);
    });
  }, [accountName, token]);

  if (!isLogin) return <Redirect to={"/email-login"} />;

  return (
    <>
      <ProfileUpdateHeader
        allInput={allInput}
        valid={valid}
        accountName={accountNameRef}
        onSubmit={onSubmit}
      />
      <ProfileUpdateInfo
        info={info}
        profileImage={profileImage}
        setProfileImage={setProfileImage}
        imageRef={imageRef}
        userNameRef={userNameRef}
        accountNameRef={accountNameRef}
        introRef={introRef}
        setValid={setValid}
        token={token}
      />
    </>
  );
};

export default ProfileUpdate;
