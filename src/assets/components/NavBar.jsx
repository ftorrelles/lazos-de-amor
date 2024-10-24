import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/navbar.css";

const NavBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Estado para determinar si se ha hecho scroll

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Efecto para manejar el cambio de color en el navbar
  useEffect(() => {
    const changeBackground = () => {
      const nav = document.querySelector(".navBar");
      if (window.scrollY >= 100) {
        nav.style.backgroundColor = "#287740"; // Fondo cuando se hace scroll
        setIsScrolled(true);
      } else {
        nav.style.backgroundColor = "transparent"; // Fondo original
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", changeBackground);

    // Eliminar el evento del DOM cuando se desmonte el componente
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <Navbar className={`navBar ${isScrolled ? "scrolled" : ""}`} expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={isScrolled ? "/logoNav2.svg" : "/logoNav.svg"} // Cambia entre los dos logos
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          style={{
            color: sidebarOpen ? "#0f1626" : "white",
            backgroundColor: "white",
            borderColor: "white",
          }}
          onClick={toggleSidebar}
        />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          show={sidebarOpen}
          onHide={() => setSidebarOpen(false)}
          style={{ backgroundColor: "#287740" }}
        >
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link as={Link} to="/services" style={{ color: "#f9f7f7" }}>
                <p>Servicios a tu alcance</p>
              </Nav.Link>
              <Nav.Link as={Link} to="/testimony" style={{ color: "#f9f7f7" }}>
                <p>Testimonios</p>
              </Nav.Link>
              <Nav.Link as={Link} to="/aboutUs" style={{ color: "#f9f7f7" }}>
                <p>Sobre nosotros</p>
              </Nav.Link>
              {/* Puedes agregar más Nav.Link aquí si lo necesitas */}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;
