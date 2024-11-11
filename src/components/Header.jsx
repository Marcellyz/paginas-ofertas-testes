import "../components/css/Header.css";
import { IoMdSearch } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { PiTree } from "react-icons/pi";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <PiTree/>
        <h1>Livraria FICR</h1>
      </div>
      <nav className="header-nav">
        <div className="header-search">
          <input type="text" placeholder="Buscar por Titulo"/>
          <IoMdSearch />
        </div>
        <div className="header-nav-category">
          <ul>
            <li>
              <a href="#">Categorias</a>
            </li>
            <li>
              <a href="#">Destaques</a>
            </li>
            <li>
              <a href="#">Clube de ofertas</a>
            </li>
          </ul>
        </div>
        <div className="header-user">
          <FaCircleUser />
          <div className="welcome">
            <p>Seja-bem Vindo</p>
            <p>Entre ou Registre-se</p>
          </div>
        </div>
        <div className="header-carrinho">
            <FaShoppingCart/>
        </div>
      </nav>
    </div>
  );
};

export default Header;
