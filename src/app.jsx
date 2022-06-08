import "./app.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCookie } from "./service/cookie";
import Splash from "./components/splash/splash";
import { Index } from "./pages/index";
import { Profiles } from "./pages/profiles";
import { ProfilesUpdate } from "./pages/profilesUpdate";
import ProductUpload from "./components/productUpload/productUpload";
import NotFound from "./components/404/notFound";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Chat } from "./pages/chat";
import { Post } from "./pages/post";
import { Followers } from "./pages/followers";
import { Followings } from "./pages/followings";
import { Feed } from "./pages/feed";
import { OtherProfile } from "./pages/otherProfile";
import { Writing } from "./pages/writing";
import { SearchPage } from "./pages/search";

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
    <Router>
      <Switch>
        <Route exact path="/">
          <Index isLogin={isLogin} />
        </Route>
        <Route path="/email-login">
          <Login isLogin={isLogin} setIsLogin={setIsLogin} />
        </Route>
        <Route path="/signup">
          <Register isLogin={isLogin} />
        </Route>
        <Route path="/home">
          <Feed isLogin={isLogin} />
        </Route>
        <Route path="/chatList">
          <Chat isLogin={isLogin} />
        </Route>
        <Route path="/profile">
          <Profiles isLogin={isLogin} setIsLogin={setIsLogin} />
        </Route>
        <Route path="/post/:postID">
          <Post isLogin={isLogin} />
        </Route>
        <Route path="/search">
          <SearchPage isLogin={isLogin} />
        </Route>
        <Route path="/user-profile/:accountName">
          <OtherProfile isLogin={isLogin} setIsLogin={setIsLogin} />
        </Route>
        <Route path="/profile-update">
          <ProfilesUpdate isLogin={isLogin} />
        </Route>
        <Route path="/product-upload">
          <ProductUpload isLogin={isLogin} />
        </Route>
        <Route path="/follower/:accountName">
          <Followers isLogin={isLogin} />
        </Route>
        <Route path="/following/:accountName">
          <Followings isLogin={isLogin} />
        </Route>
        <Route path="/editor">
          <Writing isLogin={isLogin} />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
