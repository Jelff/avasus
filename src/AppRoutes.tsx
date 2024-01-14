import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/inicio";
import Cursos from "./pages/cursos";
import Parceiros from "./pages/parceiros";
import Transparencia from "./pages/transparencia";
import CursoSifilis from "./pages/cursoSifilis";
import Cabecalho from "./components/cabecalho";
import Rodape from "./components/rodape";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/transparencia" element={<Transparencia />} />
        <Route path="/parceiros" element={<Parceiros />} />
        <Route path="/cursoSifilis" element={<CursoSifilis />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
