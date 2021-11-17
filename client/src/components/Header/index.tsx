import { Link } from "wouter";
import "./Header.styles.scss";
import { routes } from "../../utils/constants";

const Header = () => (
  <header className="app-header">
    <nav className="nav-header-container">
      <div className="nav-header home">
        <Link to={routes.home}>
          <i className="fas fa-home"></i>
        </Link>
      </div>
      <div className="nav-header add">
        <Link to={routes.createLobby}>
          <i className="fas fa-plus"></i>
        </Link>
      </div>
      <div className="nav-header search">
        <Link to={routes.searchLobby}>
          <i className="fas fa-search"></i>
        </Link>
      </div>
    </nav>
  </header>
);

export default Header;
