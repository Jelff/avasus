import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {

  const location = useLocation();

  const isNavLinkActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <Link to="/inicio">
        <div className="logo">
          <img className="logo-img" src="/Avasus-logo.png" alt="Logo" />
        </div>
      </Link>
      <nav className="nav">
        <Link to="/inicio">
          <button className={isNavLinkActive("/inicio") ? "active" : ""}>Início</button>
        </Link>
          <button>Sobre Nós</button>
        <Link to="/cursos">
          <button className={isNavLinkActive("/cursos") ? "active" : ""}>Cursos</button>
        </Link>
        <Link to="/parceiros">
          <button className={isNavLinkActive("/parceiros") ? "active" : ""}>Parceiros</button>
        </Link>
        <Link to="/transparencia">
          <button className={isNavLinkActive("/transparencia") ? "active" : ""}>Transparência</button>
        </Link> 
          <button>Contato</button>
      </nav>
      <div className="auth-search-container">
        <div className="search">
          <button className="search-btn">
            <img src="/search.png" className="search-img" alt="Buscar" />
          </button>
          <input
            type="text"
            className="search-input"
            placeholder="Buscar por um assunto..."
          />
        </div>
        <div className="auth">
      </div>
          <button className="login-btn">Entrar</button>
          <button className="signup-btn">Cadastrar</button>
        </div>
    </header>
  );
};

export default Header;
