import Cabecalho from "../components/cabecalho";
import Rodape from "../components/rodape";
import { useState, useEffect } from "react";

interface Parceiro {
  id: number;
  capa: string;
  titulo: string;
}

export default function Parceiros() {
  const [data, setData] = useState<Parceiro[]>([]);
  useEffect(() => {
    fetch("http://localhost:3004/parceiros")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <Cabecalho />

      <div className="pageContainer">
        <div className="parceiros1-titulo">
          <p className="parceiros1-p">
            Início <b>/ Parceiros</b>
          </p>
          <h2>Nossos parceiros</h2>
          <p>6 de 78 resultados</p>
        </div>
        <div className="parceiros1">
          {data.slice(0, 6).map((item) => (
            <div key={item.id}>
              <div className="parceiros1-img">
                <img
                  className="parceiros1-img-inside"
                  src={item.capa}
                  alt=""
                ></img>
              </div>
              <hr></hr>
              <p>{item.titulo}</p>
            </div>
          ))}
        </div>
        <div className="pagination">
          <img src="./pagination.png" alt=""></img>
        </div>
      </div>
      <Rodape />
    </>
  );
}
