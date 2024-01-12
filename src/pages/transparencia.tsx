import Cabecalho from "../components/cabecalho";
import Rodape from "../components/rodape";
import { useState, useEffect } from "react";

interface transparencia {
  dados_gerais: dados_gerais;
  usuarios_por_curso: usuarios_curso[];
  usuarios_por_estado: usuario_estado[];
}

interface dados_gerais {
  usuarios_registrados: number;
  incricoes_realizadas: number;
  cursos_ativos: number;
  direito_certificacao: number;
  investimento_medio_curso: string;
  investimento_medio_aluno: string;
}

interface usuarios_curso {
  curso: string;
  usuarios: number;
}

interface usuario_estado {
  estados: string;
  usuarios_totais: number;
  direito_certificacao: number;
}

export default function Transparencia() {
  const [data, setData] = useState<transparencia>();

  useEffect(() => {
    fetch("http://localhost:3004/transparecia")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <Cabecalho />
      <div className="pageContainer transparenciaContainer">
        <div>
          <p>
            Inicio <b>/ Transparência</b>
          </p>
          <p className="pageTitle">Transparência</p>
          <div className="container-noflex">
            <h3 className="transparencia-subtitle">Dados Gerais</h3>
            <div className="transparencia-row">
              <div className="dados-transparencia">
                <div className="transparencia-subrow">
                  <img src="./users-icon.png" alt=""></img>
                  <p>Total&nbsp;de&nbsp;usuários&nbsp;registrados</p>
                </div>
                <h2>{data?.dados_gerais.usuarios_registrados}</h2>
              </div>
              <div className="dados-transparencia">
                <div className="transparencia-subrow">
                  <img src="./files-up.png" alt=""></img>
                  <p>Inscrições&nbsp;realizadas</p>
                </div>
                <h2>{data?.dados_gerais.incricoes_realizadas}</h2>
              </div>
              <div className="dados-transparencia">
                <div className="transparencia-subrow">
                  <img src="./hat-icon.png" alt=""></img>
                  <p>Cursos&nbsp;ativos</p>
                </div>
                <h2>{data?.dados_gerais.cursos_ativos}</h2>
              </div>
              <div className="dados-transparencia">
                <div className="transparencia-subrow">
                  <img src="./medalha-icon.png" alt=""></img>
                  <p>Direito&nbsp;a&nbsp;Certificação</p>
                </div>
                <h2>{data?.dados_gerais.direito_certificacao}</h2>
              </div>
            </div>

            <div className="transparencia-row">
              <div className="dados-transparencia">
                <div className="transparencia-subrow">
                  <img src="./price-hat.png" alt=""></img>
                  <p>Investimento médio por curso</p>
                </div>
                <h2>{data?.dados_gerais.investimento_medio_curso}</h2>
              </div>
              <div className="dados-transparencia">
                <div className="transparencia-subrow">
                  <img src="./profile-money.png" alt=""></img>
                  <p>Investimento médio por aluno</p>
                </div>
                <h2>{data?.dados_gerais.investimento_medio_aluno}</h2>
              </div>
            </div>
          </div>

          <div className="transparencia-lastrow">
            <div className="container-noflex lastrowcontent">
              <h3 className="transparencia-subtitle">Usuários por curso</h3>
              <img src="./pizza.svg" alt="" />
              <div className="lastrow-text">
                <div className="lastrow-textline">
                  <span className="white-dot"></span>
                  <p>
                    Curso de prevencão ao suicidio:{" "}
                    {data?.usuarios_por_curso[0].usuarios}
                  </p>
                </div>
                <div className="lastrow-textline">
                  <span className="orange-dot"></span>
                  <p>
                    A covid-19 e seus sintomas:{" "}
                    {data?.usuarios_por_curso[1].usuarios}
                  </p>
                </div>
                <div className="lastrow-textline">
                  <span className="grey-dot"></span>
                  <p>
                    Curso de prevencão ao suicidio:{" "}
                    {data?.usuarios_por_curso[2].usuarios}
                  </p>
                </div>
                <div className="lastrow-textline">
                  <span className="black-dot"></span>
                  <p>
                    Curso de prevencão ao suicidio:{" "}
                    {data?.usuarios_por_curso[3].usuarios}
                  </p>
                </div>
              </div>
            </div>

            <div className="container-noflex lastrowcontent">
              <h3 className="transparencia-subtitle">Usuários por estado</h3>
              <img src="./brazilgraph.svg" alt="" />
              <div className="lastrow-text">
                <div className="lastrow-textline">
                  <span className="white-dot"></span>
                  <p>
                    Curso de prevencão ao suicidio:{" "}
                    {data?.usuarios_por_curso[0].usuarios}
                  </p>
                </div>
                <div className="lastrow-textline">
                  <span className="orange-dot"></span>
                  <p>
                    A covid-19 e seus sintomas:{" "}
                    {data?.usuarios_por_curso[1].usuarios}
                  </p>
                </div>
                <div className="lastrow-textline">
                  <span className="grey-dot"></span>
                  <p>
                    Curso de prevencão ao suicidio:{" "}
                    {data?.usuarios_por_curso[2].usuarios}
                  </p>
                </div>
                <div className="lastrow-textline">
                  <span className="black-dot"></span>
                  <p>
                    Curso de prevencão ao suicidio:{" "}
                    {data?.usuarios_por_curso[3].usuarios}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Rodape />
    </>
  );
}