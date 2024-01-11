import { BrowserRouter,Routes, Route } from "react-router-dom";
import Inicio from "./pages/inicio";
import Cursos from "./pages/cursos";
import Parceiros from "./pages/parceiros";
import Transparencia from "./pages/transparencia";
import CursoSifilis from "./pages/cursoSifilis"

function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/inicio" element={ <Inicio /> } />
            <Route path="/cursos" element={ <Cursos /> } />
            <Route path="/transparencia" element={ <Transparencia /> } />
            <Route path="/parceiros" element={ <Parceiros /> } />
            <Route path="/cursoSifilis" element={ <CursoSifilis /> } />
        </Routes>
        </BrowserRouter>
    )

}

export default AppRoutes;