import Cabecalho from "../../components/cabecalho";
import Rodape from "../../components/rodape";
import "./index.css";

export default function Inicio() {
  return (
    <>
      <Cabecalho />
      <div className="inicio-body">
        <img
          src="/avasus-mulher.png"
          alt="uma mulher loira de pele branca sorrindo"
        />
      </div>
      <div className="modulos-educacionais">
        <h2>Módulos Educacionais</h2>
        <nav>
          <div className="modulo-menu">
            <button>Mais populares</button>
          </div>
          <div className="modulo-menu">
            <button>Mais bem avaliados</button>
          </div>
          <div className="modulo-menu">
            <button>Mais recentes</button>
          </div>
        </nav>
        <div className="modulos">
          <div className="modulo">
            <img src="/clinic-aspects.png" alt=""></img>
            <div className="text-modulo">
              <h4>
                Sífilis: Aspectos Clínicos e<br /> Diagnóstico Diferencial
              </h4>
              <p>LAIS / EBSSERH</p>
            </div>
            <div className="inside-module">
              <img className="users-icon" src="users-icon.png" alt=""></img>
              <p>27.645</p>
              <img className="timer-icon" src="timer-icon.png" alt=""></img>
              <p>4h30min</p>
              <img className="5stars-icon" src="5stars.png" alt=""></img>
              <p>5,0</p>
              <button>Ver módulo</button>
            </div>
          </div>
          <div className="modulo">
            <img src="/book-sifilis.png" alt=""></img>
            <div className="text-modulo">
              <h4>
                Sífilis: Aspectos Clínicos e<br /> Diagnóstico Diferencial
              </h4>
              <p>UFRN / SEDIS / LAIS / EBSERH</p>
            </div>
            <div className="inside-module">
              <img className="users-icon" src="users-icon.png" alt=""></img>
              <p>27.645</p>
              <img className="timer-icon" src="timer-icon.png" alt=""></img>
              <p>4h30min</p>
              <img className="5stars-icon" src="5stars.png" alt=""></img>
              <p>5,0</p>
              <button>Ver módulo</button>
            </div>
          </div>
          <div className="modulo">
            <img src="/dentist.png" alt=""></img>
            <div className="text-modulo">
              <h4>
                Políticas de atenção à<br /> saúde no sistema prisional
              </h4>
              <p>
                UFRN / LAIS / SEDIS / HUOL /<br /> EBSERH / UC / MS
              </p>
            </div>
            <div className="inside-module">
              <img className="users-icon" src="users-icon.png" alt=""></img>
              <p>27.645</p>
              <img className="timer-icon" src="timer-icon.png" alt=""></img>
              <p>4h30min</p>
              <img className="5stars-icon" src="5stars.png" alt=""></img>
              <p>5,0</p>
              <button>Ver módulo</button>
            </div>
          </div>
          <div className="vermais-btn">
            <button>Ver mais</button>
          </div>
        </div>
      </div>
      <div className="parceiros">
        <h2>Parceiros</h2>
        <div className="container">
          <div className="parceiro">
            <h2>Governo do RN</h2>
            <p>Governo do Estado do Rio Grande do Norte.</p>
          </div>
          <div className="parceiro">
            <h2>SESAP</h2>
            <p>Secretaria de Saúde Pública do Estado do Rio Grande do Norte.</p>
          </div>
          <div className="parceiro">
            <h2>UFRN</h2>
            <p>Universidade Federal do Rio Grande do Norte.</p>
          </div>
          <div className="parceiro">
            <h2>HUOL</h2>
            <p>
              Hospital Onofre Lopes: Hospital Universitário da UFRN
              (Universidade Federal do Rio Grande do Norte).{" "}
            </p>
          </div>
        </div>
      </div>

      <Rodape />
    </>
  );
}
