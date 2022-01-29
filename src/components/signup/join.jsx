import React, { useState } from "react";
import Membership from "./membership";

const Join = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return <Membership setEmail={setEmail} setPassword={setPassword} />;
};

export default Join;
