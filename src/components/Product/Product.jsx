import "./Product.sass";
import { Link } from "react-router-dom";
import currencyFormat from "../../utils/currencyFormat";

const Produto = ({ data }) => {
  const {
    Img,
    Nome,
    Codigo_Produto: Codigo,
    Categoria,
    Custo_unitario,
    Descricao,
  } = data;

  return (
    <Link to={`/produto/${Codigo}`} className="product">
      <img src={Img} alt={Nome} />
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
