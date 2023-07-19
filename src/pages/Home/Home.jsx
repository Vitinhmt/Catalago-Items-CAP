import "./Home.sass";
import { database } from "../../context/DataContext";

import ProductModel from "../../components/Product/Product";
import Filters from "../../components/Filters/Filters";
const Home = () => {
  const { filteredProducts, error, loading } = database();
  return (
    <main>
      <Filters />
      <section className="produtos">
        {loading === false &&
          error === "" &&
          filteredProducts.map((produto) => (
            <ProductModel key={produto.Codigo_Produto} data={produto} />
          ))}
      </section>
    </main>
  );
};

export default Home;
