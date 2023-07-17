import "./Product.sass";
import { Link } from "react-router-dom";

const Produto = ({ Name, Desc, Value, Type, Cod, Img }) => {
  return (
    <Link to={`/produto/${Cod}`} className="product">
      <img src={Img} alt={name} />
      <div>
        <h2>{Name}</h2>
        <h3>{Type}</h3>
        <h4>Cod.: {Cod}</h4>
        <h5>R$ {Value}</h5>
        <p>{Desc}</p>
      </div>
    </Link>
  );
};

export default Produto;
