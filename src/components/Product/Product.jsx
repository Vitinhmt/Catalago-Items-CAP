import "./Product.sass";
import { Link } from "react-router-dom";
import currencyFormat from "../../utils/currencyFormat";
import ImageValidator from "../../utils/imageValidator";

const Produto = ({ data }) => {
  const {
    Nome,
    Codigo_Produto: Codigo,
    Categoria,
    Custo_unitario,
    Descricao,
  } = data;

  return (
    <Link to={`/produto/${Codigo}`} className="product">
      <ImageValidator Codigo={Codigo} Nome={Nome} />
      <div>
        <h2>{Nome}</h2>
        <h3>{Categoria}</h3>
        <h4>Cod.: {Codigo}</h4>
        <h5>{currencyFormat(Custo_unitario)}</h5>
        <p>{Descricao}</p>
      </div>
    </Link>
  );
};

export default Produto;
