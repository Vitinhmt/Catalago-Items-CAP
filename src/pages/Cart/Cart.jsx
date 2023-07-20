import "./Cart.sass";
import ProductCart from "../../components/ProductCart/ProductCart";
import { cartDB } from "../../context/CartContext";

const Cart = () => {
  const { cart } = cartDB();
  return (
    <div className="cart">
      <h2>Carrinho de Seleções</h2>
      {cart.length <= 0 && <h3>Carrinho vazio!!</h3>}
      {cart &&
        cart.map((product) => <ProductCart key={product.cod} data={product} />)}
    </div>
  );
};

export default Cart;
