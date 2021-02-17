import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";
import { Redirect, useHistory } from "react-router-dom";

const Publish = ({ userToken }) => {
  const token = Cookies.get("userToken");
  const history = useHistory();
  console.log(token);

  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [city, setCity] = useState("");
  const [data, setData] = useState("");
  const [preview, setPreview] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("condition", condition);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("city", city);
      formData.append("picture", file);
      const token = userToken;

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        { headers: { authorization: `Bearer ${token}` } }
      );
      console.log(response.data);
      if (response.data._id) {
        history.push(`/offer/${response.data._id}`);
      }

      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return token ? (
    <form onSubmit={handleSubmit}>
      <div className="bgFormulaire">
        <h1 className="titleForm">Vends ton article</h1>

        <div className="formulaire">
          <p className="limitePhoto">Ajoute jusqu'à 20 photos. Voir astuces</p>
          <div className="bgFormPicture">
            <div className="btAddPhoto">
              <label htmlFor="file">
                <div className="fileBt">
                  <p className="plusAddPhoto">+</p>
                  <p>Ajoute des photos</p>
                </div>
              </label>

              <input
                multiple={true}
                id="file"
                type="file"
                className="dlPicture"
                onChange={(event) => {
                  setFile(event.target.files[0]);
                  setPreview(URL.createObjectURL(event.target.files[0]));
                }}
              />
            </div>
            {preview ? (
              <img src={preview} className="preview" />
            ) : (
              <span></span>
            )}
          </div>
        </div>

        <div className="formulaire">
          <div className="inputVendre">
            <p className="titlesPublish">Titre</p>
            <input
              placeholder="ex : Chemise Sézame vert"
              type="text"
              className="inputVendre"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>

          <div className="inputVendre1">
            <p className="titlesPublish">Décris ton article</p>
            <input
              placeholder="ex : Porté quelsues fois, taille correctement"
              className="inputVendre1"
              type="text"
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </div>
        </div>

        <div className="formulaire">
          <div className="inputVendre">
            <p className="titlesPublish">Etat</p>
            <input
              className="inputVendre"
              type="text"
              onChange={(event) => {
                setCondition(event.target.value);
              }}
            />
          </div>
          <div className="inputVendre">
            <p className="titlesPublish">Marque</p>
            <input
              className="inputVendre"
              type="text"
              onChange={(event) => {
                setBrand(event.target.value);
              }}
            />
          </div>

          <div className="inputVendre">
            <p className="titlesPublish">Taille</p>
            <input
              className="inputVendre"
              type="text"
              onChange={(event) => {
                setSize(event.target.value);
              }}
            />
          </div>
          <div className="inputVendre">
            <p className="titlesPublish">Pays</p>
            <input
              className="inputVendre"
              type="text"
              onChange={(event) => {
                setCity(event.target.value);
              }}
            />
          </div>
          <div className="inputVendre">
            <p className="titlesPublish">Couleur</p>
            <input
              className="inputVendre"
              type="text"
              onChange={(event) => {
                setColor(event.target.value);
              }}
            />
          </div>
        </div>

        <div className="formulaire">
          <div className="inputVendre">
            <p className="titlesPublish">Prix</p>
            <input
              placeholder="0,00€"
              className="inputVendre"
              type="text"
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
          </div>
        </div>
        <p className="alertVendeur">
          Un vendeur professionnel se faisant passer pour un consommateur ou un
          non-professionnel sur Vinted encourt les sanctions prévues à l'Article
          L. 132-2 du Code de la Consommation.
        </p>
        <div className="bgBtSubmitOffer">
          <button type="submit" className="btSubmitOffer">
            Envoyer
          </button>
        </div>
      </div>
    </form>
  ) : (
    <Redirect to="/login" />
  );
};

export default Publish;
