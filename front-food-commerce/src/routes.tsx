import { Routes, Route } from "react-router-dom";
import Burgers from "./pages/Burgers";
import Drinks from "./pages/Drinks";
import IceCreams from "./pages/IceCreams";
import Main from "./pages/Main";
import Pizzas from "./pages/Pizzas";
import MyCart from "./pages/MyCart";
import Payment from "./pages/Payment";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/" element={<Burgers />} />
        <Route path="/pizzas" element={<Pizzas />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/icecreams" element={<IceCreams />} />
      </Route>
      <Route path="/cart" element={<MyCart />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
}
