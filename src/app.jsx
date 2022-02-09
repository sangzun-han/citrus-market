import "./app.css";
import { Route } from "react-router-dom";
import { useEffect, useState } from "react";
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

function App() {
  const [splash, setSplash] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 1000);
  }, []);

  if (splash) return <Splash />;

  return (
    <>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/email-login">
        <LoginEmail isLogin={isLogin} setIsLogin={setIsLogin} />
      </Route>
      <Route path="/signup">
        <Signup />
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
      <Route path="/search">
        <Search isLogin={isLogin} />
      </Route>
      <Route path="/user-profile/:accountName">
        <UserProfile isLogin={isLogin} />
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
    </>
  );
}

export default App;
