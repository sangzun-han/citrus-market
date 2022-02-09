import React from "react";
import { Redirect } from "react-router-dom";
import Header from "../header/header";
import Nav from "../nav/nav";

const ChatList = ({ isLogin }) => {
  if (!isLogin) return <Redirect to={"/email-login"} />;
  return (
    <div>
      <Header />
      <h1>chatList</h1>
      <Nav />
    </div>
  );
};

export default ChatList;
