import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";
import { Redirect, useHistory } from "react-router-dom";

const Publish = () => {
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
  const [data, setData] = useState("");
  const [preview, setPreview] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const formData = new FormData();
      formData.append("product_name", title);
      formData.append("product_description", description);
      formData.append("product_price", price);
      formData.append("condition", condition);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("secure_url", file);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
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
    <div className="bgFormulaire">
      <h1 className="titleForm">Vends ton article</h1>
      <div className="formulaire">
        <div className="bgFormPicture">
          <label htmlFor="file">
            <span>toto</span>
          </label>
          <input
            multiple={true}
            id="file"
            type="file"
            className="dlPicture"
            onChange={(event) => {
              // console.log(event);
              setFile(event.target.files[0]);
              setPreview(URL.createObjectURL(event.target.files[0]));
            }}
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="inputVendre">
            <p className="titlesPublish">Titre</p>
            <input
              type="text"
              className="inputVendre"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>
          {preview ? <img src={preview} className="preview" /> : <span></span>}
          <p className="titlesPublish">Décris ton article</p>
          <input
            type="text"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
          <p className="titlesPublish">Prix</p>
          <input
            type="text"
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
          <p className="titlesPublish">Etat</p>
          <input
            type="text"
            onChange={(event) => {
              setCondition(event.target.value);
            }}
          />
          <p className="titlesPublish">Marque</p>
          <input
            type="text"
            onChange={(event) => {
              setBrand(event.target.value);
            }}
          />
          <p className="titlesPublish">Taille</p>
          <input
            type="text"
            onChange={(event) => {
              setSize(event.target.value);
            }}
          />
          <p className="titlesPublish">Couleur</p>
          <input
            type="text"
            onChange={(event) => {
              setColor(event.target.value);
            }}
          />

          <br />

          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  ) : (
    <Redirect to="/login" />
  );
};

export default Publish;
