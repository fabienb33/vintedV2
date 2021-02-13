import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      if (response.data.token) {
        setUser(response.data.token);
        history.push("/");
      }
    } catch (error) {
      console.log(error.message);
      setErrorMessage("votre email ou votre mot de passe sont incorrect");
      if (error.response) {
        console.log(error.response.message);
      }
    }
  };
  return (
    <div className="connect">
      <p className="titleConnect">Se connecter</p>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          placeholder="Email"
          className="imputConnect"
        />
        <input
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          placeholder="Mot de passe"
          className="imputConnect"
        />
        <button type="submit" className="btConnect">
          Se connecter
        </button>
        <div className="errorMessage">{errorMessage}</div>
      </form>
      <Link to="/" className="mdpLost">
        Mot de passe oublié
      </Link>
      <Link to="/" className="mdpLost">
        Besoin d'aide ?
      </Link>
    </div>
  );
};

export default Login;
