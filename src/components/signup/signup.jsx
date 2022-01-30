import React, { useEffect, useState } from "react";
import { join } from "../../service/fetcher";
import Membership from "./membership";
import Profile from "./profile";

const Signup = () => {
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
        console.log(res.data.message);
      });
    }
  }, [email, password, userName, accountName, intro, image]);

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
