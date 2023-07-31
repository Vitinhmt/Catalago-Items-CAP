import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { cartDB } from "../../context/CartContext";
import currencyFormat from "../../utils/currencyFormat";
import "./Detail.sass";
import ImageValidator from "../../utils/imageValidator";
import { database } from "../../context/DataContext";
const Detail = ({ data }) => {
  const navigate = useNavigate();
  const { setCart } = cartDB();
  const {
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
    if (Cart.find((produto) => produto.cod === Codigo)) {
      alert("Produto já no carrinho!");
      return;
    }

    Cart.push({
      nome: Nome,
      cod: Codigo,
      valor: Valor,
      quantidade: qtd,
      total: total,
    });
    setCart(Cart);
    localStorage.setItem("Carrinho", JSON.stringify(Cart));
    navigate("/carrinho");
  }

  const { cleanFilters } = database();

  return (
    <div className="detail">
      <div className="voltar">
        <button
          onClick={() => {
            navigate("/");
            cleanFilters();
          }}
        >
          <BiArrowBack />
          Inicio
        </button>
      </div>
      <div className="desc">
        <div className="img">
          <ImageValidator Codigo={Codigo} Nome={Nome} />
        </div>
        <div className="infoDetail">
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
            {currencyFormat(Valor)}
          </h5>
          <p>
            <span>Detalhes:</span> {Descricao}
          </p>
          <button onClick={addCart}>Adicionar ao carrinho</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
