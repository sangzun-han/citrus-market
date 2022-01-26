import "./app.css";
import { Route } from "react-router-dom";
import Splash from "./components/splash/splash";
import Test from "./components/test";
import { useEffect, useState } from "react";

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
        <Test />
      </Route>
    </>
  );
}

export default App;
