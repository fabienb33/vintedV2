import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import shield from "../components/shield.png";
import Livraison from "../components/Livraison";

const Offer = () => {
  const { id } = useParams();

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <p>En cours de chargement...</p>
  ) : (
    <div className="bgOffer">
      <div className="containerOffer">
        <div className="boxPhotos">
          {data.product_pictures.map((elem, index) => {
            const keys = Object.keys(elem);
            return (
              <div>
                <img src={elem.url} alt="" className="photosOffer" />
              </div>
            );
          })}
        </div>

        <div className="productDetails">
          <p className="priceOffer">{data.product_price}€</p>
          <div className="protect">
            <img src={shield} alt="" className="shield"></img>
            <p className="protectText">
              Sois couvert·e par notre Protection acheteurs Vinted, qui inclut
              notre
              <p className="protectTextColor">politique de remboursement.</p>
            </p>
          </div>
          <Livraison />

          <div className="boxDetails">
            <span className="details0">
              <p>MARQUE</p>
              <p>TAILLE</p>
              <p>ETAT</p>
              <p>COULEUR</p>
              <p>PAYS</p>
            </span>
            <span className="details1">
              {data.product_details.map((elem, index) => {
                const keys = Object.keys(elem);
                return (
                  <div>
                    <span>{elem[keys[0]]}</span>
                  </div>
                );
              })}
            </span>
            <span className="details2"></span>
          </div>
          <div className="boxDescription">
            <p>{data.product_name}</p>
            <p className="description">{data.product_description}</p>
          </div>
          <button type="button" className="button1">
            Envoyer un message
          </button>
          <button type="button" className="button2">
            Acheter
          </button>
          <button type="button" className="button3">
            Favoris
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
