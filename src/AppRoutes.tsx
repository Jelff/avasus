import { BrowserRouter,Routes, Route } from "react-router-dom";
import Historia1 from "./pages/historia1";
import Historia2 from "./pages/historia2";

function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/historia1" element={ <Historia1 /> } />
            <Route path="/historia2" element={ <Historia2 /> } />
        </Routes>
        </BrowserRouter>
    )

}

export default AppRoutes;