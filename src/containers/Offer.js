import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

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
                <span>{keys[0]}</span>
                <img src={elem.url} alt="" className="photosOffer" />
              </div>
            );
          })}
        </div>

        <div className="productDetails">
          <p>{data.product_price}</p>
          <p>{data.product_name}</p>

          <div>
            {data.product_details.map((elem, index) => {
              const keys = Object.keys(elem);
              return (
                <div>
                  <span>{keys[1]}</span>
                  <span>{elem[keys[0]]}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
