import { Link } from "react-router-dom";
import logo from "./Vinted_logo.svg";
const Header = ({ setUser, userToken }) => {
  return (
    <div className="bgHeader">
      <div className="header">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="logo"
            href="https://www.vinted.fr/"
          />
        </Link>

        <div className="sign">
          {userToken ? (
            <button onClick={() => setUser(null)} className="disconnect">
              Se déconnecter
            </button>
          ) : (
            <div className="boxSign">
              <Link to="/Signup" className="signIn">
                S'inscrire&ensp;|&ensp;{" "}
              </Link>
              <Link to="/login" className="signIn">
                Se connecter
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
