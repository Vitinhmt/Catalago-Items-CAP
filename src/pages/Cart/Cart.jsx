import "./Cart.sass";
import ProductCart from "../../components/ProductCart/ProductCart";
import { cartDB } from "../../context/CartContext";
import SumaryCart from "../../components/SummaryCart/SummaryCart";
import { FaTrashAlt } from "react-icons/fa";
import { BsCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { database } from "../../context/DataContext";

const Cart = () => {
  const { cart, cleanCart } = cartDB();
  const { cleanFilters } = database();
  return (
    <div className="cart">
      <h2>Carrinho de Seleções</h2>
      {cart.length > 0 && (
        <div className="cleanCart">
          <Link to="/" onClick={cleanFilters}>
            Continuar Comprando <BsCartPlusFill />
          </Link>
          <button onClick={cleanCart}>
            Remover todos os produtos
            <FaTrashAlt />
          </button>
        </div>
      )}
      {cart.length <= 0 && <h3>Carrinho vazio!!</h3>}
      {cart.length <= 0 && (
        <Link className="continueBuying" to="/" onClick={cleanFilters}>
          Clique aqui para comprar <BsCartPlusFill />
        </Link>
      )}
      {cart &&
        cart.map((product) => <ProductCart key={product.cod} data={product} />)}
      {cart.length > 0 && <SumaryCart />}
    </div>
  );
};

export default Cart;
