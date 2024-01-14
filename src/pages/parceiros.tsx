import { useState, useEffect } from "react";

interface Parceiro {
  id: number;
  capa: string;
  titulo: string;
}

export default function Parceiros() {
  const itensPorPagina = 6;
  const [parceiros, setParceiros] = useState<Parceiro[]>([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);

  useEffect(() => {
    const carregarParceiros = async () => {
      try {
        fetch(
          `http://localhost:3004/parceiros?_page=${paginaAtual}&_limit=${itensPorPagina}`
        )
          .then((response) => response.json())
          .then((data) => setParceiros(data));
      } catch (error) {
        console.error("Erro ao buscar parceiros", error);
      }
    };

    const carregarTotalPaginas = async () => {
      try {
        const response = await fetch(
          `http://localhost:3004/parceiros?_page=1&_limit=${itensPorPagina}`
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

    carregarParceiros();
    carregarTotalPaginas();
  }, [paginaAtual]);

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
        <div className="parceiros1-titulo">
          <p className="parceiros1-p">
            Início <b>/ Parceiros</b>
          </p>
          <h2>Nossos parceiros</h2>
          <p>
            {itensPorPagina} de {totalPaginas * itensPorPagina} resultados
          </p>
        </div>
        <div className="parceiros1">
          {parceiros.map((item) => (
            <div key={item.id} className="parceiros1-img-container">
              <div className="parceiros1-img">
                <img src={item.capa} alt=""></img>
              </div>
              <hr></hr>
              <p>{item.titulo}</p>
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
