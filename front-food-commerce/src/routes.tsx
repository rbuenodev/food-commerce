import { Routes, Route } from "react-router-dom";
import Burgers from "./pages/Burgers";
import Drinks from "./pages/Drinks";
import IceCreams from "./pages/IceCreams";
import Main from "./pages/Main";
import Pizzas from "./pages/Pizzas";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/" element={<Burgers />} />
        <Route path="/pizzas" element={<Pizzas />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/icecreams" element={<IceCreams />} />
      </Route>
    </Routes>
  );
}
