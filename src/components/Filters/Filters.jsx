import "./Filters.sass";
import { database } from "../../context/DataContext";

const Filters = () => {
  const { setCode, setDesc, setCategory } = database();
  return (
    <>
      <form>
        <h3 className="filter">Filtre por:</h3>
        <div>
          <label>
            <span>Codigo: </span>
            <input
              type="text"
              name="searchbycode"
              id="searchbycode"
              placeholder="do produto"
              onChange={(e) => setCode(e.target.value)}
            />
          </label>
          <label>
            <span>Descrição: </span>
            <input
              type="text"
              name="searchbydesc"
              id="searchbydesc"
              placeholder="do produto"
              onChange={(e) => setDesc(e.target.value)}
            />
          </label>
          <select
            name="categoriaMateriais"
            id="materiaisSelect"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Todos por categoria</option>
            <option value="CONSTRUÇÃO">Construção</option>
            <option value="ELETRICOS">Eletricos</option>
            <option value="EMBALAGENS">Embalagens</option>
            <option value="ESCRITORIO">Escritorio</option>
            <option value="HIDRAULICOS">Hidraulicos</option>
            <option value="HIGIENE E LIMPEZA">Higiene e Limpeza</option>
            <option value="INFORMATICA">Informática</option>
            <option value="INSTRUMENTACAO">Instrumentação</option>
            <option value="MATERIAIS CHAPARIAS">Materiais Chaparias</option>
            <option value="MECANICA">Mecânica</option>
            <option value="OLEOS E GRAXAS">Óleos e Graxas</option>
            <option value="SEGURANÇA">Segurança</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default Filters;
