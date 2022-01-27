import "./app.css";
import { Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Splash from "./components/splash/splash";
import Login from "./components/login/login";
import LoginEmail from "./components/loginEmail/loginEmail";

function App() {
  const [splash, setSplash] = useState(true);

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
        <LoginEmail />
      </Route>
    </>
  );
}

export default App;
