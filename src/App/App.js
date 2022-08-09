import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../Assets/CSS/reset.css';
import MainPage from '../Components/Main/MainPage.js';
import CartPage from '../Components/Cart/CartPage.js';
import ContextProvider from "../Contexts/ContextsPage";
import Header from "../Components/Header.js";

export default function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cart" element={< CartPage />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}
