import { cartDB } from "../../context/CartContext";
import { Link } from "react-router-dom";
import currencyFormat from "../../utils/currencyFormat";
import "./SummaryCart.sass";
import { FaWhatsapp } from "react-icons/fa";
import Orquestra from "../../assets/icons/Orquestra.ico";

const SumaryCart = () => {
  const { cart } = cartDB();
  const total = cart.reduce((acc, product) => acc + Number(product.total), 0);

  return (
    <div>
      <h3>Resumo:</h3>
      <p>
        <span>Valor dos produtos: </span> {currencyFormat(total)}
      </p>
      <Link to="/" target="_blank">
        Comprar via Orquestra
        <img src={Orquestra} alt="orquestra icon" />
      </Link>
      <Link to="/">
        Duvidas pelo <FaWhatsapp />
      </Link>
    </div>
  );
};

export default SumaryCart;
