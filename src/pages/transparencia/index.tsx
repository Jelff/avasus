import Cabecalho from "../../components/cabecalho";
import Rodape from "../../components/rodape";
import "./index.css";

export default function Transparencia() {
  return (
    <>
      <Cabecalho />
      <div className="container-principal transparencia">
        <div>
          <p>
            Inicio <b>/ Transparencia</b>
          </p>
          <h2>Transparência</h2>
          <h3>Dados Gerais</h3>
          <div className="dados-transparencia">
            <img src="./users-icon.png" alt=""></img>
            <p>Total de usuários registrados</p>
            <h2>850.980</h2>
          </div>
          <div className="dados-transparencia">
            <img src="./files-up.png" alt=""></img>
            <p>Inscrições realizadas</p>
            <h2>2.246.780</h2>
          </div>
          <div className="dados-transparencia">
            <img src="./hat-icon.png" alt=""></img>
            <p>Cursos ativos</p>
            <h2>1.870.190</h2>
          </div>
          <div className="dados-transparencia">
            <img src="./medalha-icon.png" alt=""></img>
            <p>Direito a Certificação</p>
            <h2>324</h2>
          </div>
          <div className="dados-transparencia">
            <img src="./price-hat.png" alt=""></img>
            <p>Investimento médio por curso</p>
            <h2>R$ 42,951</h2>
          </div>
          <div className="dados-transparencia">
            <img src="./profile-money.png" alt=""></img>
            <p>Investimento médio por aluno</p>
            <h2>7,25</h2>
          </div>
        </div>
      </div>
      <Rodape />
    </>
  );
}
