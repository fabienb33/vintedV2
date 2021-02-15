import axios from "axios";
import { useState } from "react";

const Publish = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [condition, setCondition] = useState();
  const [brand, setBrand] = useState();
  const [size, setSize] = useState();
  const [color, setColor] = useState();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

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
      formData.append("picture", file);

      const token = "13940390429024";

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h1>Vends ton article</h1>
      <input
        multiple={true}
        type="file"
        onChange={(event) => {
          // console.log(event);
          setFile(event.target.files[0]);
        }}
      />
      <form onSubmit={handleSubmit}>
        <p className="titlesPublish">Titre</p>
        <input
          type="text"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
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
      {isLoading ? (
        <p>En cours de chargement</p>
      ) : (
        <>
          <span>{data.title}</span>
          <img src={data.url} alt={data.title} />
        </>
      )}
    </div>
  );
};

export default Publish;
