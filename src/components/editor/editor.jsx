import React from "react";
import { Redirect } from "react-router-dom";
import EditorHeader from "./editorHeader";
import Nav from "../nav/nav";

const Editor = ({ isLogin }) => {
  if (!isLogin) return <Redirect to={"/email-login"} />;
  return (
    <div>
      <EditorHeader />
      <Nav />
    </div>
  );
};

export default Editor;
