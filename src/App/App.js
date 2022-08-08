import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../Assets/CSS/reset.css';
import MainPage from '../Components/Main/MainPage.js';
import OrderPage from '../Components/Order/OrderPage.js';
import NutritionPage from '../Components/Nutrition/NutritionPage.js';
import FamilyPage from '../Components/Family/FamilyPage.js';
import CartPage from '../Components/Cart/CartPage.js';
import AddFruitPage from '../Components/AddFruit/AddFruitPage.js';

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/nutrition" element={<NutritionPage />} />
          <Route path="/family" element={< FamilyPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/add" element={< AddFruitPage />} />
          <Route path="/cart" element={< CartPage />} />
        </Routes>
      </BrowserRouter>
  );
}
