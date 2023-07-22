import { cartDB } from "../../context/CartContext";
import { Link } from "react-router-dom";
import currencyFormat from "../../utils/currencyFormat";
import { FaWhatsapp } from "react-icons/fa";
import Orquestra from "../../assets/icons/Orquestra.ico";
import "./SummaryCart.sass";

const SumaryCart = () => {
  const { cart } = cartDB();
  const total = cart.reduce((acc, product) => acc + Number(product.total), 0);

  return (
    <div className="summary">
      <h3>Resumo:</h3>
      <p>
        <span>Valor total dos produtos: </span> {currencyFormat(total)}
      </p>
      <div className="Links">
        <Link to="/" target="_blank" className="orquestra">
          Comprar via Orquestra
          <img src={Orquestra} alt="orquestra icon" />
        </Link>
        <Link to="/" target="_blank" className="whatsapp">
          Duvidas pelo whatsapp <FaWhatsapp />
        </Link>
      </div>
    </div>
  );
};

export default SumaryCart;
