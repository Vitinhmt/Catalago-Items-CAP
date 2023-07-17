import "./app.sass";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/DataContext";

// Pages
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Error from "./pages/Error/Error";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

// Components
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div>
      <DataProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carrinho" element={<Cart />} />
            <Route path="*" element={<Error />} />
            <Route path="/produto/:id" element={<ProductDetail />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </div>
  );
};

export default App;
