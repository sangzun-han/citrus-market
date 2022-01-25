import "./app.css";
import { Route } from "react-router-dom";
import Splash from "./components/splash";
import Test from "./components/test";
import { useEffect, useState } from "react";

function App() {
  const [splash, setSplash] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSplash(true);
    }, 1000);
  }, []);

  if (!splash) return <Splash />;

  return (
    <>
      <Route exact path="/">
        <Test />
      </Route>
    </>
  );
}

export default App;
