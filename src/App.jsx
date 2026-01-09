import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ItemPage from "./pages/ItemPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { profile } from "./data/profile";

import "./styles/theme.css";
import "./styles/app.css";

export default function App() {
  return (
    <HashRouter>
      <div className="page">
        <Navbar profile={profile} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:type/:id" element={<ItemPage />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}
