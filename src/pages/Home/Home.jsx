import "./Home.sass";
import { database } from "../../context/DataContext";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import ProductModel from "../../components/Product/Product";
import Filters from "../../components/Filters/Filters";
import { usePagination } from "../../hooks/usePagination";

const Home = () => {
  const { loading, error, filteredProducts } = database();
  const { totalPages, paginatedCollection, currentPage, setCurrentPage } =
    usePagination(filteredProducts);
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
        {(loading === false &&
          error === "") &&
          paginatedCollection.map((produto) => (
            <ProductModel key={produto.Codigo_Produto} data={produto} />
          ))}
      </section>
      <div className="pagination">
        {Array.from(Array(totalPages).keys(), (_, index) => (
          <button
            style={
              index + 1 === currentPage
                ? { background: "#1c90ca" }
                : { background: "#a0c9e0" }
            }
            key={index}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </main>
  );
};

export default Home;
