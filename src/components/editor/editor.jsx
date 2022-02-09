import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import EditorHeader from "./editorHeader";
import Nav from "../nav/nav";
import EditorInfo from "./editorInfo";
import { getCookie } from "../../service/cookie";
import { getInfo } from "../../service/fetcher";

const Editor = ({ isLogin }) => {
  const accountName = getCookie("accountname");
  const token = getCookie("token");
  const [image, setImage] = useState("");

  useEffect(() => {
    getInfo(accountName, token).then((res) => {
      setImage(res.data.profile.image);
    });
  });
  if (!isLogin) return <Redirect to={"/email-login"} />;
  return (
    <>
      <EditorHeader />
      <EditorInfo image={image} />
      <Nav />
    </>
  );
};

export default Editor;
