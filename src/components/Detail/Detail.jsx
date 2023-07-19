import "./Detail.sass";
const Detail = ({ data }) => {
  const {
    Img,
    Nome,
    Codigo_Produto,
    Categoria,
    Quantidade,
    Custo_unitario,
    Descricao,
  } = data;

  const quantidade = () => {
    const qtd = [];

    for (let i = 1; i <= Quantidade; i++) {
      qtd.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return qtd;
  };

  return (
    <div className="detail">
      <img src={Img} alt={Nome} />
      <div className="desc">
        <h2>{Nome}</h2>
        <h3>Codigo do produto: {Codigo_Produto}</h3>
        <h4>
          Categoria: <span>{Categoria}</span>
        </h4>
        <p>
          Quantidade disponivel: &nbsp;
          <select name="quantidade" id="quantidade">
            {quantidade()}
          </select>
        </p>
        <h5>
          Valor:
          {Custo_unitario.toLocaleString("PT-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </h5>
        <p>Detalhes: {Descricao}</p>
        <button>Adicionar ao carrinho</button>
      </div>
    </div>
  );
};

export default Detail;
