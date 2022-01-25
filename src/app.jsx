import "./app.css";
import { Route } from "react-router-dom";
import Splash from "./components/splash";

function App() {
  return (
    <>
      <Route exact path="/">
        <Splash />
      </Route>
    </>
  );
}

export default App;
