import { BrowserRouter,Routes, Route } from "react-router-dom";
import Inicio from "./pages/inicio";
import Historia2 from "./pages/historia2";
import Historia3 from "./pages/historia3";
import Parceiros from "./pages/transparencia";
import Transparencia from "./pages/transparencia";
import Contato from "./pages/contato";

function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/inicio" element={ <Inicio /> } />
            <Route path="/historia2" element={ <Historia2 /> } />
            <Route path="/historia3" element={ <Historia3 /> } />
            <Route path="/transparencia" element={ <Transparencia /> } />
            <Route path="/contato" element={ <Contato /> } />
            <Route path="/parceiros" element={ <Parceiros /> } />
        </Routes>
        </BrowserRouter>
    )

}

export default AppRoutes;