import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Curso {
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

export default function Cursos() {
  const itensPorPagina = 6;
  const [curso, setCurso] = useState<Curso[]>([]);
  const [paginaAtual, setPaginaAtual] = useState<number>(1);
  const [totalPaginas, setTotalPaginas] = useState<number>(1);
  const [categoriaSelecionada, setCategoriaSelecionada] =
    useState<string>("Covid 19");

  useEffect(() => {
    const carregarCursos = async () => {
      try {
        const response = await fetch(
          `http://localhost:3004/cursos?_page=${paginaAtual}&_limit=${itensPorPagina}&cateroria=${categoriaSelecionada}`
        );
        if (!response.ok) {
          throw new Error(`Erro ao buscar cursos: ${response.statusText}`);
        }
        const data = await response.json();
        setCurso(data);
      } catch (error) {
        console.error("Erro ao buscar cursos", error);
      }
    };

    const carregarTotalPaginas = async () => {
      try {
        const response = await fetch(
          `http://localhost:3004/cursos?_page=1&_limit=${itensPorPagina}&categoria=${categoriaSelecionada}&cateroria=${categoriaSelecionada}`
        );
        if (!response.ok) {
          throw new Error(
            `Erro ao obter total de páginas: ${response.statusText}`
          );
        }
        const totalItens = parseInt(
          response.headers.get("x-total-count") || "0",
          10
        );
        const totalPages = Math.ceil(totalItens / itensPorPagina);
        setTotalPaginas(totalPages);
      } catch (error) {
        console.error("Erro ao obter total de páginas", error);
      }
    };

    carregarCursos();
    carregarTotalPaginas();
  }, [paginaAtual, categoriaSelecionada]);

  const handlePaginaClick = (pagina: number) => {
    setPaginaAtual(pagina);
  };
  const renderPaginacao = () => {
    const paginas = [];
    const numBotoesVisiveis = 5;
    const metadeBotoesVisiveis = Math.floor(numBotoesVisiveis / 2);

    let inicio = Math.max(1, paginaAtual - metadeBotoesVisiveis);
    let fim = Math.min(totalPaginas, inicio + numBotoesVisiveis - 1);

    if (fim - inicio + 1 < numBotoesVisiveis) {
      fim = Math.min(totalPaginas, inicio + numBotoesVisiveis - 1);
    }

    if (fim - inicio + 1 < numBotoesVisiveis) {
      inicio = Math.max(1, fim - numBotoesVisiveis + 1);
    }

    if (inicio > 1) {
      paginas.push(
        <button
          key={1}
          onClick={() => handlePaginaClick(1)}
          style={{
            borderRadius: paginaAtual === 1 ? "10px 0 0 10px" : "0",
            background: paginaAtual === 1 ? "#D2202C" : "#FAFAFA",
            color: paginaAtual === 1 ? "white" : "black",
            fontWeight: "600",
          }}
        >
          1
        </button>
      );

      if (inicio > 2) {
        paginas.push(
          <div className="reticencias-container">
            <span className="reticencias" key="reticenciasBefore1">
              . . .
            </span>
          </div>
        );
      }
    }

    for (let i = inicio; i <= fim; i++) {
      let buttonStyle: React.CSSProperties = {};

      if (i === paginaAtual) {
        buttonStyle = {
          background: "#D2202C",
          color: "white",
          fontWeight: "600",
        };
      } else if (i === paginaAtual + 1) {
        buttonStyle = {
          background: "#FAFAFA",
          color: "black",
          fontWeight: "600",
        };
      } else {
        buttonStyle = {
          background: "#FAFAFA",
          color: "#808080",
          fontWeight: "600",
        };
      }

      paginas.push(
        <button
          key={i}
          onClick={() => handlePaginaClick(i)}
          style={buttonStyle}
        >
          {i}
        </button>
      );
    }

    if (fim < totalPaginas) {
      if (fim < totalPaginas - 1) {
        paginas.push(
          <div className="reticencias-container">
            <span className="reticencias" key="reticenciasAfter1">
              . . .
            </span>
          </div>
        );
      }
      paginas.push(
        <button
          key={totalPaginas}
          onClick={() => handlePaginaClick(totalPaginas)}
          style={{
            borderRadius: paginaAtual === totalPaginas ? "0 10px 10px 0" : "0",
            background: paginaAtual === totalPaginas ? "#D2202C" : "#FAFAFA",
            color: paginaAtual === totalPaginas ? "white" : "black",
            fontWeight: "600",
          }}
        >
          {totalPaginas}
        </button>
      );
    }

    return paginas;
  };

  return (
    <>
      <div className="pageContainer">
        <p id="cursoTitle">
          Inicio / Cursos <b>/ Módulos</b>
        </p>
        <p className="pageTitle">Módulos educacionais</p>
        <nav className="pageNav">
          {[
            "Covid 19",
            "Síflis e outras ist",
            "Preceptoria",
            "Doenças raras",
            "Web Palestras",
            "Sistema prisional",
            "OPAS",
          ].map((cat, index) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <b
                key={index}
                className={categoriaSelecionada === cat ? "selected" : ""}
                onClick={() => {
                  setCategoriaSelecionada(cat);
                  setPaginaAtual(1);
                }}
                style={{
                  cursor: "pointer",
                  color: categoriaSelecionada === cat ? "#707070" : "#2F2E41",
                }}
              >
                {cat}
              </b>

              <hr
                style={{
                  width: "100%",
                  opacity: categoriaSelecionada === cat ? "100%" : "0%",
                  color: "#707070",
                  border: "solid 1px",
                  borderRadius: "25px",
                }}
              />
            </div>
          ))}
        </nav>
        <label className="pageCounter">
          {itensPorPagina} de {totalPaginas * itensPorPagina} resultados
        </label>

        <div className="pageGrid">
          {curso.map((index) => (
            <div className="module">
              <Link to="/cursoSifilis">
                <img className="moduleImage" src={index.capa} alt="" />
              </Link>
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
              <div className="cursos-btn">
                <Link to={"/cursoSifilis"}>
                  <button>Ver curso</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          {paginaAtual > 1 && (
            <button
              id="anterior"
              onClick={() => handlePaginaClick(paginaAtual - 1)}
            >
              Anterior
            </button>
          )}

          {renderPaginacao()}

          {paginaAtual !== totalPaginas && (
            <button
              id="proximo"
              onClick={() => handlePaginaClick(paginaAtual + 1)}
            >
              Próximo &gt;
            </button>
          )}
        </div>
      </div>
    </>
  );
}
