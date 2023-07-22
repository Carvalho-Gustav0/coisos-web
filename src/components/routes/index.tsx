import { Routes, Route } from "react-router-dom";
import { Home } from "../../pages/home";
import { Rpg } from "../../pages/rpg";
import { Archives } from "../../pages/archives";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/rpg" element={<Rpg />} />
            <Route path="/archives" element={<Archives />} />
            <Route path="*" element={<>Página não encontrada</>} />
        </Routes>
    )
}