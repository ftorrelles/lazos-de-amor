import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import NavBar from "./assets/components/NavBar";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <>
      {" "}
      <HashRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
          <Footer />
        </div>
      </HashRouter>
    </>
  );
}

export default App;
