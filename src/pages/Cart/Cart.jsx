import { useState, useEffect } from "react";
const Cart = () => {
  const [cart, setCart] = useState();

  useEffect(() => {
    const localCartStorage = JSON.parse(
      localStorage.getItem("Carrinho") || "[]"
    );
    setCart(localCartStorage);
  }, []);

  return <div></div>;
};

export default Cart;
