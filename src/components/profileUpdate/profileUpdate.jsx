import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getCookie } from "../../service/cookie";
import { getInfo } from "../../service/fetcher";
import ProfileUpdateHeader from "./profileUpdateHeader";
import ProfileUpdateInfo from "./profileUpdateInfo";
import styles from "./profileUpdate.module.css";

const ProfileUpdate = ({ isLogin }) => {
  const history = useHistory();
  const accountName = getCookie("accountname");
  const token = getCookie("token");
  const [info, setInfo] = useState("");
  const [valid, setValid] = useState(false);
  const [profileImage, setProfileImage] = useState("");

  const allInput = valid === true ? styles.on : "";

  useEffect(() => {
    if (!isLogin) {
      history.push("/email-login");
    }
  }, [isLogin, history]);

  useEffect(() => {
    let isGetInfo = true;
    getInfo(accountName, token).then((res) => {
      if (isGetInfo) {
        setProfileImage(res.data.profile.image);
        setInfo(res.data.profile);
      }
    });
    return () => (isGetInfo = false);
  }, [accountName, token]);

  return (
    <>
      <ProfileUpdateHeader allInput={allInput} valid={valid} />
      <ProfileUpdateInfo
        info={info}
        profileImage={profileImage}
        setProfileImage={setProfileImage}
        setValid={setValid}
      />
    </>
  );
};

export default ProfileUpdate;
