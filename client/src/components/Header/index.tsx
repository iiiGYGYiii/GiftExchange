import "./Header.styles.scss";

const Header = () => (
  <header className="app-header">
    <nav className="nav-header-container">
      <div className="nav-header home">
        <a>
          <i className="fas fa-home"></i>
        </a>
      </div>
      <div className="nav-header add">
        <a>
          <i className="fas fa-plus"></i>
        </a>
      </div>
      <div className="nav-header search">
        <a>
          <i className="fas fa-search"></i>
        </a>
      </div>
    </nav>
  </header>
);

export default Header;
