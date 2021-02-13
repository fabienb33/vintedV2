import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import { Link } from "react-router-dom";

const Signup = ({ setUser }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const history = useHistory();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          username: username,
          email: email,
          password: password,
        }
      );
      if (response.data.token) {
        setUser(response.data.token);
        // Naviguer vers la home page
        history.push("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="connect">
      <p className="titleConnect">S'inscrire</p>
      <form onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          type="text"
          placeholder="Nom d'utilisateur"
          className="imputConnect"
        />
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          placeholder="Email"
          className="imputConnect"
        />
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          placeholder="Mot de passe"
          className="imputConnect"
        />
        <div className="checkNews">
          <input type="checkbox" className="checkBox" />
          <p>S'inscrire à notre newsletter</p>
        </div>
        <p className="disclaimer">
          En m'inscrivant je confirme avoir lu et accepté les Termes &
          Conditions et Politique de Confidentialité de Vinted. Je confirme
          avoir au moins 18 ans.
        </p>
        <button type="submit" className="btConnect">
          Se connecter
        </button>
      </form>
      <Link to="/" className="mdpLost">
        Besoin d'aide ?
      </Link>
    </div>
  );
};

export default Signup;
