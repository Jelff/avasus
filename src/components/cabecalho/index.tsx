import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="header">
      <Link to="/historia1">
        <div className="logo">
          <img className="logo-img" src="/Avasus-logo.png" alt="Logo" />
        </div>
      </Link>
      <nav className="nav">
        <Link to="/historia1">
          <button className="active">Início</button>
        </Link>
        <Link to="/historia2">
          <button>Sobre Nós</button>
        </Link>
        <Link to="/">
          <button>Cursos</button>
        </Link>
        <Link to="/">
          <button>Parceiros</button>
        </Link>
        <Link to="/">
          <button>Transparência</button>
        </Link>
        <Link to="/">
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
          <button className="login-btn">Entrar</button>
          <button className="signup-btn">Cadastrar</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
