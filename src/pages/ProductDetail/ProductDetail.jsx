import "./ProductDetail.sass";
import { useParams, useNavigate } from "react-router-dom";
import { database } from "../../context/DataContext";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import Detail from "../../components/Detail/Detail";

const ProductDetail = () => {
  const id = useParams();
  const cod = id.id;
  const { filteredProducts, loading, error } = database();
  const product =
    loading === false &&
    error === "" &&
    filteredProducts.filter(
      (produto) => !cod || produto.Codigo_Produto.includes(cod)
    );

  return (
    <div className="productDetail">
      {!product && loading === true && (
        <div className="loading">
          <h3>Carregando Detalhes....</h3>
          <AiOutlineLoading3Quarters />
        </div>
      )}
      {product &&
        product.map((produto) => (
          <Detail key={produto.Codigo_Produto} data={produto} />
        ))}
    </div>
  );
};

export default ProductDetail;
