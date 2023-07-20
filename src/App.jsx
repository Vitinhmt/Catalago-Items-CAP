import "./app.sass";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import { CartProvider } from "./context/CartContext";

// Pages
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Error from "./pages/Error/Error";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <DataProvider>
        <CartProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/carrinho" element={<Cart />} />
              <Route path="*" element={<Error />} />
              <Route path="/produto/:id" element={<ProductDetail />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </CartProvider>
      </DataProvider>
    </div>
  );
};

export default App;
