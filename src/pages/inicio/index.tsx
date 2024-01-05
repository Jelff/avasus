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
        <h1>Módulos Educacionais</h1>
        <nav>
          <div>
            <button>Mais populares</button>
          </div>
          <div>
            <button>Mais bem avaliados</button>
          </div>
          <div>
            <button>Mais recentes</button>
          </div>
        </nav>
        <div className="modulos">
          <div className="modulo">
            <img src="/clinic-aspects.png" alt=""></img>
            <div className="text-modulo">
              <p>Sífilis: Aspectos Clínicos e Diagnóstico Diferencial</p>
              <h4>LAIS / EBSSERH</h4>
            </div>
          </div>
          <div className="modulo">
            <img src="/book-sifilis.png" alt=""></img>
            <div className="text-modulo">
              <p>Sífilis: Aspectos Clínicos e Diagnóstico Diferencial</p>
              <h4>UFRN / SEDIS / LAIS / EBSERH</h4>
            </div>
          </div>
          <div className="modulo">
              <img src="/dentist.png" alt=""></img>
            <div className="text-modulo">
              <p>Políticas de atenção à saúde no sistema prisional</p>
              <h4>UFRN / LAIS / SEDIS / HUOL / EBSERH / UC / MS</h4>
            </div>
          </div>
          <button>Ver mais</button>
        </div>
      </div>
      <Rodape />
    </>
  );
}
