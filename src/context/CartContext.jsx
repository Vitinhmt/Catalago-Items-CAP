import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const localCartStorage = JSON.parse(
      localStorage.getItem("Carrinho") || "[]"
    );
    setCart(localCartStorage);
  }, []);
  return (
    <CartContext.Provider value={{ setCart, cart }}>
      {children}
    </CartContext.Provider>
  );
};

export const cartDB = () => {
  return useContext(CartContext);
};
