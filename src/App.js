import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cookies from "js-cookie";
import Home from "./containers/Home";
import Offer from "./containers/Offer";
import Header from "./components/Header";
import Login from "./containers/Login";
import Nav from "./components/Nav";
import Signup from "./containers/Signup";
import Publish from "./containers/Publish";

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);
  const setUser = (token) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 7 });
      setUserToken(token);
    } else {
      Cookies.remove("userToken");
      setUserToken(null);
    }
  };

  return (
    <Router>
      <Header userToken={userToken} setUser={setUser} />
      <div className="bgNav">
        <Nav />
      </div>
      <div>
        <Switch>
          <Route path="/offer/:id">
            <Offer></Offer>
          </Route>
          <Route path="/login">
            <Login setUser={setUser} />
          </Route>
          <Route path="/Signup">
            <Signup setUser={setUser} />
          </Route>
          <Route path="/Publish">
            <Publish />
          </Route>
          <Route path="/">
            <Home />
            <div className="articlesContainer"></div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
