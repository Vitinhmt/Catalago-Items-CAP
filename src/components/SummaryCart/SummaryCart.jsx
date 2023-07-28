import { cartDB } from "../../context/CartContext";
import { Link } from "react-router-dom";
import currencyFormat from "../../utils/currencyFormat";
import { FaWhatsapp } from "react-icons/fa";
import Orquestra from "../../assets/icons/Orquestra.ico";
import "./SummaryCart.sass";

const SumaryCart = () => {
  const { cart } = cartDB();
  const total = cart.reduce((acc, product) => acc + Number(product.total), 0);

  const message = cart.map(
    (product) =>
      `Produto:${product.nome}%20Codigo:${product.cod}%20Quantidade:${product.quantidade}%20%0A`
  );

  const messageWPP = String(message).replace(" ", "%20");

  return (
    <div className="summary">
      <h3>Resumo:</h3>
      <p>
        <span>Valor total dos produtos: </span> {currencyFormat(total)}
      </p>
      <div className="Links">
        <Link
          to="http://orquestra.grupoaguasdobrasil.com.br/workflow/wftoday.aspx?c=T%2bbY7%2fJq4OFPp317bmQGrSW53TMCxJs%2f81lNqGGNI4M%3d#tableTopt"
          target="_blank"
          className="orquestra"
        >
          Comprar via Orquestra
          <img src={Orquestra} alt="orquestra icon" />
        </Link>
        <Link
          to={`https://api.whatsapp.com/send?phone=5522992448278&text=Gostaria%20de%20comprar%20estes%20produtos:%20%0A${messageWPP}`}
          target="_blank"
          className="whatsapp"
        >
          Duvidas pelo whatsapp <FaWhatsapp />
        </Link>
      </div>
    </div>
  );
};

export default SumaryCart;
