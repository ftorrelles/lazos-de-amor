import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./assets/pages/Home";
import NavBar from "./assets/components/NavBar";
import Footer from "./assets/components/Footer";
import Services from "./assets/pages/Services";
import PageTestimony from "./assets/pages/PageTestimony";
import AboutUs from "./assets/pages/AboutUs";

function App() {
  return (
    <>
      {" "}
      <HashRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/testimony" element={<PageTestimony />}></Route>
            <Route path="/aboutUs" element={<AboutUs />}></Route>
          </Routes>
          <Footer />
        </div>
      </HashRouter>
    </>
  );
}

export default App;
