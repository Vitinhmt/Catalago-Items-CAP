import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import "./Detail.sass";
const Detail = ({ data }) => {
  const navigate = useNavigate();

  const {
    Img,
    Nome,
    Codigo_Produto: Codigo,
    Categoria,
    Quantidade,
    Custo_unitario: Valor,
    Descricao,
  } = data;

  const [qtd, setQtd] = useState(1);

  function addCart() {
    const localCart = JSON.parse(localStorage.getItem("Carrinho") || "[]");
    const Cart = [...localCart];
    const total = Number(Valor * qtd).toFixed(2);

    Cart.push({
      img: Img,
      nome: Nome,
      cod: Codigo,
      valor: Valor,
      quantidade: qtd,
      total: total,
    });

    localStorage.setItem("Carrinho", JSON.stringify(Cart));
  }

  return (
    <div className="detail">
      <div className="voltar">
        <button onClick={() => navigate("/")}>
          <BiArrowBack />
          Voltar
        </button>
      </div>
      <img src={Img} alt={Nome} />
      <div className="desc">
        <h2>{Nome}</h2>
        <h3>
          <span>Codigo do produto:</span> {Codigo}
        </h3>
        <h4>
          Categoria: <span>{Categoria}</span>
        </h4>
        <p className="qtd">
          Quantidade disponivel: &nbsp;
          <select
            name="quantidade"
            onChange={(e) => setQtd(e.target.value)}
            value={qtd}
          >
            {Array.from(Array(Quantidade), (_, i) => (
              <option value={i + 1} key={i}>
                {i + 1}
              </option>
            ))}
          </select>
        </p>
        <h5>
          <span>Valor:</span> &nbsp;
          {Valor.toLocaleString("PT-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </h5>
        <p>
          <span>Detalhes:</span> {Descricao}
        </p>
        <button onClick={addCart}>Adicionar ao carrinho</button>
      </div>
    </div>
  );
};

export default Detail;
