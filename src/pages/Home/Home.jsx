import "./Home.sass";
import { database } from "../../context/DataContext";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import ProductModel from "../../components/Product/Product";
import Filters from "../../components/Filters/Filters";
const Home = () => {
  const { filteredProducts, error, loading } = database();
  return (
    <main>
      <Filters />
      {loading === true && (
        <div className="loading">
          <h3>Carregando Dados....</h3>
          <AiOutlineLoading3Quarters />
        </div>
      )}
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
