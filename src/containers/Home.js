import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import profilPic from "../components/Vinted_profil.png";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offers"
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return isLoading ? (
    <p>En cours de chargement...</p>
  ) : (
    <div>
      <div>
        <Hero />
      </div>
      <div className="container">
        {data.offers.map((offer, index) => {
          return (
            <Link key={offer._id} to={`/offer/${offer._id}`}>
              <div className="article">
                <div className="avatarName">
                  {offer.owner.account.avatar ? (
                    <img
                      src={offer.owner.account.avatar.secure_url}
                      className="clientImg"
                      alt=""
                    />
                  ) : (
                    <img src={profilPic} alt="" className="clientImg"></img>
                  )}
                  <span>{offer.owner.account.username}</span>
                </div>

                <img
                  src={offer.product_image.secure_url}
                  className="imgArticleHome"
                  alt=""
                />

                <div className="footerArticle">
                  <span className="price">{offer.product_price} €</span>
                  <div className="taille">
                    {offer.product_details.map((elem, index) => {
                      return <span>{elem.TAILLE}</span>;
                    })}
                  </div>
                  <span className="productName">{offer.product_name}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
