import "./Home.sass";
import { database } from "../../context/DataContext";

import ProductModel from "../../components/Product/Product";
import Filters from "../../components/Filters/Filters";
const Home = () => {
  const { filteredProducts, error, loading } = database();
  return (
    <main>
      <h1>Catálogo - CAP</h1>
      <Filters />
      <section className="produtos">
        {loading === false &&
          error === "" &&
          filteredProducts.map((produto) => (
            <ProductModel
              key={produto.Codigo_Produto}
              Name={produto.Nome}
              Desc={produto.Descricao}
              Value={produto.Valor}
              Type={produto.Categoria}
              Cod={produto.Codigo_Produto}
              Img={produto.Img}
            />
          ))}
      </section>
    </main>
  );
};

export default Home;
