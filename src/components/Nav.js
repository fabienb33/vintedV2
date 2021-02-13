import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Femmes from "./Femmes";
import Hommes from "./Hommes";
import Enfants from "./Enfants";
import Maison from "./Maison";
import Propos from "./Propos";
import Plateforme from "./Plateforme";

const Nav = () => {
  return (
    <Router>
      <div className="navBar">
        <Switch>
          <Route>
            <div className="nav">
              <Link className="text_decoration">
                <Femmes />
              </Link>
            </div>
            <div className="nav">
              <Link className="text_decoration">
                <Hommes />
              </Link>
            </div>
            <div className="nav">
              <Link className="text_decoration">
                <Enfants />
              </Link>
            </div>
            <div className="nav">
              <Link className="text_decoration">
                <Maison />
              </Link>
            </div>
            <div className="nav">
              <Link className="text_decoration">
                <Propos />
              </Link>
            </div>
            <div className="nav">
              <Link className="text_decoration">
                <Plateforme />
              </Link>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Nav;
