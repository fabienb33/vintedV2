import imgHero from "./bandeau_hero.jpeg";
import imgBas from "./bandeauBas.svg";
const Hero = () => {
  return (
    <div className="hero">
      <div className="vendre">
        <p className="titleVendre">Prêts à faire du tri dans vos placards ?</p>
        <button className="btVendre">Commencez à vendre</button>
        <p className="baselineVendre">Découvrir comment ça marche</p>
      </div>
      <img src={imgBas} alt="" id="img1" className="imgBas" />
      <img
        src={imgHero}
        alt="logo"
        href="https://www.vinted.fr/"
        id="img2"
        className="imgHero"
      />
    </div>
  );
};
export default Hero;
