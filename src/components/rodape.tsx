import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section footer-medium">
        <p>Realização</p>
        <div className="rodape-img">
          <img className="lais-img" src="/lais.png" alt="lais" />
          <img className="ufrn-img" src="/ufrn.png" alt="ufrn" />
        </div>
      </div>
      <div className="footer-section footer-large">
        <div className="lais-description">
          <img className="lais-img-description" src="/lais.png" alt="lais" />
          <p>
            Laboratório de Inovação
            <br /> Tecnológica em Saúde.
          </p>
        </div>
        <div className="links-uteis">
          <p>Links Úteis</p>
          <ul className="lista">
            <Link to="/inicio">
              <li>Início</li>
            </Link>
              <li>Sobre Nós</li> 
            <Link to="/cursos">
              <li>Módulos</li>
            </Link>
            <Link to="/parceiros">
              <li>Parceiros</li>
            </Link>
            <Link to="/transparencia">
              <li>Transparência</li>
            </Link>
          </ul>
        </div>
        <div className="social-imgs">
          <p>Redes Sociais</p>
          <div>
            <img
              className="social-img"
              src="/001-facebook.png"
              alt="facebook-icon"
            />
            <img
              className="social-img"
              src="/003-twitter.png"
              alt="twitter-icon"
            />
            <img
              className="social-img"
              src="/004-instagram.png"
              alt="instagram-icon"
            />
          </div>
        </div>
      </div>
      <div className="footer-section footer-small">
        <p>2022 © LAIS (HUOL). Todos os direitos reservados</p>
      </div>
    </footer>
  );
}
