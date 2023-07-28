import "./Cart.sass";
import ProductCart from "../../components/ProductCart/ProductCart";
import { cartDB } from "../../context/CartContext";
import SumaryCart from "../../components/SummaryCart/SummaryCart";
import { FaTrashAlt } from "react-icons/fa";
import { BsCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, cleanCart } = cartDB();
  return (
    <div className="cart">
      <h2>Carrinho de Seleções</h2>
      {cart.length > 0 && (
        <div className="cleanCart">
          <Link to="/">
            Continuar Comprando <BsCartPlusFill />
          </Link>
          <button onClick={cleanCart}>
            Remover todos os produtos
            <FaTrashAlt />
          </button>
        </div>
      )}
      {cart.length <= 0 && <h3>Carrinho vazio!!</h3>}
      {cart &&
        cart.map((product) => <ProductCart key={product.cod} data={product} />)}
      {cart.length > 0 && <SumaryCart />}
    </div>
  );
};

export default Cart;
