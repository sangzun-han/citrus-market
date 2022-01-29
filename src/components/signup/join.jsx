import React, { useEffect, useState } from "react";
import { join } from "../../service/fetcher";
import Membership from "./membership";

const Join = () => {
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
          email,
          password: password,
          username: userName,
          accountname: accountName,
          intro,
          image: image,
        },
      };

      join(userData).then((res) => {
        if (res.data.message === "회원가입 성공") {
          alert("");
        } else {
          alert(res.data.message);
        }
      });
    }
  }, [email, password, userName, accountName, intro, image]);

  if (email && password) {
    return <h1>222</h1>;
  } else {
    return <Membership setEmail={setEmail} setPassword={setPassword} />;
  }
};

export default Join;
