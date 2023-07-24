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

  const cleanCart = () => {
    setCart([]);
    localStorage.setItem("Carrinho", []);
  };

  return (
    <CartContext.Provider value={{ setCart, cart, cleanCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const cartDB = () => {
  return useContext(CartContext);
};
