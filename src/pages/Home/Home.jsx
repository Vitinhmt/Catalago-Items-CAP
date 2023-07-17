import "./Home.sass";
import { database } from "../../context/DataContext";

import ProductModel from "../../components/Product/Product";
const Home = () => {
  const { data, loading, error } = database();
  return (
    <main>
      <h1>Catálogo - CAP</h1>
      <section className="produtos">
        {loading === false &&
          error === "" &&
          data.map((produto) => (
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
