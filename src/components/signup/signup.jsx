import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { join } from "../../service/fetcher";
import Membership from "./membership";
import Profile from "./profile";

const Signup = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [accountName, setAccountName] = useState("");
  const [intro, setIntro] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (email && password && userName && accountName && intro) {
      const userData = {
        user: {
          email: email,
          password: password,
          username: userName,
          accountname: accountName,
          intro: intro,
          image: image,
        },
      };

      join(userData).then((res) => {
        if (res) history.push("/email-login");
        else {
          alert("회원가입에 실패했습니다. 다시 시도해주세요!");
        }
      });
    }
  }, [email, password, userName, accountName, intro, image, history]);

  if (email && password) {
    return (
      <Profile
        setUserName={setUserName}
        setAccountName={setAccountName}
        setIntro={setIntro}
        setImage={setImage}
      />
    );
  } else {
    return <Membership setEmail={setEmail} setPassword={setPassword} />;
  }
};

export default Signup;
