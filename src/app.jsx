import "./app.css";
import { Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCookie } from "./service/cookie";
import Splash from "./components/splash/splash";
import Login from "./components/login/login";
import LoginEmail from "./components/loginEmail/loginEmail";
import Signup from "./components/signup/signup";
import Home from "./components/home/home";
import ChatList from "./components/chatList/chatList";
import Profile from "./components/profile/profile";
import Search from "./components/serach/search";
import UserProfile from "./components/userProfile/userProfile";
import ProfileUpdate from "./components/profileUpdate/profileUpdate";
import ProductUpload from "./components/productUpload/productUpload";
import Follower from "./components/follower/follower";
import Editor from "./components/editor/editor";
import PostDetail from "./components/postDetail/postDetail";
import Following from "./components/following/following";

function App() {
  const [splash, setSplash] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (getCookie("accountname") && getCookie("token")) setIsLogin(true);

    setTimeout(() => {
      setSplash(false);
    }, 1000);
  }, []);

  if (splash) return <Splash />;

  return (
    <>
      <Route exact path="/">
        <Login isLogin={isLogin} />
      </Route>
      <Route path="/email-login">
        <LoginEmail isLogin={isLogin} setIsLogin={setIsLogin} />
      </Route>
      <Route path="/signup">
        <Signup isLogin={isLogin} />
      </Route>
      <Route path="/home">
        <Home isLogin={isLogin} />
      </Route>
      <Route path="/chatList">
        <ChatList isLogin={isLogin} />
      </Route>
      <Route path="/profile">
        <Profile isLogin={isLogin} setIsLogin={setIsLogin} />
      </Route>
      <Route path="/post/:postID">
        <PostDetail isLogin={isLogin} />
      </Route>
      <Route path="/search">
        <Search isLogin={isLogin} />
      </Route>
      <Route path="/user-profile/:accountName">
        <UserProfile isLogin={isLogin} setIsLogin={setIsLogin} />
      </Route>
      <Route path="/profile-update">
        <ProfileUpdate isLogin={isLogin} />
      </Route>
      <Route path="/product-upload">
        <ProductUpload isLogin={isLogin} />
      </Route>
      <Route path="/follower">
        <Follower isLogin={isLogin} />
      </Route>
      <Route path="/following">
        <Following isLogin={isLogin} />
      </Route>
      <Route path="/editor">
        <Editor isLogin={isLogin} />
      </Route>
    </>
  );
}

export default App;
