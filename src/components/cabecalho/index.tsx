import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="header">
      <Link to="/inicio">
        <div className="logo">
          <img className="logo-img" src="/Avasus-logo.png" alt="Logo" />
        </div>
      </Link>
      <nav className="nav">
        <Link to="/inicio">
          <button className="active">Início</button>
        </Link>
        <Link to="/">
          <button>Sobre Nós</button>
        </Link>
        <Link to="/">
          <button>Cursos</button>
        </Link>
        <Link to="/parceiros">
          <button>Parceiros</button>
        </Link>
        <Link to="/transparencia">
          <button>Transparência</button>
        </Link>
        <Link to="/contato">
          <button>Contato</button>
        </Link>
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
