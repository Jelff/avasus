// import { useState, useEffect } from "react";

// interface Credito {
//   id: number;
//   capa: string;
// }

export default function CursoSifilis() {
  // const [creditos, setCreditos] = useState<Credito[]>([]);

  // useEffect(() => {
  //   const carregarCreditos = async () => {
  //     try {
  //       const response = await fetch("http://localhost:3004/cursos/creditos"); 
  //       if (!response.ok) {
  //         throw new Error(`Erro ao obter créditos: ${response.statusText}`);
  //       }
  //       const data = await response.json();
  //       setCreditos(data);
  //     } catch (error) {
  //       console.error("Erro ao buscar créditos", error);
  //     }
  //   };

  //   carregarCreditos();
  // }, []);

  return (
    <>
      <div className="bg-img-container">
        <div className="overlay-text pageContainer">
          <p>
            Início / Cursos / Módulos / Sífilis: Aspectos Clínicos e Diagnóstico
            Diferencial
          </p>
          <h1>Sífilis: Aspectos Clínicos e Diagnóstico Diferencial</h1>
          <h2>UFRN / LAIS / SEDIS / HUOL / EBSERH / UC / MS</h2>
        </div>
        <img src="./bgimg.png" className="bg-img" alt="" />
      </div>
      <div className="pageContainer">
        <h1 className="titulo-principal">Informações Gerais do Curso</h1>
        <div className="content">
          <div className="infos-gerais">
            <img src="./timer-icon.png" alt=""></img>
            <p>6 horas</p>
            <img src="./calendar.png" alt=""></img>
            <p>Desde 20/03/2021</p>
            <img src="./users-icon.png" alt=""></img>
            <p>89.654 alunos matriculados</p>
            <img src="./5stars.png" alt=""></img>
            <p>4,9 (52.000 avaliações)</p>
          </div>
        </div>
        <p className="titulo-curso">Sobre o curso</p>
        <div className="sobre-texto">
          <p>
            O módulo “SÍFILIS: ASPECTOS CLÍNICOS E DIAGNÓSTICO DIFERENCIAL” tem
            como objetivo promover uma revisão e atualização dos profissionais
            de saúde acerca dos conceitos essenciais para o reconhecimento da
            sífilis e o estabelecimento da conduta adequada. Neste módulo,
            revisamos os conceitos básicos relacionados aos aspectos clínicos e
            ao diagnóstico diferencial da sífilis, assim como as suas diversas
            formas de apresentação clínica. O módulo contempla ainda as
            apresentações clínicas incomuns, com seus potenciais de gravidade e
            o diagnóstico diferencial com outras patologias com quadros clínicos
            semelhantes. A reemergência justifica a preocupação com todas as
            formas de apresentação da doença, portanto, a proposta é fornecer
            subsídios que embasam a conduta do profissional de saúde na promoção
            de uma atenção integral aos pacientes com sífilis.
          </p>
        </div>
        <p className="titulo-curso">Objetivos</p>
        <div className="objetivos-ge">
          <h4>Objetivo Geral</h4>
          <p>
            Promover a atualização dos profissionais de saúde acerca dos
            conceitos essenciais para o reconhecimento e tratamento precoce da
            sífilis, aspectos fundamentais ao controle da doença.
          </p>
          <h4>Objetivos Específicos</h4>
          <ul>
            <li>Conceituar a sífilis e descrever a sua classificação.</li>
            <li>
              Distinguir as principais formas de apresentação da sífilis e seus
              diagnósticos diferenciais.
            </li>
            <li>
              Reforçar aspectos anatomopatológicos das formas clínicas para
              melhor compreensão da doença.
            </li>
            <li>
              Apresentar formas clínicas incomuns da sífilis que podem ser
              confundidas com outras patologias.
            </li>
          </ul>
        </div>
        <p className="titulo-curso">Recursos educacionais</p>
        <p className="recurso-text">
          Serão utilizados textos no formato de PDF, vídeos, ilustrações,
          infográficos, dentre outros recursos.
        </p>
        <p className="titulo-curso">Créditos</p>
        <img className="creditos-img" src='/lais-credito.png' alt=''></img>
        <img className="creditos-img" src='/sedis-credito.png' alt=''></img>
        <img className="creditos-img" src='/ufrn-credito.png' alt=''></img>
        <img className="creditos-img" src='/ebserh-credito.png' alt=''></img>
        {/* <div>
          {creditos.map((credito) => (
            <div key={credito.id}>
              <img src={credito.capa} alt={`Capa do Curso ${credito.id}`} />
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
}
