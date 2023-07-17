import "./Product.sass";

const Produto = ({ Name, Desc, Value, Type, Cod, Img }) => {
  return (
    <div className="product">
      <img src={Img} alt={name} />
      <h2>{Name}</h2>
      <h3>{Type}</h3>
      <h3>Cod.: {Cod}</h3>
      <h2>R$ {Value}</h2>
      <p>{Desc}</p>
    </div>
  );
};

export default Produto;
