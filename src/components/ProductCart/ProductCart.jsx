import "./ProductCart.sass";
import currencyFormat from "../../utils/currencyFormat";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { cartDB } from "../../context/CartContext";
import ImageValidator from "../../utils/imageValidator";

const ProductCart = ({ data }) => {
  const { cod, nome, quantidade, valor, total } = data;
  const { setCart } = cartDB();
  const navigate = useNavigate();

  const deleteItem = (codigo) => {
    const dataFromLocalStorage = JSON.parse(
      localStorage.getItem("Carrinho") || "[]"
    );
    const copyData = [...dataFromLocalStorage];
    const filterProducts = copyData.filter((produto) => codigo !== produto.cod);
    setCart(filterProducts);
    localStorage.setItem("Carrinho", JSON.stringify(filterProducts));
  };

  return (
    <div className="cartItems">
      <ImageValidator Codigo={cod} Nome={nome} />
      <div className="infos">
        <div>
          <h2>
            <span>Produto: </span>
            {nome}
          </h2>
          <h3>
            <span>Codigo: </span> {cod}
          </h3>
          <h4>
            <span>Quantidade: </span> {quantidade}
          </h4>
          <h5>
            <span>Valor por unidade: </span> {currencyFormat(valor)}
          </h5>
          <h6>
            <span>Total: </span> {currencyFormat(parseInt(total))}
          </h6>
          <button
            className="detalhes"
            onClick={() => navigate(`/produto/${cod}`)}
          >
            Detalhes
          </button>
        </div>
        <button className="deleteItem" onClick={() => deleteItem(cod)}>
          Remover Item <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
