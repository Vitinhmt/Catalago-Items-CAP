import "./Header.sass";
import { BsCart3 } from "react-icons/bs";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import { database } from "../../context/DataContext";

const Header = () => {
  const { cleanFilters } = database();
  return (
    <header>
      <img src={Logo} alt="Concessionária Águas do Paraiba" />
      <h1>Catálogo Intercompany - CAP</h1>
      <nav>
        <ul>
          <li>
            <Link to="/" onClick={cleanFilters}>
              Página Inicial
            </Link>
          </li>
          <li>
            <Link to="/carrinho">
              <BsCart3 />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
