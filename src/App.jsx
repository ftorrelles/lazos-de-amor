import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./assets/pages/Home";
import NavBar from "./assets/components/NavBar";
import Footer from "./assets/components/Footer";
import Services from "./assets/pages/Services";
import PageTestimony from "./assets/pages/PageTestimony";
import AboutUs from "./assets/pages/AboutUs";
import BusinessCard from "./assets/pages/BusinessCard";

function App() {
  return (
    <HashRouter>
      <div className="App">
        {/* Muestra NavBar y Footer solo si no estás en la ruta /businessCard */}
        <Routes>
          <Route path="/businessCard" element={<BusinessCard />} />
          <Route
            path="*"
            element={
              <>
                <NavBar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/testimony" element={<PageTestimony />} />
                  <Route path="/aboutUs" element={<AboutUs />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
