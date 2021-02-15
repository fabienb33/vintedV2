import poste from "../components/laposte.png";
import relaycolis from "../components/relaycolis.png";
import mondialrelay from "../components/mondialrelay.png";
import chronoposte from "../components/chronoposte.png";

const Livraison = () => {
  const laposte = "7,99 €";
  const mondialRelay = "3,28€";
  const chronoPoste = "3,43€";
  const relayColis = "3,28€";

  return (
    <>
      <div className="livraison">
        <span>
          <img src={relaycolis} alt="" className="iconOffer"></img>Relais Colis
        </span>
        <span>{relayColis}</span>
      </div>
      <div className="livraison">
        <span>
          <img src={mondialrelay} alt="" className="iconOffer"></img>Mondial
          Relay
        </span>
        <span>{mondialRelay}</span>
      </div>
      <div className="livraison">
        <span>
          <img src={chronoposte} alt="" className="iconOffer"></img>Chrono
          Shop2Shop
        </span>
        <span>{chronoPoste}</span>
      </div>
      <div className="livraison">
        <span>
          <img src={poste} alt="" className="iconOffer"></img>La Poste Colissimo
        </span>
        <span>{laposte}</span>
      </div>
    </>
  );
};

export default Livraison;
