import Cabecalho from "../../components/cabecalho";
import Rodape from "../../components/rodape";
import "./index.css";
import { useState, useEffect } from "react";

interface dataType {
  id: number;
  categoria: string;
  capa: string;
  titulo: string;
  parceiros: string;
  resumo: string;
  duracao: string;
  matriculados: number;
  criado_em: string;
  avaliacao: string;
  numero_avaliacoes: number;
  sobre: string;
  conteudo: string[];
  creditos: string[];
}

export default function Historia2() {
  const [data, setData] = useState<dataType[]>([]);

  useEffect(() => {
    fetch("http://localhost:3004/cursos")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <Cabecalho />
      <div className="pageContainer">
        <p>
          Inicio / Cursos <b>/ Módulos</b>
        </p>
        <p className="pageTitle">Módulos educacionais</p>
        <nav className="pageNav">
          <label>
            Covid 19
            <hr />
          </label>
          <b>Sifilis e outras ist's</b>
          <b>Preceptoria</b>
          <b>Doenças raras</b>
          <b>Web Palestras</b>
          <b>Sistema Prisional</b>
          <b>OPAS</b>
        </nav>
        <label className="pageCounter">6 de 20 resultados</label>

        <div className="pageGrid">
          {data.slice(3, 9).map((index) => (
            <div className="module">
              <img className="moduleImage" src={index.capa} alt="" />
              <b className="moduleTitle">{index.titulo}</b>
              <b className="moduleAuthor">{index.parceiros}</b>
              <div className="moduleSpecs">
                <div className="specs1">
                  <img src="/users-icon.png" alt="" />
                  <label>{index.matriculados}</label>
                  <img src="/timer-icon.png" alt="" />
                  <label>{index.duracao}</label>
                </div>
                <div className="starRow">
                  <img
                    src={
                      Number(index.avaliacao) < 0.5
                        ? "/emptystar.svg"
                        : Number(index.avaliacao) < 1.0
                        ? "/halfstar.svg"
                        : "/fullstar.svg"
                    }
                    alt=""
                  />
                  <img
                    src={
                      Number(index.avaliacao) < 1.5
                        ? "/emptystar.svg"
                        : Number(index.avaliacao) < 2.0
                        ? "/halfstar.svg"
                        : "/fullstar.svg"
                    }
                    alt=""
                  />
                  <img
                    src={
                      Number(index.avaliacao) < 2.5
                        ? "/emptystar.svg"
                        : Number(index.avaliacao) < 3.0
                        ? "/halfstar.svg"
                        : "/fullstar.svg"
                    }
                    alt=""
                  />
                  <img
                    src={
                      Number(index.avaliacao) < 3.5
                        ? "/emptystar.svg"
                        : Number(index.avaliacao) < 4.0
                        ? "/halfstar.svg"
                        : "/fullstar.svg"
                    }
                    alt=""
                  />
                  <img
                    src={
                      Number(index.avaliacao) < 4.5
                        ? "/emptystar.svg"
                        : Number(index.avaliacao) < 0.5
                        ? "/halfstar.svg"
                        : "/fullstar.svg"
                    }
                    alt=""
                  />
                  <label>{index.avaliacao}</label>
                </div>
              </div>
              <label className="moduleDescription">{index.resumo}</label>
            </div>
          ))}
        </div>

        <div className="itemBarClass">
          <img src="/itembar.svg" alt="" />
        </div>
      </div>
      <Rodape />
    </>
  );
}
